import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../../core/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule,NgIf] 
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe({
        next: (res) => {
          console.log('Login successful', res);
        },
        error: (err) => {
          console.error('Login failed', err);
        },
      });
    }
  }
}