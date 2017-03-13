import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Materialize
// import 'materialize-css';
// import 'angular2-materialize';
import { MaterializeModule } from 'angular2-materialize';

// Firebase
import { AngularFireModule , AuthProviders, AuthMethods } from 'angularfire2';
import { firebaseConfig } from '../environments/firebaseconfig';
declare var firebase: any;



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';


import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

// coloquei por que apitava fromPromise ERRO
import { Observable } from 'rxjs/Observable';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule
  ],
  providers: [ AuthService , AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
