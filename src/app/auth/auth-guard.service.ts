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
    //  console.log(this.af.auth);
   }

 user: FirebaseAuthState;

 canActivate(): Observable<boolean> {
          console.log('Route Guards !! :< ');
         return this.authS.isAutenticated().do( authenticated => {
           if (!authenticated) this.router.navigate(['/auth/login']);
         });
   }

   // in the ROUTES:
   // canActivate: [ AuthGuardService ]



}
