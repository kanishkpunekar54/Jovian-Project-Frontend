import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule] // Add FormsModule here
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe({
        next: (res) => {
          // handle success (e.g., navigate, show message)
          console.log('Login successful', res);
        },
        error: (err) => {
          // handle error (e.g., show error message)
          console.error('Login failed', err);
        },
      });
    }
  }
}