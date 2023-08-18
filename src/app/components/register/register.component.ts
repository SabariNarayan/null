import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private linkService: LinkService, private router: Router) { }

  registerUser(): void {
    const userData = { name: this.name, email: this.email, password: this.password };
    console.log('registerUser method called');

    this.linkService.registerUser(userData)
      .subscribe(
        response => {
          console.log(response.message); // Registration success message from the server
          alert('Registered successfully'); // Show alert
          this.router.navigate(['/login']); // Navigate to login page
        },
        error => {
          console.error('Registration failed:', error);
          alert('failed');
        }
      );
  }
}
