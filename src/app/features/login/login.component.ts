import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf]
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = ''; // Add this line

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.errorMessage = ''; // Reset error message
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe({
        next: (res) => {
          // Assuming res.actorId is returned from backend
          localStorage.setItem('actorId', res.actorId);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          // Set error message on failed login
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      });
    }
  }
}