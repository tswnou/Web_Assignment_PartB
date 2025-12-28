import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
})
export class RegisterComponent {

  success = false;
  errorMessage = '';

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    password: '',
    confirmPassword: ''
  };

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef 
  ) {}

  submitForm() {
    this.success = false;
    this.errorMessage = '';

    if (this.formData.password !== this.formData.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      this.cdr.detectChanges();
      return;
    }

    const dataToSend = {
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      email: this.formData.email,
      interest: this.formData.interest,
      password: this.formData.password
    };

    this.api.registerUser(dataToSend).subscribe({
      next: () => {
        this.success = true;
        this.cdr.detectChanges();

        this.formData = {
          firstName: '',
          lastName: '',
          email: '',
          interest: '',
          password: '',
          confirmPassword: ''
        };
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Registration failed';
        this.cdr.detectChanges();
      }
    });
  }
}
