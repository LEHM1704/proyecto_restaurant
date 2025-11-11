import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../../service/usuarios.service';

type NuevoUsuario = {
  name: string;
  email: string;
  rol: 'admin' | 'invitado';
};

@Component({
  selector: 'app-crear-usuario',
  standalone: false,
  templateUrl: './crear-usuario.html',
  styleUrl: './crear-usuario.scss',
})
export class CrearUsuario {
  nuevoUsuario: NuevoUsuario = {
    name: '',
    email: '',
    rol: 'invitado', // Valor por defecto
  };
  constructor(private usuarioService: UsuariosService, private router: Router) {}

  onSubmit() {
    console.log('Enviando usuario:', this.nuevoUsuario);
    this.usuarioService.createUsuario(this.nuevoUsuario).subscribe({
      next: (response) => {
        console.log('Usuario creado con éxito:', response);
        this.router.navigate(['/admin/usuarios']);
      },
      error: (error) => {
        console.error('Error al crear el usuario:', error);
      },
    });
  }
}
