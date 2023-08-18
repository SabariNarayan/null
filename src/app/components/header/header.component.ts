import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService , private router:Router) {}

 ngOnInit(): void {
  this.isLoggedIn = this.authService.isLoggedIn(); // Check user's login status
  this.authService.loggedInSubject.subscribe((loggedIn: boolean) => {
    this.isLoggedIn = loggedIn;
  });
}

logout(){
  localStorage.clear();
  this.isLoggedIn = false;
  this.router.navigate(['login']);
}
}
