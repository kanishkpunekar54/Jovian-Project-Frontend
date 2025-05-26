
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar-home',
  standalone: true,
  imports: [MatListModule, RouterLink, RouterLinkActive, NgIf, NgClass],
  templateUrl: './sidebar-home.component.html',
  styleUrl: './sidebar-home.component.css'
})
export class SidebarHomeComponent {
  collapsed = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
