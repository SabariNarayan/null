import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LinkService } from 'src/app/services/link.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private linkService: LinkService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = this.linkService.getUserRole();

    if (route.data['roles'].includes(userRole)) {
      return true; // User has the required role, allow access
    } else if (!userRole) {
      this.router.navigate(['list']); // Navigate to sign-in page if userRole is undefined
      return false;
    } else {
      alert('Access Denied');
       //navigate to home if unauthorised url entry by other users
      return false;
    }
  }
}
