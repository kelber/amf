


///////////////////////////////////////////////////////////////

// snippets do guard

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
 ////////////////////////////////////////////////////////////////////



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



    // Auth Simples
    // this.af.auth.subscribe( auth => {
    //   // console.log('auth do constructor');
    //   this.router.navigate(['docs']);
    // });



          // TA BONITO ... mas ficou sem usar....
          //  Create User
            // onSubmit(formRegister) {
            //   if (formRegister.valid) {
            //     console.log(formRegister.value);
            //     this.af.auth.createUser({
            //       email: formRegister.value.email,
            //       password: formRegister.value.password
            //     }).then(
            //       ( success ) => {
            //         this.router.navigate(['docs']);
            //       }).catch(
            //         ( err ) => {
            //           console.log(err);
            //           this.error = err;
            //         }
            //       )}
            // }
            //
        // onSubmit(formData) {
        //     if (formData.valid) {
        //       console.log(formData.value);
        //       this.af.auth.createUser({
        //         email: formData.value.email,
        //         password: formData.value.password
        //       }).then(
        //         (success) => {
        //           console.log(success);
        //           this.router.navigate(['/users']);
        //         }).catch(
        //           (err) => {
        //             this.error = err;
        //           });
        //     }
        //   }

        // FUNCIONANDO PERFEITO
        // this.authS.af.auth.subscribe(
        //   ( auth ) => {
        //   if (auth == null) {
        //     console.log('Sai do docs.component');
        //     // not logged In
        //   } else {
        //     // is Logged in
        //     console.log('logado no docs.component');
        //     this.isLoggedIn = true;
        //   }
        // });
        //




  // Login User
  // onSubmit(formUser) {
  //   if (formUser.valid) {
  //     console.log(formUser.value);
  //     this.af.auth.login({
  //       email: formUser.value.email,
  //       password: formUser.value.password
  //     },
  //     {
  //       provider: AuthProviders.Password,
  //       method: AuthMethods.Password
  //     }
  //   ).then(
  //       ( success ) => {
  //         this.router.navigate(['/home']);
  //       }).catch(
  //         ( err ) => {
  //           console.log(err);
  //           this.error = err;
  //         }
  //       )}
  // }





  // ESQUEMA DO design.Code
// Create User
// registerUser(formUser) {
//   if (formUser.valid) {
//     console.log(formUser.value);
//     this.authS.af.auth.createUser({
//       email: formUser.value.email,
//       password: formUser.value.password
//     }).then(
//       ( success ) => {
//         this.router.navigate(['/docs']);
//       }).catch(
//         ( err ) => {
//           console.log(err);
//           this.error = err;
//         }
//       )}
// }





// estavam no LOGIN.COMPONENT

// loginG() {
//    return this.authS.loginG().then( (data) => {
//      this.router.navigate(['/docs']);
//    })
//
// }




 // GOOGLE LOGIN FUNCIONANDO
  // CAMPOS FUNCIONA NORMAL igual formLogin

 // name , email , uid ,

  // loginG() {
  //  return this.af.auth.login({
  //    provider: AuthProviders.Google,
  //    method: AuthMethods.Popup,
  //  }).then(
  //    (success) => {
  //    this.router.navigate(['/']);
  //    }).catch(
  //      (err) => {
  //        this.error = err;
  //      });
  // }




/// ESTAVAM NO SERVICE V







        // ESQUEMA DO design.Code
  //error: any;
  // Create User
  // registerUser(formUser) {
  //   if (formUser.valid) {
  //     console.log(formUser.value);
  //     this.af.auth.createUser({
  //       email: formUser.value.email,
  //       password: formUser.value.password
  //     }).then(
  //       ( success ) => {
  //         this.router.navigate(['/home']);
  //       }).catch(
  //         ( err ) => {
  //           console.log(err);
  //           this.error = err;
  //         }
  //       )}
  // }






      // FUNCIONANDO mas sem currentUser
      // let user = firebase.auth().currentUser;
      // if (user && this.af.auth) {
      //   console.log('esta signIn e AUTH NO SERVICE');
      //   this.name = user.displayName;
      //   this.email = user.email;
      //   // this.photoUrl? = user.photoUrl;
      //   this.uid = user.uid;
      //
      //   this.isLoggedIn = true;
      //
      // } else {
      //   console.log('Esta fora do servico');
      // }
      //


    // auth state
    // esquem ado design.Code
    // this.af.auth.subscribe( auth => {
    //   if (auth) {
    //     this.router.navigate(['/home'])
    //   }
    // });


    // currentUser(): Observable<FirebaseAuthState[any]> {
    //   this.user = auth.currentUser();
    //   return this.af.auth;
    //
    //
    // };


    // loginG() {
    //  return this.af.auth.login({
    //    provider: AuthProviders.Google,
    //    method: AuthMethods.Popup,
    //  }).then(
    //    (success) => {
    //    this.router.navigate(['/']);
    //    }).catch(
    //      (err) => {
    //        this.error = err;
    //      });
    // }



  //  dando pau no fromPromise
  //  login(email, password): Observable<FirebaseAuthState> {
  //    let promise = <Promise<FirebaseAuthState>> this.af.auth.login({
  //      email: email,
  //      password: password
  //    });
  //    return Observable.fromPromise(promise);
   //
  //  }








      // FUNCIONANDO
      // let user = firebase.auth().currentUser;
      // if (user && this.af.auth) {
      //   console.log('esta signIn e AUTH NO SERVICE');
      //   this.name = user.displayName;
      //   this.email = user.email;
      //   // this.photoUrl? = user.photoUrl;
      //   this.uid = user.uid;
      //
      //   this.isLoggedIn = true;
      //
      // } else {
      //   console.log('Esta fora do servico');
      // }
      //


    // auth state
    // esquem ado design.Code
    // this.af.auth.subscribe( auth => {
    //   if (auth) {
    //     this.router.navigate(['/home'])
    //   }
    // });


    // currentUser(): Observable<FirebaseAuthState[any]> {
    //   this.user = auth.currentUser();
    //   return this.af.auth;
    //
    //
    // };


    // loginG() {
    //  return this.af.auth.login({
    //    provider: AuthProviders.Google,
    //    method: AuthMethods.Popup,
    //  }).then(
    //    (success) => {
    //    this.router.navigate(['/']);
    //    }).catch(
    //      (err) => {
    //        this.error = err;
    //      });
    // }


            // Create User
            // onSubmit(formRegister) {
            //   if (formRegister.valid) {
            //     console.log(formRegister.value);
            //     this.af.auth.createUser({
            //       email: formRegister.value.email,
            //       password: formRegister.value.password
            //     }).then(
            //       ( success ) => {
            //         this.router.navigate(['docs']);
            //       }).catch(
            //         ( err ) => {
            //           console.log(err);
            //           this.error = err;
            //         }
            //       )}
            // }

        // onSubmit(formData) {
        //     if (formData.valid) {
        //       console.log(formData.value);
        //       this.af.auth.createUser({
        //         email: formData.value.email,
        //         password: formData.value.password
        //       }).then(
        //         (success) => {
        //           console.log(success);
        //           this.router.navigate(['/users']);
        //         }).catch(
        //           (err) => {
        //             this.error = err;
        //           });
        //     }
        //   }

        // FUNCIONANDO PERFEITO
        // this.authS.af.auth.subscribe(
        //   ( auth ) => {
        //   if (auth == null) {
        //     console.log('Sai do docs.component');
        //     // not logged In
        //   } else {
        //     // is Logged in
        //     console.log('logado no docs.component');
        //     this.isLoggedIn = true;
        //   }
        // });
        //









        // ESQUEMA DO design.Code
  //error: any;
  // Create User
  // registerUser(formUser) {
  //   if (formUser.valid) {
  //     console.log(formUser.value);
  //     this.af.auth.createUser({
  //       email: formUser.value.email,
  //       password: formUser.value.password
  //     }).then(
  //       ( success ) => {
  //         this.router.navigate(['/home']);
  //       }).catch(
  //         ( err ) => {
  //           console.log(err);
  //           this.error = err;
  //         }
  //       )}
  // }


  // Login User
  // onSubmit(formUser) {
  //   if (formUser.valid) {
  //     console.log(formUser.value);
  //     this.af.auth.login({
  //       email: formUser.value.email,
  //       password: formUser.value.password
  //     },
  //     {
  //       provider: AuthProviders.Password,
  //       method: AuthMethods.Password
  //     }
  //   ).then(
  //       ( success ) => {
  //         this.router.navigate(['/home']);
  //       }).catch(
  //         ( err ) => {
  //           console.log(err);
  //           this.error = err;
  //         }
  //       )}
  // }
















    // let user = firebase.auth().currentUser;
    // if (user && af.auth) {
    //   console.log('esta signIn e AUTH');
    //   this.name = user.displayName;
    //   this.email = user.email;
    //   // this.photoUrl = user.photoUrl;
    //   this.uid = user.uid;
    //
    //   this.isLoggedIn = true;
    // } else {
    //   console.log('esta fora do home.component');
    // }


    // BOA FORMA ENCONTRADA PARA SABER SE ESTA isLoggedIn
    // let user = this.authS.currentUser();
    // if (user && af.auth) {
    //   this.isLoggedIn = true;
    // }
    // BOA FORMA  TAMBEM
    // this.authS.currentUser().subscribe( user => {
    //   this.isLoggedIn = true;
    //   this.user = user;
    //   console.log(user);
    // });
    //


    // this.authS.currentUser();



// user: FirebaseAuthState;  PRECISA
// this.authS.currentUser().subscribe( user => {
//   this.isLoggedIn = true;
//   this.user = user;
//   console.log(user);
// });
//


// this.af.auth.subscribe( auth => {
//   if (!auth) {
//     this.isLoggedIn = false;
//   }
// });



//  declare var firebase: any;

// ESSE DEVE SER PASSADO EM TODOS OS COMPONENTS Q FOR USAR
// let user = firebase.auth().currentUser;
// if (user && af.auth) {
//   console.log('esta signIn e AUTH');
//   // Aqui dentro e user.
//   // this.name = user.displayName || user.google.displayName;
//   this.email = user.email || user.google.email || user.facebook.email;
//   // this.photoUrl = user.facebook.public_profile.cover;
//   // this.photoUrl = user.photoUrl; nao deu erro porem nao saiu :()
//   this.uid = user.uid || user.google.uid || user.facebook.uid;
//   this.isLoggedIn = true;
// } else {
//   console.log('esta fora do docs.component');
//   this.name = '';
// }


// BOA FORMA ENCONTRADA PARA SABER SE ESTA isLoggedIn
// ver conflito com o ngOnINit abaixo
// let user = this.authS.currentUser();
// if (user && af.auth) {
//   this.isLoggedIn = true;
// }

//  logout(): Observable<void> {
//    console.log('Logout');
//    let promise = this.af.auth.logout();
//    return Observable.fromPromise(promise);
 //
//   }


  //  FUNCIONANDO BEM
  // logout() {
  //   console.log('logout');
  //   //  this.authS.logout();
  //   this.af.auth.logout();
  //    this.router.navigate(['/auth/login']);
  // }

  // DEU PAU
  //     if (auth) {
  //       this.router.navigate(['/']);
  //     }
  //   });
  // }



  // user: FirebaseAuthState;   ESSA FUNCIONA
  // this.authS.currentUser().subscribe( user => {
  //   this.isLoggedIn = true;
  //   this.user = user;
  //   console.log(user);
  // });
  //
  //   +
  // BOA FORMA ENCONTRADA PARA SABER SE ESTA isLoggedIn
    // let user = this.authS.currentUser();
    // if (user && this.af.auth) {
    //   this.isLoggedIn = false;
    // }
    // =======================================================
    // 2 em 1  NAO FUNCIONOU

  // this.authS.currentUser().subscribe( (user) => {
  //   if (user && this.af.auth) {
  //     this.isLoggedIn = false;
  //   } else {
  //     this.isLoggedIn = true;
  //    console.log(user);
  //   }
  // });
