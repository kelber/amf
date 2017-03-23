import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Post } from './post';


// testes
import { Observable , ReplaySubject } from 'rxjs';

@Injectable()
export class PostsService {

    // CERTO - Mas deu PAU NO length
    posts: FirebaseListObservable<Post[]>;

    // assim da pau nos metodos .remove .update
    // posts: Post[];


// key: string;
  constructor(private af: AngularFire) {

    this.posts = af.database.list('/posts') as FirebaseListObservable<Post[]>;

    // queria fazer assim
    // let post =  af.database.object('/posts/' + this.key ) as FirebaseObjectObservable<any>;



   }



  getPosts() {
    return this.posts;
  }

  folder: any;
  // ou .push(formPost.value);
  newPost(post) {
    this.posts.push({
      chaveA: post
  });



}

updatePost(key, newText) {
  // console.log(key, newText);
  //  this.posts.update(key,newText);
  this.posts.update(key, newText);
}


  deletePost(key: string) {
    this.posts.remove(key);
  }


  // era aqui
// updatePost(key: string, newText: string) {
//     this.posts.update(key, { chaveA: newText });
//   }

deleteAll() {
  this.posts.remove();
}

post: FirebaseObjectObservable<any[]>;
getPost(key: string) {
  this.post = this.af.database.object('/posts/' + key ) as FirebaseObjectObservable<any>;
  return this.post;
}




}
