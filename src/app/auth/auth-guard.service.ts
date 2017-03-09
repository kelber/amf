import { Injectable } from '@angular/core';
import { CanActivate , Router } from '@angular/router';


import { FirebaseAuthState , AngularFire } from 'angularfire2';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuardService {

  constructor(private authS: AuthService,
              public af: AngularFire,
              private router: Router) {


    //  ???
     console.log(this.af.auth);



   }

   // this.af.auth.subscribe( auth => {
   //   // console.log('auth do constructor');
   //   this.router.navigate(['docs']);
   // }


    //  if (this.af.auth) {
    //    this.af.auth.subscribe( auth => {
    //       this.router.navigate(['/docs']);
    //    })
     //
    //  }

   user: FirebaseAuthState;

 canActivate(): Observable<boolean> {
          console.log('Rota de guarda au au');
         return this.authS.isAutenticated().do( authenticated => {
           if (!authenticated) this.router.navigate(['/auth/login']);
         });
   }


    // funciona menos o currentUser
  //  canActivate(): Observable<FirebaseAuthState> {
  //    console.log('canActivate ligado');
  //    if (this.user && this.af.auth && this.authS.currentUser) {
  //        return this.authS.currentUser();
  //    }
  //    else {
  //      console.log('canActivate redirecionando....');
  //      !this.user && !this.af.auth;
  //      this.router.navigate(['/auth/login']);
  //    }
   //
  //  }







   // AGORA INJETAR ONDE QUISER. canActivate: [ AuthGuardService ]



}
