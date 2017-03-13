import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { UsersService } from './users.service';
import { FirebaseAuthState } from 'angularfire2';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
declare var $: any;


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isLoggedIn: boolean = false;
  username: any;
  email: any;
  password: any;
  formUser: FormGroup;




  items: FirebaseObjectObservable<any>;
  constructor(public fb: FormBuilder, private userS: UsersService, private af: AngularFire ) {

    this.formUser = this.fb.group({
      user: this.fb.group({
         username:  this.username,
         email:  this.email,
         password: this.password
       })
    })






// fim constructor
  }

  newitem: FirebaseListObservable<any>;
  addItem(newitem) {
     this.userS.createUser(newitem);
     console.log(newitem);
   }


   updateItem(key: string, newText: string) {
    let items = this.af.database.list('/messages').update(key, { text: newText });
   }
   deleteItem(key: string) {
    let items = this.af.database.list('/messages').remove(key);
   }
   deleteEverything() {
     let itens = this.af.database.list('/messages').remove();
   }




      onSubmit(formUser){
        console.log(formUser.value);
        // this.userS.createUser(formUser);
          //  this.af.database.push(formUser);
          //  this.af.database.list('/users').push(formUser);

            //  username: this.user.username,
            //  email: this.user.email,
            //  password: this.user.password
           console.log('Cadastrado com Sucesso');
      }



      user: FirebaseAuthState;


  ngOnInit() {
    $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true, // Choose whether you can drag to open on touch screens
          });
  }














}
