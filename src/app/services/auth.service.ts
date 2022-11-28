import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IResponse } from '../interfaces/IResponse';
import { IUserClaim } from '../interfaces/IUserClaim';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

public login(username: string, password: string){
  let body = {
    username: username,
    password: password
  };

  return this.http.post<IResponse>('https://localhost:7062/api/Auth/Login', body, {
    withCredentials: true
  });
}

public logout() {
  let body = null;
  return this.http.post('https://localhost:7062/api/Auth/Logout', body, {withCredentials: true});
}

public getUserClaims() {
  debugger;

  var res = this.http.get<IUserClaim[]>('https://localhost:7062/api/Auth/GetUserClaim', {withCredentials: true});
  return res;
}

public isLoggedIn(): Observable<boolean> {
  return this.getUserClaims().pipe(
      map((userClaims) => {
        debugger;
          const hasClaims = userClaims.length > 0;
          return !hasClaims ? false : true;
      }),
      catchError((error) => {
        debugger;
          return of(false);
      }));
}

}

