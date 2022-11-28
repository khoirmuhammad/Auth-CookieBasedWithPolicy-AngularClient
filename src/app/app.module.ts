import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AccessDeniedComponent } from './error/access-denied/access-denied.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { AuthGuard } from './auth/auth-guard';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ReadPolicyComponent } from './policies/read-policy/read-policy.component';
import { CreatePolicyComponent } from './policies/create-policy/create-policy.component';
import { UpdatePolicyComponent } from './policies/update-policy/update-policy.component';
import { DeletePolicyComponent } from './policies/delete-policy/delete-policy.component';

const appRoutes : Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'access-denied', component: AccessDeniedComponent, canActivate: [AuthGuard]},
  {path: 'not-found', component: NotFoundComponent, canActivate: [AuthGuard]},
  {path: 'read-policy', component: ReadPolicyComponent, canActivate: [AuthGuard]},
  {path: 'create-policy', component: CreatePolicyComponent, canActivate: [AuthGuard]},
  {path: 'update-policy', component: UpdatePolicyComponent, canActivate: [AuthGuard]},
  {path: 'delete-policy', component: DeletePolicyComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
      AuthComponent,
      HomeComponent,
      AccessDeniedComponent,
      NotFoundComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: function (router: Router) {
          return new AuthInterceptor(router);
      },
      multi: true,
      deps: [Router]
  },
  AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
