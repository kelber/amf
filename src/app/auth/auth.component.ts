import { Component, OnInit , Input} from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


import { AngularFire , AuthMethods, AuthProviders } from 'angularfire2';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  state: string = '';
  error: any;
  email: string;
  password: string;
  formRegister: FormGroup;

  constructor(public af: AngularFire, private router: Router, private authS: AuthService,
    public fb: FormBuilder ) {

    // end of constructor
      }


        ngOnInit() {  }




  }
