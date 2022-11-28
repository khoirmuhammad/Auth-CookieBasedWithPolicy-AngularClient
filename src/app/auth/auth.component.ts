import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IResponse } from '../interfaces/IResponse';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router) {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

   }

  ngOnInit() {
  }

  get Username() {
    return this.loginForm.controls["username"] as FormControl;
  }

  get Password() {
    return this.loginForm.controls["password"] as FormControl;
  }

  loginProcess(){
    debugger;
    let username = this.Username.value;
    let password = this.Password.value;

    var result = this.authService.login(username, password).subscribe(res => {
      debugger;

      if (res.isSuccess) {
        this.router.navigateByUrl('home')
      } else {
        alert(res.message);
      }
    });
  }

}
