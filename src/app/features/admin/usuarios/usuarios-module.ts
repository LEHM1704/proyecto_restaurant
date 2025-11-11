import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios';
import { CrearUsuario } from './crear-usuario/crear-usuario';
import { UsuariosRoutingModule } from './usuarios-routing-module';
import { EditUsuarioComponent } from './edit-usuario-component/edit-usuario-component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuariosComponent, CrearUsuario, EditUsuarioComponent],
  imports: [CommonModule, UsuariosRoutingModule, FormsModule],
})
export class UsuariosModule {}
