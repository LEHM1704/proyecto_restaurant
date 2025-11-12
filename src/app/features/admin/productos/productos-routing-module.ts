import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos';
import { CrearProductoComponent } from './crear-producto-component/crear-producto-component';
import { EditProductoComponent } from './edit-producto-component/edit-producto-component';
import { ProductFormComponent } from '../../../components/product-form-component/product-form-component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent,
  },
  {
    path: 'crear-producto',
    component: ProductFormComponent,
  },
  {
    path: 'editproducto/:id',
    component: ProductFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
