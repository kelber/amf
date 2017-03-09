import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




    constructor(public af: AngularFire, private authS: AuthService, private router: Router) { }




     isLoggedIn: boolean = false;
     name?: string;
     email: string;
     photoUrl?: string;
    //  uid?: number;
     error: any;
    //  googleUser: any;
    // user_photo: any;

  user: FirebaseAuthState;

  ngOnInit() {

    // F.U.N.C.I.O.N.A.N.D.O  currentUser() e estado
    let user = this.authS.currentUser().subscribe( user => {
      if (user && this.af.auth) {
      this.isLoggedIn = true;
      this.user = user;
    }
  });

  }

}
