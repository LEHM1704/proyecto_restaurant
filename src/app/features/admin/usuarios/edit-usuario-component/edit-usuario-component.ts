import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../../../service/usuarios.service';
import { Usuario } from '../../../../interfaces/usuarios_interface';

@Component({
  selector: 'app-edit-usuario-component',
  standalone: false,
  templateUrl: './edit-usuario-component.html',
  styleUrl: './edit-usuario-component.scss',
})
export class EditUsuarioComponent implements OnInit {
  // 👇 2. Propiedad para guardar el usuario que se cargue
  usuario: Usuario | undefined; // O Usuario | null = null;

  // 👇 3. Inyecta los servicios en el constructor
  constructor(
    private route: ActivatedRoute, // Para leer la URL
    private router: Router, // Para navegar (ej. botón "Cancelar" o "Guardar")
    private usuarioService: UsuariosService // Para buscar los datos
  ) {}

  // 👇 4. 'ngOnInit' se ejecuta cuando el componente se carga
  ngOnInit(): void {
    // Leemos el 'id' de la URL. (Ej. 'edit/5' -> id = '5')
    const idParam = this.route.snapshot.paramMap.get('id');

    // Comprobamos que el ID exista
    if (idParam) {
      // El 'id' de la URL es un string, lo convertimos a número con '+'
      const idUsuario = +idParam;

      console.log('Editando usuario con ID:', idUsuario);

      // Usamos el servicio para traer los datos de ESE usuario
      this.usuarioService.getUsuarioById(idUsuario).subscribe(
        (data: Usuario) => {
          this.usuario = data;
          console.log('Datos del usuario cargados:', this.usuario);
        },
        (error) => {
          console.error('Error al cargar el usuario:', error);
          // Opcional: Redirigir si el usuario no se encuentra
          // this.router.navigate(['/admin/usuarios']);
        }
      );
    }
  }

  // (Aquí podrías añadir tus métodos de 'guardarCambios()' o 'cancelar()')
}
