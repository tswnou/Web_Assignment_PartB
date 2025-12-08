import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../../services/register';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  menuOpen = false;
  success = false;

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private registerService: RegisterService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  submitForm() {
    if (this.formData.password !== this.formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      name: `${this.formData.firstName} ${this.formData.lastName}`,
      email: this.formData.email,
      password: this.formData.password,
      interests: [this.formData.interest]
    };

    this.registerService.registerUser(payload).subscribe({
      next: () => this.success = true,
      error: () => alert("Registration failed")
    });
  }
}
