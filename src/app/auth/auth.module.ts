import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [CommonModule , AuthRoutingModule , FormsModule , ReactiveFormsModule],
  declarations: [ AuthComponent, LoginComponent, SignupComponent, EmailComponent ],
  providers: [ AuthService , AuthGuardService ]
})
export class AuthModule { }
