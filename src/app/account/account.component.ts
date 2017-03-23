import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
// esse aqui fez funcionar o auth  Ex: console.log(this.af.auth.uid);
import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';

import { AccountService } from './account.service';
import { User } from '../users/user';

declare var $: any;
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

   isLoggedIn: boolean = false;
   user: any;
  //  email: User[];
   // se tiver declarado no objeto ex. user
   // NAO PRECISA FICAR FALANDO aki.
  //  photoURL?: string;

  username: any;

  id: any;


  constructor(private aS: AccountService,
              private af: AngularFire,
              private router: Router ) {

                // F.U.N.C.I.O.N.A.N.D.O  currentUser() e estado
                let user = this.aS.currentUser().subscribe( user => {
                  if (user && this.af.auth) {
                  this.user = user;
                  console.log(this.user.auth.uid);
                  this.isLoggedIn = true;

                  // FUNCIONANDO !! * nao precisa chamar... e so html
                  // this.user.auth.email;
                  // this.user.auth.photoURL;
                  // this.user.auth.uid;
                  // SERA ??
                  // this.user.auth.username = this.user.auth.profile.username;

                }
              });





// end of constructor
   }

   logout() {
     this.af.auth.logout();
     this.router.navigate(['/']);
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
            $('.dropdown-button').dropdown();





      let user = this.aS.getUser();
      //  console.log(this.user.auth.uid);

  }


  //  DO ACCOUNT FORM
    // onSubmit (accountForm) {
    //    this.af.database.list('account').push(
    //      {
    //      email: accountForm.value.email,
    //      password: accountForm.value.password,
    //      uid: this.user.auth.uid,
    //      profile: {
    //         username: accountForm.value.profile
    //      }
    //     });
    //     // zerar form
    //    accountForm = {
    //       email: this.email = '',
    //       password: this.password = '',
    //       // nao consegui zerar o username
    //    }
    // }



}
