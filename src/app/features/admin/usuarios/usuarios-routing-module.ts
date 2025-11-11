import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios';
import { CrearUsuario } from './crear-usuario/crear-usuario';
import { EditUsuarioComponent } from './edit-usuario-component/edit-usuario-component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
  },
  {
    path: 'crear-usuario',
    component: CrearUsuario,
  },
  {
    path: 'edit/:id',
    component: EditUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
