// src/app/features/admin/productos/product-form/product-form.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../interfaces/productos_interface';
import { ProductosService } from '../../service/productos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http'; // 1. Importar HttpErrorResponse

@Component({
  selector: 'app-product-form-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form-component.html',
  styleUrl: './product-form-component.scss',
})
export class ProductFormComponent implements OnInit {
  public newProducto: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    categoria: '',
  };
  public isEditMode: boolean = false;

  public errorMessage: string | null = null;

  constructor(
    private ProductosService: ProductosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');

      if (idParam) {
        this.isEditMode = true;
        const currentId = +idParam;

        this.ProductosService.getProductoById(currentId).subscribe({
          next: (data) => {
            this.newProducto = data;
          },
          error: (err: HttpErrorResponse) => {
            console.error('Error al cargar producto:', err);
            if (err.status === 404) {
              this.errorMessage =
                'Error 404: No se encontró el producto. Es posible que haya sido eliminado.';
            } else {
              this.errorMessage = 'Error al cargar el producto. Intente más tarde.';
            }
          },
        });
      } else {
        this.isEditMode = false;
      }
    });
  }

  onSubmit(form: NgForm): void {
    this.errorMessage = null;

    if (form.invalid) {
      Object.keys(form.controls).forEach((field) => {
        form.control.get(field)?.markAsTouched();
      });
      return;
    }

    if (this.isEditMode) {
      this.ProductosService.updateProducto(this.newProducto).subscribe({
        next: (productoActualizado) => {
          alert(`¡Producto "${productoActualizado.nombre}" actualizado con éxito!`);
          this.router.navigate(['/admin/productos']);
        },
        // 5. MANEJO DE ERROR (al actualizar)
        error: (err: HttpErrorResponse) => {
          this.handleApiError(err);
        },
      });
    } else {
      this.ProductosService.postProducto(this.newProducto).subscribe({
        next: (productoCreado) => {
          alert(`¡Producto "${productoCreado.nombre}" creado con éxito!`);
          this.router.navigate(['/admin/productos']);
        },

        error: (err: HttpErrorResponse) => {
          this.handleApiError(err);
        },
      });
    }
  }

  private handleApiError(err: HttpErrorResponse): void {
    console.error('Error de API:', err);
    let apiErrorMsg = err.error?.Error || 'Error desconocido';

    if (err.status === 400) {
      this.errorMessage = `Datos inválidos (400): ${apiErrorMsg}`;
    } else if (err.status === 409) {
      this.errorMessage = `Conflicto (409): ${apiErrorMsg}`;
    } else if (err.status === 404) {
      this.errorMessage = `No encontrado (404): ${apiErrorMsg}`;
    } else {
      this.errorMessage = `Error inesperado (${err.status}): ${apiErrorMsg}`;
    }
  }

  cancelar(): void {
    this.router.navigate(['/admin/productos']);
  }
}
