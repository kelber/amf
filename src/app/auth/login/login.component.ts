import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';


// importei PELO ANGULAR FIRE
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
  constructor(private authS: AuthService, private router: Router, private fb: FormBuilder, public af: AngularFire) {


    this.formLogin = this.fb.group({
      email: this.email,
      password: this.password
    });

// end of constructor
   }


   // FUNCIONANDO PERFEITO
    photoUrl?: any;    // PRECISA ?
   loginG() {
    return this.authS.loginG();
   }


  // FACEBOOK LOGIN FUNCIONANDO
  loginFace() {
      return this.af.auth.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup,
      }).then(
        (success) => {
        this.router.navigate(['/docs']);
        }).catch(
          (err) => {
            this.error = err;
          });
  }





  ngOnInit() {
    $('.modal').modal();
    }

}
