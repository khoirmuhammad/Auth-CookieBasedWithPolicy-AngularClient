import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { IUserClaim } from '../interfaces/IUserClaim';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userClaims: IUserClaim[] = [];

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.getUserClaims().subscribe(
      result => {
          this.userClaims = result;
      });
  }

  logoutProcess(){
    this.authService.logout().subscribe(res => {
      this.router.navigateByUrl('auth')
    });

  }

}
