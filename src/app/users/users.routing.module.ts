import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';


let uRoutes = [
  { path: '', component: UsersComponent }

];


@NgModule({
  imports: [ RouterModule.forChild( uRoutes )],
  exports: [ RouterModule ]
})

export class UsersRoutingModule {}
