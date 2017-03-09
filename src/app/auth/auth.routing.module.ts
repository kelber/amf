import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

let authRoutes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'email', component: EmailComponent }
];


@NgModule({
  imports: [ RouterModule.forChild( authRoutes )],
  exports: [ RouterModule ]
})

export class AuthRoutingModule {}
