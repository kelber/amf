import { Component, OnInit , Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormsModule , ReactiveFormsModule , FormGroup , FormBuilder } from '@angular/forms';


// esse aqui fez funcionar o auth  Ex: console.log(this.af.auth.uid);
import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';

// import { Observable } from 'rxjs';
import { PostsService } from '../posts.service';
// import { Post } from './post';


import * as firebase from 'firebase';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private pS: PostsService,
              private route: ActivatedRoute,
              private router: Router
            ) {



              this.id = this.route.snapshot.params['id'];

                        this.post = this.pS.getPost(this.id).subscribe( post => {
                          this.post = post;
                          // this.post.chaveA = this.post.chaveA; esquisito
                          //this.owner = post.owner;
                          // console.log(post);
                        });


            }



  @Input() item: any;

  @Input() posts: any;

  id: any;
  post: any;
  key: any;
  // image
  // chaveA: any;


            path;
            child: any;
            url;
            imageUrl: any;
            error: any;


  ngOnInit() {
    console.log('onInit');
            this.id = this.route.snapshot.params['id'];
            this.post = this.pS.getPost(this.id).subscribe( post => {
              this.post = post;
              // this.post.chaveA = this.post.chaveA; esquisito
              //this.owner = post.owner;
              // console.log(post);
            });


          // @ Todo storage
          //   let storageRef = firebase.storage().ref();
          //   // let spaceRef =   storageRef/this.child(this.post.path);
          //   // console.log(this.path);
          //   // console.log(this.post);
          //   storageRef.child(this.post.path).getDownloadURL().then( (url) => {
          //
          //   this.imageUrl = this.url;
          //
          // })
             //set the image Url
          // }).catch(
          //   (err) => {
          //     console.log( error );
          //   }

          // )





//onInit
}


  onEditSubmit(key,newText) {
    let post = {
      post: this.post,
    //title: this.title
    }
    this.pS.updatePost(this.id, this.post);
  // this.pS.updatePost(key,post);
  // console.log(key, newText);
  console.log(this.id, this.post);
  // this.router.navigate(['/posts']);
  }



  onDeleteClick() {
    this.pS.deletePost(this.id);
    this.router.navigate(['/posts']);
  }
  reload() {
      window.location.reload();
  }




}
