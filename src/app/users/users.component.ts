import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { AngularFireAuth , FirebaseAuthState } from 'angularfire2';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UsersService } from './users.service';
import { User } from './user';

import { AuthService } from '../auth/auth.service';

import { Observable } from 'rxjs/Observable';
declare var $: any;

// import { Profile } from './profile';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isLoggedIn: boolean = true;
  email: any;
  password: any;



  users: FirebaseListObservable<User[]>;
  // formUser: FormGroup;
  firstName: string;
  message: string;

  uid: any;
  firebase: any;

registerUser: FormGroup;



  constructor(public fb: FormBuilder,
              public usersS: UsersService,
              private af: AngularFire ,
              private router: Router,
              private authS: AuthService
              // private FirebaseAuthState: FirebaseAuthState
            ) {


       this.users = this.usersS.getUsers();

          // F.U.N.C.I.O.N.A.N.D.O  currentUser() e estado
          let user = this.authS.currentUser().subscribe( user => {
            if (user && this.af.auth) {
            this.isLoggedIn = true;
            this.user = user;
            // FUNCIONANDO PHOTO AKI
            this.user.auth.photoURL;
            this.user.auth.uid;
          }
        });







      // fim constructor
  }

  logout() {
    console.log('Logout service');
      this.af.auth.logout();
      this.router.navigate(['/']);
   }

   currentUser(): Observable<FirebaseAuthState> {
     this.isLoggedIn = true;
     return this.af.auth;
   }

   user: any;
  //  profile: Profile[];
   username: string;

    // F.U.N.C.I.O.N.A.N.D.O
    onSubmit(formUser) {
         this.af.database.list('users').push(
           {
           email: formUser.value.email,
           password: formUser.value.password,
           uid: this.user.auth.uid,
           profile: {
              username: formUser.value.profile
           }
          });
          // zerar form
         formUser = {
            email: this.email = '',
            password: this.password = '',
            // nao consegui zerar o username
         }
      }









      //  .catch( err => {
      //      console.log(err);
      //    })

      //  onSubmit(formUser, user: User ) {
      //    res => {
      //      this.af.database.list('/users').push({
      //        email: formUser.value.email,
      //        password: formUser.value.password,
      //        uid: this.user.auth.uid
      //      }).catch( err => {
      //        console.log(err);
      //      })
      //    }
      //  }





  ngOnInit() {
    $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true, // Choose whether you can drag to open on touch screens
          });


          console.log(this.user.auth.uid);



  // fim OnInit
  }





   // CRIANDO NOVO USUARIO E PREENCHENDO FORMULARIO
    //  onSubmit(formUser, user: User ) {
    //    this.af.auth.createUser({
    //      email: formUser.value.email,
    //      password: formUser.value.password
    //    }).then( res => {
    //      this.af.database.list('/users').push({
    //        email: formUser.value.email,
    //        password: formUser.value.password,
    //        uid: res.uid
    //      }).catch( err => {
    //        console.log(err);
    //      })
     //
    //    })
    //  }
    //















   // TENHO QUE PASSAR O UID TAMBEM
//      onSubmit(formUser) {
//           this.usersS.createUser(formUser);
//           auth => {
//              auth.uid;
//             console.log(auth);
//        formUser = {
//          email: this.email,
//          password: this.password,
//          username: this.username,
//          uid: auth.uid
//        };
//         console.log(auth.uid);
//
//        formUser = {
//          email: this.email = '',
//          password: this.password = ''
//        }
//      }
//
// }

  deleteUser($key : string) {
     this.usersS.removUser($key);
     this.message = 'Removed with Success';
  }




  // let formUser = this.fb.group({
  //      email:  this.email,
  //      password: this.password,
  //      firstName: this.firstName
  // });

        // onSubmit(formUser){
            // this.userS.createUser(formUser);
            //  this.af.database.push(formUser);
            //  this.af.database.list('/users').push(formUser);
              //  username: this.user.username,
              //  email: this.user.email,
              //  password: this.user.password



            //  console.log('Cadastrado com Sucesso');
            //  console.log(formUser.value);
            //  this.usersS.createUser(formUser);
          // }



    // function writeNewPost(uid, username, picture, title, body) {
    //   // A post entry.
    //   var postData = {
    //     author: username,
    //     uid: uid,
    //     body: body,
    //     title: title,
    //     starCount: 0,
    //     authorPic: picture
    //   };
    //
      // Get a key for a new Post.
      // var newPostKey = firebase.database().ref().child('posts').push().key;













}
