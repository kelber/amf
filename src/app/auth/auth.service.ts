import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire , FirebaseAuthState , AuthMethods, AuthProviders , AngularFireAuth } from 'angularfire2';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
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

      // F.U.N.C.I.O.N.A.N.D.O  currentUser() e estado
      let user = this.currentUser().subscribe( user => {
        if (user && this.af.auth) {
        this.isLoggedIn = true;
        user = user;
        // this.photoUrl = user.photoURL;
          // this.user_photo = this.af.auth.google.photoURL;
      }
    });

      // fim constructor
      }


// LOGIN E REGISTER tem que ficar
// nos seus components

  currentUser(): Observable<FirebaseAuthState> {
    this.isLoggedIn = true;
    return this.af.auth;
  }

// para usar no CanActivated
  isAutenticated() : Observable<boolean> {
    return this.af.auth
      .take(1)
      .map( (authState: FirebaseAuthState) => !!authState);
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





     //!!authState E autenticado  !false !!true
     // isAuthenticated() : Observable<boolean> {
     //   return this.af.auth
     //     .take(1)
     //     .map( (authState: FirebaseAuthState) => !!authState);
     // }




          // TA BONITO ... mas ficou sem usar....
          //  Create User
            // onSubmit(formRegister) {
            //   if (formRegister.valid) {
            //     console.log(formRegister.value);
            //     this.af.auth.createUser({
            //       email: formRegister.value.email,
            //       password: formRegister.value.password
            //     }).then(
            //       ( success ) => {
            //         this.router.navigate(['docs']);
            //       }).catch(
            //         ( err ) => {
            //           console.log(err);
            //           this.error = err;
            //         }
            //       )}
            // }
            //
        // onSubmit(formData) {
        //     if (formData.valid) {
        //       console.log(formData.value);
        //       this.af.auth.createUser({
        //         email: formData.value.email,
        //         password: formData.value.password
        //       }).then(
        //         (success) => {
        //           console.log(success);
        //           this.router.navigate(['/users']);
        //         }).catch(
        //           (err) => {
        //             this.error = err;
        //           });
        //     }
        //   }

        // FUNCIONANDO PERFEITO
        // this.authS.af.auth.subscribe(
        //   ( auth ) => {
        //   if (auth == null) {
        //     console.log('Sai do docs.component');
        //     // not logged In
        //   } else {
        //     // is Logged in
        //     console.log('logado no docs.component');
        //     this.isLoggedIn = true;
        //   }
        // });
        //









  // Login User
  // onSubmit(formUser) {
  //   if (formUser.valid) {
  //     console.log(formUser.value);
  //     this.af.auth.login({
  //       email: formUser.value.email,
  //       password: formUser.value.password
  //     },
  //     {
  //       provider: AuthProviders.Password,
  //       method: AuthMethods.Password
  //     }
  //   ).then(
  //       ( success ) => {
  //         this.router.navigate(['/home']);
  //       }).catch(
  //         ( err ) => {
  //           console.log(err);
  //           this.error = err;
  //         }
  //       )}
  // }







}
