import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { AngularFire , AuthMethods, AuthProviders } from 'angularfire2';

import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  state: string = '';
  error: any;
  email: any;
  password: string;
  formLogin: FormGroup;
  constructor(private authS: AuthService,
              private router: Router,
              private fb: FormBuilder,
              public af: AngularFire) {

   // end of constructor
   }


   // Google frontend
   photoUrl?: any;
   loginG() {
    return this.authS.loginG();
   }

  // Facebook frontend
  loginFace() {
    return this.authS.loginFace();

  }

  ngOnInit() {
    $('.modal').modal();
    }

}
