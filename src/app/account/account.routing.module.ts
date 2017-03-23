import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountComponent } from  './account.component';
import { AccountFormComponent } from './account-form/account-form.component';

let acR = [
  { path: '', component: AccountComponent },
  { path: ':id', component: AccountFormComponent },
  { path: 'new', component: AccountFormComponent }


];

@NgModule({
  imports: [ RouterModule.forChild( acR )],
  exports: [ RouterModule ]
})


export class AccountRoutingModule {}
