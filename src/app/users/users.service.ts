import { Injectable } from '@angular/core';


import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  user: any;

  constructor(private af: AngularFire) { }



  createUser(newitem) {
    this.af.database.list('/users').push(newitem.value);

  }





}
