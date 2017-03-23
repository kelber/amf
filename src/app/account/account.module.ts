import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing.module';
import { AccountService } from './account.service';
import { AccountFormComponent } from './account-form/account-form.component';


@NgModule({
  imports: [ CommonModule , AccountRoutingModule , FormsModule , ReactiveFormsModule ],
  declarations: [ AccountComponent, AccountFormComponent ],
  providers: [ AccountService ]

})

export class AccountModule {}
