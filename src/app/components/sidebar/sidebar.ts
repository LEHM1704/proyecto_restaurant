import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { AdminRoutingModule } from '../../features/admin/admin-routing-module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [NgIf, AdminRoutingModule, RouterLink, NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isOpen = signal(true);

  toggleSidebar() {
    this.isOpen.update((v) => !v);
  }
}
