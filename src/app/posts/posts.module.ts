import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts.routing.module';

import { PostsService } from './posts.service';
import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';


@NgModule({
  imports: [ CommonModule , PostsRoutingModule , FormsModule , ReactiveFormsModule ],
  declarations: [ PostsComponent, PostComponent, PostsListComponent ],
  providers: [ PostsService  ]

})

export class PostsModule {}
