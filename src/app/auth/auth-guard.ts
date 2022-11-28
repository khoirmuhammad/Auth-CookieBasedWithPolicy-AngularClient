import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.isLoggedIn();
    }

    isLoggedIn(): Observable<boolean> {
        return this.authService.isLoggedIn().pipe(
            map((isLoggedIn) => {
              debugger;
                if (!isLoggedIn) {
                    this.router.navigate(['auth']);
                    return false;
                }
                return true;
            }));
    }
}
