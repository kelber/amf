import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { AuthService } from '../auth/auth.service';

import { Observable } from 'rxjs/Observable';

declare var $: any;
@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {



   isLoggedIn: boolean = false;
   name?: string;
   email: string;
   photoUrl?: string;
  //  uid?: number;
   error: any;
  //  googleUser: any;
  // user_photo: any;





  constructor(public af: AngularFire, private authS: AuthService, private router: Router) {


      // fim constructor
   }

   user: FirebaseAuthState;

  logout() {
    this.authS.logout();
    this.router.navigate(['/']);
    this.isLoggedIn = false;
      }


      //  ?? login da onde ?
   login() {
        this.af.auth.login();
        this.router.navigate(['/docs']);
   }





  ngOnInit() {
    $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true, // Choose whether you can drag to open on touch screens
          });
            // $('.button-collapse').sideNav('show');
            $('ul.tabs').tabs();


            // F.U.N.C.I.O.N.A.N.D.O  currentUser() e estado
            let user = this.authS.currentUser().subscribe( user => {
              if (user && this.af.auth) {
              this.isLoggedIn = true;
              this.user = user;
              // FUNCIONANDO PHOTO AKI
              this.user.auth.photoURL;


            }
          });


  // fim ngOnInit
  }





}
