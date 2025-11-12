import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../service/productos.service';
import { Producto } from '../../../interfaces/productos_interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class ProductosComponent implements OnInit {
  public productos: Producto[] = [];

  constructor(private productosService: ProductosService, private router: Router) {}

  ngOnInit(): void {
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      },
    });
  }

  irAEditarProducto(id: number): void {
    this.router.navigate(['/admin/productos/editproducto', id]);
  }

  irAcrearProducto(): void {
    this.router.navigate(['/admin/productos/crear-producto']);
  }
}
