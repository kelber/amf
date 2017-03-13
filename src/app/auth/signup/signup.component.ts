import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { AngularFire , AuthMethods, AuthProviders } from 'angularfire2';
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
    constructor(public af: AngularFire,
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
          this.af.auth.createUser({
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
