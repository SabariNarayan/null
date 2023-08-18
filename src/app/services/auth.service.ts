import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  loggedInSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private router:Router,) {
    // Initialize the login status from local storage on service initialization
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    this.loggedIn = storedLoginStatus === 'true';
    
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
    localStorage.setItem('isLoggedIn', value.toString()); // Store in local storage
    this.loggedInSubject.next(value);
  }

  login(): void {
    this.loggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    this.loggedInSubject.next(true);
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn'); // Remove from local storage
    this.loggedInSubject.next(false);
    localStorage.removeItem('token');
    
    // Use pushState to replace the URL with the login URL
    history.pushState(null, '', 'login'); // Replace '/login' with your actual login route
  }
  
  
  
}
