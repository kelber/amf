# Firebase system authentication.


### File Schema

src
--auth
---email
---login
---signup
auth-guard.service.ts
auth-component.ts
auth.module.ts
auth.routing.module.ts
auth.service.ts


--auth  -->   The main module
---email -->  login with email
---login -->  Just show the options for login  (email,google,facebook ... )
---signup --> Register Form





## SIGNUP

#### signup.component.ts
```js
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
declare var $: any;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    isLoggedIn: boolean = false;
    state: string = '';
    error: any;
    email: any;
    password: string;
    formLogin: FormGroup;
    constructor(private authS: AuthService,
                private router: Router,
                private fb: FormBuilder)   { }


  ngOnInit() {
           $('.button-collapse').sideNav('destroy');
           $('ul.tabs').tabs();
           $('.modal').modal();
  }

  // Signup Complete
  onSubmit(formRegister) {
        if (formRegister.valid) {
          console.log(formRegister.value);
          this.authS.af.auth.createUser({
            email: formRegister.value.email,
            password: formRegister.value.password
          }).then(
            (success) => {
              console.log(success);
              this.router.navigate(['/docs']);
            }).catch(
              (err) => {
                this.error = err;
              });
        }
      }

    // Signup EASY way.
    //    onSubmit(formRegister) {
    //      this.af.auth.createUser({
    //        email: this.formRegister.value.email,
    //        password: this.formRegister.value.password
    //      }).catch(function(error) {
    //        console.log(error);
    //  });
    //  }




}

```


```html

<form #formRegister='ngForm'>
      <div class="input-field col s12">
        <input type="email" class="validate" name="email" (ngModel)="email" required>
        <label for="email" align="left">Email</label>
      </div>
      <div class="input-field col s12">
        <input id="Password" type="password" class="validate" name="password" (ngModel)="password" required>
        <label for="Password"  align="left">Password</label>
      </div>
        <p>
        <input type="checkbox" id="test5" required/>
        <label for="test5"><a href="#modal1">I agree to the terms</a></label>
        </p>
        <br>
        <a type="submit" class="waves-effect waves-light btn col s12 m12 l12" *ngIf="formRegister.valid" (click)="onSubmit(formRegister)" >Register <i class="material-icons">send</i></a>
      <br>
      <br>
</form>

```



### EMAIL or login using formLogin

#### email.component.ts

```js
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { AngularFire , AuthMethods, AuthProviders } from 'angularfire2';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})

export class EmailComponent implements OnInit {

    state: string = '';
    error: any;
    email: any;
    password: string;
    formLogin: FormGroup;
    constructor(private router: Router,
                private fb: FormBuilder,
                public af: AngularFire) {

      //  Login Form
      this.formLogin = this.fb.group({
        email: this.email,
        password: this.password
      });


      // end of constructor
    }

    // SIGNIN WORKING
    onSubmit(formLogin) {
      console.log('clicked formLogin');
    if(formLogin.valid) {
      console.log(formLogin.value);
      this.af.auth.login({
        email: formLogin.value.email,
        password: formLogin.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/docs']);
      }).catch(
        (err) => {
        console.log(err);
       this.error = err;
      });
    }
   }


  ngOnInit() {
  }

}

```


#### email.component.html

```html

<form [formGroup]="formLogin" >
  <div class="input-field col s12">
    <input type="email" class="validate" name="email" formControlName="email" required>
    <label for="email" align="left">Email</label>
  </div>
  <div class="input-field col s12">
    <input id="Password" type="password" class="validate" name="password" formControlName="password" required>
    <label for="Password"  align="left">Password</label>
  </div>
  <div class="input-field col s12">
    <a type="submit" class="waves-effect waves-light btn col s12 m12 l12" *ngIf="formLogin.valid"(click)="onSubmit(formLogin)">Login</a>
    <br>
    <br>
    <br>
    <br>
  </div>
</form>
```




### Login -> Screen to choose email, google or facebook


#### login.component.ts


```js

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

    }

}


```

#### login.component.html


```html



<!-- Modal Structure -->
<div id="modal1" class="modal">
  <div class="modal-content">
    <h4>Email Details</h4>
    <p>If you have a FACEBOOK account and your email is from google. ex. @gmail.com . <br> Try to login using google </p>
  </div>
</div>

<div class="row">
  <br>
  <br>
  <div class="col m4 l3"></div>
  <div class="col s12 m6 l6 card blue-grey lighten-3">
    <div class="blue-grey lighten-3">
      <br>
      <a class="waves-effect waves-light white-text" [routerLink]="['/']">Back to Home </a>
      <!-- Modal Trigger -->
      <a class="waves-effect waves-light right white-text" href="#modal1"><i class="material-icons">info_outline</i></a>
      <div class="center">
        <h3 class="white-text">Login</h3>
        <a class="waves-effect waves-light white-text" [routerLink]="['/auth/signup']">Don't have a account ? click here </a>
      </div>
      <!-- <span class="card-title">Card Title</span> -->
      <!-- <img id="lock" src="../assets/lock.svg" alt="lock"  width="55"> -->
      <div align="center">
        <span class="error" *ngIf="error">{{ error }}</span>
      </div>
    </div>
    <div class="input-field col s12">
      <br>
      <br>
      <a type="submit" class="waves-effect waves-light btn col s12 m12 l12 grey lighten-1 z-depth-2" [routerLink]="['/auth/email']">Login Email</a>
      <br>
      <br>
      <br>
      <a type="submit" class="waves-effect waves-light btn col s12 m12 l12 red z-depth-4" (click)="loginG()">Login Google</a>
      <br>
      <br>
      <br>
      <a type="submit" class="waves-effect waves-light btn col s12 m12 l12 blue darken-3 z-depth-2" (click)="loginFace()">Login Facebook</a>
      <br>
      <br>
      <br>
    </div>
  </div>
</div>

```



### auth.service.ts

```js

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire , FirebaseAuthState , AuthMethods, AuthProviders , AngularFireAuth } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';



/////////////////////////////////////////////////////////////////////////////
//  Here in auth.service.ts
//
//  currentUser()
//  loginGoogle()
//  loginFacebook()
//  logout()
//  isAutenticated()  -> Guards
//
// LOGIN E REGISTER wanna stay in respective components
// not import { AuthService } in these components
///////////////////////////////////////////////////////////////////////////////


@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  name: string;
  email: string;
  photoUrl?: string;
  uid: any;
  error: any;
  FirebaseAuthState: FirebaseAuthState;
  // user_photo?: any;

    constructor(public af: AngularFire, private router: Router ) {

      // W.O.R.K.I.N.G currentUser() and state
      let user = this.currentUser().subscribe( user => {
        if (user && this.af.auth) {
        this.isLoggedIn = true;
        user = user;
        // this.photoUrl = user.photoURL;
        // this.user_photo = this.af.auth.google.photoURL;
      }
    });

      // end constructor
      }



  currentUser(): Observable<FirebaseAuthState> {
    this.isLoggedIn = true;
    return this.af.auth;
  }


  logout() {
    console.log('Logout service');
      this.af.auth.logout();
   }

   loginG() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
      this.router.navigate(['/docs']);
      // this.photoUrl = this.af.auth.google.photoUrl;
      }).catch(
        (err) => {
          this.error = err;
        });
   }

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





// used in CanActivated Guards
  isAutenticated() : Observable<boolean> {
    return this.af.auth
      .take(1)
      .map( (authState: FirebaseAuthState) => !!authState);
  }


  //  Remember use providers
  // const firebaseAuthConfig = [
  //   { providers: AuthProviders.Password, methods: AuthMethods.Popup },
  //   { providers: AuthProviders.Google, methods: AuthMethods.Popup },
  //   { providers: AuthProviders.Facebook, methods: AuthMethods.Popup },
  //  ];

}

```





### auth-guard.service.ts

```js

import { Injectable } from '@angular/core';
import { CanActivate , Router } from '@angular/router';


import { FirebaseAuthState , AngularFire } from 'angularfire2';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuardService {

  constructor(private authS: AuthService,
              public af: AngularFire,
              private router: Router) {
    //  console.log(this.af.auth);
   }

 user: FirebaseAuthState;

 canActivate(): Observable<boolean> {
          console.log('Route Guards !! :< ');
         return this.authS.isAutenticated().do( authenticated => {
           if (!authenticated) this.router.navigate(['/auth/login']);
         });
   }

   // in the ROUTES:
   // canActivate: [ AuthGuardService ]



}



```


### auth.module.ts

```js

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



```


### app.module.ts

```js
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

``` 
