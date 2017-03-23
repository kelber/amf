import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsComponent } from  './posts.component';
import { PostComponent } from './post/post.component';

let pR = [
  { path: '', component: PostsComponent },
  { path: ':id', component: PostComponent }


];

@NgModule({
  imports: [ RouterModule.forChild(  pR )],
  exports: [ RouterModule ]
})


export class PostsRoutingModule {}
