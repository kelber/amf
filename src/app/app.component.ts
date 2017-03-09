import { Component } from '@angular/core';
import { Routes , Router, RouterModule } from '@angular/router';


import { AngularFire } from 'angularfire2';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  // FUNCIONA MAS nas consigo passar pros filhos
  // isLoggedIn: boolean = false;

  // PODE TIRAR
  // isLoggedIn: boolean = false;
  // state: string = '';
  // error: any;
  // email: any;
  // password: string;
  // formLogin: FormGroup;
  // photoUrl: any;
  // name: string;
  // firebase: any;
  constructor(public af: AngularFire, private router: Router, private authS: AuthService) {


    // FUNCAO FOI MAS os dados NAO FORAM   :(
    // this.authS.af.auth.subscribe(
    //   ( auth ) => {
    //   if (auth == null) {
    //       // not logged In
    //     console.log('nao logado no app.component');
    //     this.email = 'Sem Nome';
    //
    //   } else {
    //     // is Logged in
    //     console.log('logado no app.c');
    //     this.isLoggedIn = true;
    //     this.name = this.authS.af.auth.currentUser.displayName;
    //   }
    // });



  }




}
