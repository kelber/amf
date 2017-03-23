import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFire } from 'angularfire2';

import { AccountService } from '../account.service';

declare var $: any;
@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: any;


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
                  }
                });


  //  end constructor
    }



    email: any;
    password: any;
    // F.U.N.C.I.O.N.A.N.D.O
    onSubmit(accountForm) {
         this.af.database.list('account').push(
           {
           uid: this.user.auth.uid,
           displayName: accountForm.value.displayName,
           email: accountForm.value.email,
           password: accountForm.value.password,
           aboutYou: accountForm.value.aboutYou,
           profile: {
              username: accountForm.value.username,
              country: accountForm.value.country,

           }
         }
        );
          // zerar form
         accountForm = {
            displayName: accountForm.value.displayName = '',
            email: this.email = '',
            password: this.password = '',
            aboutYou: accountForm.value.abouYou = '',
            username:  accountForm.value.username = '',
            country:  accountForm.value.country = ''

            // nao consegui zerar o username
         }
         this.router.navigate(['/account'])
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
  }

}
