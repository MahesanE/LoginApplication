import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAppService } from './services/loginapp.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  constructor(private loginService: LoginAppService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('ManagerGuard - canActivate called');
    
    const userDetails = this.loginService.userDetails;
    console.log('ManagerGuard - User Details:', userDetails);
    
    if (userDetails && userDetails.role === 'manager') {
      console.log('ManagerGuard - Access granted');
      return true;
    } else {
      console.log('ManagerGuard - Access denied');
      this.router.navigate(['/welcome']);
      return false;
    }
  }
}