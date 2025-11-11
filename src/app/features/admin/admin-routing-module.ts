import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayout } from './admin-layout/admin-layout';

const routes: Routes = [
  {
    path: '',
    component: AdminLayout,
    children: [
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios-module').then((m) => m.UsuariosModule),
      },
      {
        path: 'productos',
        loadChildren: () => import('./productos/productos-module').then((m) => m.ProductosModule),
      },
      {
        path: 'config',
        loadChildren: () => import('./config/config-module').then((m) => m.ConfigModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
