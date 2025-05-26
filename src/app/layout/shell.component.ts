import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarProjectComponent } from './sidebar-project/sidebar-project.component';
import { SidebarHomeComponent } from './sidebar-home/sidebar-home.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, NgIf, SidebarProjectComponent, SidebarHomeComponent],
  template: `
    <div class="flex">
      <ng-container *ngIf="showSidebarA(); else sidebarB">
<app-sidebar-home></app-sidebar-home>
      </ng-container>
      <ng-template #sidebarB>
        <app-sidebar-project></app-sidebar-project>
      </ng-template>
      <main class="flex-1"> 
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class ShellComponent {
  showSidebarA() {
    // Add logic to determine which sidebar to show based on route or user role
    return location.pathname.startsWith('/home')
  }
}