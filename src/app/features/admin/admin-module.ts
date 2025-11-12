import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing-module';
import { AdminLayout } from './admin-layout/admin-layout';
import { Sidebar } from '../../components/sidebar/sidebar';

@NgModule({
  declarations: [AdminLayout],
  imports: [CommonModule, AdminRoutingModule, Sidebar],
})
export class AdminModule {}
