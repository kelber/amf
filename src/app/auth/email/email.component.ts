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


      // LoginForm
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
