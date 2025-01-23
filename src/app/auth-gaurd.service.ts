import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
    ): Observable <boolean | UrlTree> | Promise<boolean | UrlTree> | boolean  {
      if (!localStorage.getItem('userToken')) {

        sessionStorage.setItem('redirectUrl', state.url);
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
    
  }

