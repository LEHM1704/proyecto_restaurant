import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { AdminRoutingModule } from '../../features/admin/admin-routing-module';

@Component({
  selector: 'app-sidebar',
  imports: [NgIf, AdminRoutingModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isOpen = signal(true);

  toggleSidebar() {
    this.isOpen.update((v) => !v);
  }
}
