import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private baseUrl = 'http://localhost:3000'; 
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(data: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, data);
  }

  loginUser(data: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, data).pipe(
      tap((response: any) => {
        if (response.token) { // Replace 'yourTokenKey' with the actual key name
          localStorage.setItem('token', response.token);
          this.user = jwt_decode(response.token);
          
        }
      })
    );
  }
  

  
  getUserRole(): string | null {
    // Decode the token and return the user role
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.role; // Assuming 'role' is the name of the claim in the JWT payload
    }
    return null;
  }
}
