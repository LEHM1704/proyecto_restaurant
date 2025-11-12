import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../service/usuarios.service';
import { Usuario } from '../../../interfaces/usuarios_interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuariosService, private router: Router) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  irAlDetalleUsuario(id: number): void {
    this.router.navigate(['/admin/usuarios/edit', id]);
  }

  irAcrearUsuario(): void {
    this.router.navigate(['/admin/usuarios/crear-usuario']);
  }
}
