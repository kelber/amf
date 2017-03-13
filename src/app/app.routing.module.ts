import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';

import { AuthGuardService } from './auth/auth-guard.service';

let appRoutes: Routes = [
  { path: 'docs', component: DocsComponent , canActivate: [ AuthGuardService ] },
  { path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule'
 },
 { path: 'users',
    loadChildren: 'app/users/users.module#UsersModule'
 },
 { path: '', component: HomeComponent },
 { path: '**' , component: HomeComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot( appRoutes )],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
