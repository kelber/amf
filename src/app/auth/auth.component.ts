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
      //usando fb


    // Auth Simples
    // this.af.auth.subscribe( auth => {
    //   // console.log('auth do constructor');
    //   this.router.navigate(['docs']);
    // });





    // Isso Inicializa o FormGroup
    this.formRegister = this.fb.group({
      email: this.email,
      password: this.password
    });


    // fim constructor
      }





        ngOnInit() {  }


        // FUNCIONANDO REACTIVE
      //    onSubmit(formRegister) {
      //      this.af.auth.createUser({
      //        email: this.formRegister.value.email,
      //        password: this.formRegister.value.password
      //      }).catch(function(error) {
      //        console.log(error);
      //  });
      //  }


       // Create User  FUNCIONANDO
       onSubmit(formRegister) {
         if (formRegister.valid) {
           console.log(formRegister.value);
           this.af.auth.createUser({
             email: formRegister.value.email,
             password: formRegister.value.password
           }).then(
             ( success ) => {
               this.router.navigate(['docs']);
             }).catch(
               ( err ) => {
                 console.log(err);
                 this.error = err;

               }
             )}
       }






      //   onSubmit(email, password) {
      //      this.af.auth.createUser({
      //        email: this.email,
      //        password: this.password
      //      }).catch(function(error) {
      //        // error
      //        console.log(error);
      //  });
      //  }


        // SIGNIN
      //   onSubmit(formData) {
      //     console.log('clicado');
      //   if(formData.valid) {
      //     console.log('clicado passou 1');
      //     console.log(formData.value);
      //     this.af.auth.login({
      //       email: formData.value.email,
      //       password: formData.value.password
      //     },
      //     {
      //       provider: AuthProviders.Password,
      //       method: AuthMethods.Password
      //     }).then(
      //       (success) => {
      //       console.log(success);
      //       this.router.navigate(['home']);
      //     }).catch(
      //       (err) => {
      //       console.log(err);
      //       this.router.navigate(['home']);
      //     });
      //   }
      // }
      //




    // SIGNUP
    // onSubmit(email, password) {
    //     if(email.valid) {
    //       console.log(email.value);
    //       this.af.auth.createUser({
    //         email: this.email,
    //         password: this.password
    //       }).then(
    //         (success) => {
    //         console.log(success);
    //         this.router.navigate(['/home'])
    //       }).catch(
    //         (err) => {
    //         console.log(err);
    //         this.router.navigate(['/home']);
    //       })
    //     }
    //   }







//fechamento Tudo
  }


    // onSubmit(formData) {
    //         if (formData.valid) {
    //           console.log(formData.value);
    //           this.af.auth.login({
    //             email: formData.value.email,
    //             password: formData.value.password
    //           },
    //           {
    //             provider: AuthProviders.Password,
    //             method: AuthMethods.Password
    //           }).then(
    //             (success) => {
    //               console.log(success);
    //               this.router.navigate(['/users']);
    //             }).catch(
    //                 (err) => {
    //                 this.error = err;
    //                 this.email = '';
    //                 this.password = '';
    //                 });
    //         }
    //       }


  // // Create User
  // onSubmit(formData) {
  //   console.log('apertado');
  //   console.log(this.email);
  //   if (formData) {
  //     console.log(formData.value);
  //     this.af.auth.createUser({
  //       email: this.email,
  //       password: this.password
  //     }).then(
  //       ( success ) => {
  //         console.log(success);
  //         this.router.navigate(['/home']);
  //       }).catch(
  //         ( err ) => {
  //           console.log(err);
  //           this.error = err;
  //         }
  //       )}
  // }
