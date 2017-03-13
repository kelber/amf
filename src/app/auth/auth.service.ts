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
