import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';

import { ProfileComponent } from './profile/profile.component';

import { AuthGuardService } from './auth/auth-guard.service';

let appRoutes: Routes = [
  { path: 'docs', component: DocsComponent , canActivate: [ AuthGuardService ] },
  { path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule'
 },
 { path: 'users',
    loadChildren: 'app/users/users.module#UsersModule' , canActivate: [ AuthGuardService ]
 },
 { path: 'account',
    loadChildren: 'app/account/account.module#AccountModule'
 },
 { path: 'posts',
      loadChildren: 'app/posts/posts.module#PostsModule'
},
 { path: 'games',
    loadChildren: 'app/games/games.module#GamesModule'
 },
 { path: 'profile', component: ProfileComponent } ,
 { path: '', component: HomeComponent },
 { path: '**' , component: HomeComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot( appRoutes )],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
