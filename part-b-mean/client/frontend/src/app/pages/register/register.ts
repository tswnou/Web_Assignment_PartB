import { Component } from '@angular/core';
import { RegisterService } from '../../services/register';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html'
})
export class RegisterComponent {

  formData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private registerService: RegisterService) {}

  submitForm() {
    console.log("Submitting:", this.formData);

    this.registerService.registerUser(this.formData).subscribe({
      next: (res) => {
        console.log("User registered:", res);
        alert("User registered successfully!");
      },
      error: (err) => {
        console.error("Registration error:", err);
        alert("Failed to register.");
      }
    });
  }
}
