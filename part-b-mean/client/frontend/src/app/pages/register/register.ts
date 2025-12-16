import { Component } from '@angular/core';
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

  constructor(private api: ApiService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

submitForm() {

  // 🔥 ΠΟΛΥ ΣΗΜΑΝΤΙΚΟ
  this.success = false;

  if (this.formData.password !== this.formData.confirmPassword) {
    alert("Passwords do not match!");
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
    next: (res) => {
      console.log(res);
      this.success = true;   // ✅ μόνο εδώ
    },
    error: (err) => {
      console.error(err);
      alert("Registration failed!");
      this.success = false; // (προαιρετικό αλλά καθαρό)
    }
  });
}


}
