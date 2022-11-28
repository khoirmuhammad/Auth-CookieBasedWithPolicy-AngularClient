import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

constructor(private http: HttpClient) { }

public updatePolicy() {
  return this.http.put('https://localhost:7062/api/Auth', null, {
    withCredentials: true
  });
}


}
