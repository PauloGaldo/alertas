import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isAuthenticated()) {
            if (state.url.match(/login/gi)) {
                this.router.navigate(['main']);
                return false;
            } else {
                return true;
            }
        } else {
            if (!state.url.match(/login/gi)) {
                this.router.navigate(['login']);
            }
            return true;
        }
    }

}
