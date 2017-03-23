import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { AuthGuardService } from '../auth/auth-guard.service';


let uRoutes = [
  { path: '', component: UsersComponent , canActivated: [ AuthGuardService ] }

];


@NgModule({
  imports: [ RouterModule.forChild( uRoutes )],
  exports: [ RouterModule ]
})

export class UsersRoutingModule {}
