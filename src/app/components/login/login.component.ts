import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router module
import { LinkService } from 'src/app/services/link.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private linkService: LinkService, private router: Router, private authService: AuthService) { } // Inject Router

  loginUser(): void {
    const userData = { email: this.email, password: this.password };
    console.log('loginUser method called');

    this.linkService.loginUser(userData)
      .subscribe(
        response => {
          console.log(response.message); // Login success message from the server
          console.log('JWT Token:', response.token);
          alert('Login successful');

          // Route to ListComponent
          this.router.navigate(['/list']);
          this.authService.setLoggedIn(true);
        },
        error => {
          console.error('Login failed:', error);
          alert('Login failed');
        }
      );
  }
}
