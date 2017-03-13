import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing.module';

import { UsersService } from './users.service';

@NgModule({
  imports: [ CommonModule , FormsModule, ReactiveFormsModule, UsersRoutingModule ],
  declarations: [ UsersComponent ],
  providers: [ UsersService ]

})

export class UsersModule {}
