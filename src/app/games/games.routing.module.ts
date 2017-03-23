import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GamesComponent } from './games.component';

let gR = [
  { path: '', component: GamesComponent } 

];


@NgModule({
  imports: [ RouterModule.forChild ( gR )],
  exports: [ RouterModule ],

})

export class GamesRoutingModule {}

