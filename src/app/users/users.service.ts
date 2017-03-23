import { Injectable } from '@angular/core';


import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class UsersService {


  constructor(private af: AngularFire) {

  //   let user = this.af.auth.currentUser().subscribe( user => {
  //     user = user;
  //     this.photoUrl = user.photoURL;
  //     this.user_photo = this.af.auth.google.photoURL;
  // });
  //    let uid = this.af.auth.uid;


  }



  users: FirebaseListObservable<User[]>;

    getUsers() {
      return  this.af.database.list('/users');
}








    //  O.K
  // createUser(formUser) {
  //   console.log(formUser.value);
  //   this.af.database.list('/users').push(formUser.value);
  // }

    // createUser(formUser) {
    //    this.af.database.list('/users').push(formUser.value);
    //    res => {
    //      this.af.database.list('/users').push({
    //        uid: res.uid
    //      })
    //    }
    //
    //
    // }




  removUser($key: string) {
    this.af.database.list('/users').remove($key);
  }






}
