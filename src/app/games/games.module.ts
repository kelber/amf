import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games.routing.module';

@NgModule({
  imports: [ CommonModule, GamesRoutingModule ],
  exports: [ GamesComponent ],
  declarations: [ GamesComponent ],
  providers: []

})

export class GamesModule {}





