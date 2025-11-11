import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../service/usuarios.service';
import { Usuario } from '../../../interfaces/usuarios_interface';

// 👇 1. Importa el Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  // 👇 2. Inyéctalo en el constructor
  constructor(
    private usuarioService: UsuariosService,
    private router: Router // <--- ¡AÑADE ESTA LÍNEA!
  ) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  irAlDetalle(id: number): void {
    // (Aquí podrías poner lógica extra, ej: console.log)
    console.log(`Navegando al detalle del usuario con ID: ${id}`); // ¡Ahora 'this.router' existirá y funcionará!
    this.router.navigate(['/admin/usuarios/edit', id]);
  }

  irAcrearUsuario(): void {
    this.router.navigate(['/admin/usuarios/crear-usuario']);
  }
}
