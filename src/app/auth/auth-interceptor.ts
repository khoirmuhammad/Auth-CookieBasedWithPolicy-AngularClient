import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap(() => { },
            (err: any) => {
              debugger;
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                      this.router.navigate(['auth']);
                    } else if (err.status === 403) {
                      this.router.navigate(['access-denied']);
                    } else {
                      this.router.navigate(['not-found'])
                    }

                }
            }));
    }
}
