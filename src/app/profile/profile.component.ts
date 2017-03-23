import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { AngularFireAuth , FirebaseAuthState } from 'angularfire2';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UsersService } from '../users/users.service';
import { User } from '../users/user';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


    isLoggedIn: boolean = true;
    // user: Observable<User[]>;
    user: FirebaseAuthState;
    users: FirebaseListObservable<User[]>;


    constructor() {



  // end of constructor
     }





    ngOnInit() {


    }























    // constructor(public fb: FormBuilder,
    //             public usersS: UsersService,
    //             private af: AngularFire ,
    //             private router: Router,
    //             private authS: AuthService
    //             // private FirebaseAuthState: FirebaseAuthState
    //           ) {


                // let users = this.usersS.getUsers();

                //    // F.U.N.C.I.O.N.A.N.D.O  currentUser() e estado
                //    let user = this.authS.currentUser().subscribe( user => {
                //      if (user && this.af.auth) {
                //      this.isLoggedIn = true;
                //      this.user = user;
                //      // FUNCIONANDO PHOTO AKI
                //      this.user.auth.photoURL;
                //      this.user.auth.uid;
                //    }
                //  });







          //  currentUser(): Observable<FirebaseAuthState> {
          //    return this.af.auth;
          //  }

    // this.currentUser().subscribe( user => {
    //   this.user = user;
    //   // console.log(this.user);
    // })









}
