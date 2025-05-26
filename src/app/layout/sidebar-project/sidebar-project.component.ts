import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar-project',
  standalone: true,
  imports: [MatListModule, RouterLink, RouterLinkActive, NgIf, NgClass],
  templateUrl: './sidebar-project.component.html',
  styleUrl: './sidebar-project.component.css'
})
export class SidebarProjectComponent implements OnInit {
  collapsed = false;
  projectId: string | null = null;
  
  ngOnInit() {
    this.projectId = localStorage.getItem('currentProjectId');
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
