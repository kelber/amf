import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire , FirebaseAuthState , AuthMethods, AuthProviders , AngularFireAuth } from 'angularfire2';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AccountService {

    isLoggedIn: boolean = false;
    name: string;
    email: string;
    photoUrl?: string;
    uid: any;
    error: any;
    FirebaseAuthState: FirebaseAuthState;



    constructor(private af: AngularFire) {

      }


          getUsers() {
            return  this.af.database.list('/users');
      }

          // getUser(uid: string) {
          //   let users = this.getUsers();
          // }

          getUser() {
            return this.af.auth;
          }
          currentUser(): Observable<FirebaseAuthState> {
            this.isLoggedIn = true;
            return this.af.auth;
          }


}
