// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';

// @Injectable()
// export class AuthGuard implements CanActivate {

//     constructor(private router: Router) { }

//     canActivate() {
//         if (localStorage.getItem('currentUser')) {
//             // logged in so return true
//             return true;
//         }

//         // not logged in so redirect to login page
//         this.router.navigate(['/login']);
//         return false;
//     }
// }
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
  } from '@angular/router';
  import { Observable } from 'rxjs/Observable';
  import { Injectable } from '@angular/core';

  import { AuthService } from './auth.service';

  @Injectable()
  export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAuthenticated()
        .then(
          (authenticated: boolean) => {
            if (authenticated) {
              return true;
            } else {
              this.router.navigate(['/']);
            }
          }
        );
    }

    canActivateChild(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
    }
  }
