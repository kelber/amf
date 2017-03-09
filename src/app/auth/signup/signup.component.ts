import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';



import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    state: string = '';
    error: any;
    email: any;
    password: string;
    formLogin: FormGroup;
    constructor(private authS: AuthService,
                private router: Router,
                private fb: FormBuilder)   { }


  ngOnInit() {
           $('.button-collapse').sideNav('destroy');
           $('ul.tabs').tabs();
           $('.modal').modal();
  }

  onSubmit(formRegister) {
        if (formRegister.valid) {
          console.log(formRegister.value);
          this.authS.af.auth.createUser({
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





}
