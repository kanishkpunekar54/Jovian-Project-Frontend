import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Add outgoing animation before redirecting
    setTimeout(() => {
      const welcomeDiv = document.querySelector('div');
      if (welcomeDiv) {
        welcomeDiv.classList.remove('animate-fade-in');
        welcomeDiv.classList.add('animate-fade-out');
      }
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1500); // Wait for the fade-out animation to complete
    }, 4000);
  }
}
