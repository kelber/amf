import { Component, OnInit , Input } from '@angular/core';
import { PostsService } from '../posts.service';


import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(private pS: PostsService
             ) { }

    @Input() posts: any;


    // updatePost(key, newText) {
    //   this.pS.updatePost(key,newText);
    // }

    removerPost(key) {
      this.pS.deletePost(key);
    }


    //  isso aqui e para o DETALHE so sub: Subscription

      // this.sub = this.posts = this.pS.getPosts().subscribe( posts => {
      //   this.posts = posts;
      // })
    ngOnInit() {

      this.posts = this.pS.getPosts();



    }



}
