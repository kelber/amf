import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';


// importei PELO ANGULAR FIRE
import { AngularFire , AuthMethods, AuthProviders } from 'angularfire2';


import { AuthService } from '../auth.service';
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
    constructor(private authS: AuthService, private router: Router, private fb: FormBuilder, public af: AngularFire) {

      //  Formulario Login
      this.formLogin = this.fb.group({
        email: this.email,
        password: this.password
      });
      // end of constructor
    }

    // P.E.R.F.E.I.T.O
    // SIGNIN FUNCIONANDO
    onSubmit(formLogin) {
      console.log('clicado');
    if(formLogin.valid) {
      console.log(formLogin.value);
      this.af.auth.login({
        email: formLogin.value.email,
        password: formLogin.value.password
      }
      // tive que manter || achar forma de trazer app.module
      // const firebaseAuthConfig file
      ,
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }
    ).then(
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
