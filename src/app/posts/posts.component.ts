import { Component, OnInit , Inject, Input } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormsModule , ReactiveFormsModule , FormGroup , FormBuilder } from '@angular/forms';


// esse aqui fez funcionar o auth  Ex: console.log(this.af.auth.uid);
import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';

// import { Observable } from 'rxjs';
import { PostsService } from './posts.service';
// import { Post } from './post';


// FOTO
import * as firebase from 'firebase';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

registerForm: FormGroup;



posts: FirebaseListObservable<any>;

// upload foto
@Input() fbsBasePath: string;
@Input() btnSelectText: string;
targetRef:any;
storageRef:any;

  constructor(private af: AngularFire,
              private pS: PostsService,
              private fb: FormBuilder
            ) {
 // this.items = af.database.list('/messages');
  this.posts = this.pS.getPosts()

  //FOTO antigo
  // this.folder = 'imagesOfPosts';

  // Foto Novo
  this.storageRef = firebase.storage().ref();


}


folder: any;
addPost(newName: string, image: string) {
  this.pS.newPost(newName);

  // let storageRef = firebase.storage().ref();
  // for ( let selectedFile of [ (<HTMLInputElement>document.getElementById('image')).files[0] ]) {
  //   let path = `/${this.folder}/${selectedFile.name}`;
  //   let iRef = storageRef.child(path);
  //       iRef.put(selectedFile).then( (snapshot) => {
  //         image = selectedFile.name;
  //         path = path;
  //         return this.posts.push(image);
  //       })
  // }


 // return this.onBtnBrowseClick && this.onBtnUploadChange &&  this.uploadFile;












// FIM DO ADDPOST
}

// funciona no posts
deleteEverything() {
  this.pS.deleteAll();
}

ngOnInit() {
}




  ///////////////////////////////////////////////////////////////////////////
  /// UPLOAD STORAGE
  ///

  onBtnBrowseClick(event:any){
          let uploadButton = document.getElementById("btnUpload");
          uploadButton.click();
      }

      onBtnUploadChange(event:any){
          let targetFile = event.srcElement.files[0];
          let uploader = document.getElementById("btnUpload");
          let fbsPath = '/images/'  + targetFile.name;
          // let fbsPath = this.fbsBasePath + targetFile.name;
          this.uploadFile(fbsPath,targetFile);
      }

      uploadFile(fbsPath:string,targetFile:string) {
        let promise = new Promise((res,rej) => {
           this.targetRef=this.storageRef.child(fbsPath);
           let task=this.targetRef.put(targetFile);
           task.on('state_changed',
             (snapshot:any) => {
               console.log(snapshot.state);
             },
             (error:any) => {
               console.log(error.code);
               rej(error);
             },
             () => {
               let downloadUrl = task.snapshot.downloadURL;
               console.log(downloadUrl);
               res(downloadUrl);
             }
           );
        })
        return promise;
      }

  // FIM STORAGE
  //////////////////////////////////////////////////////////////////////////



  // enviei form sem o | post: string;
  // FUNCIONANDO basico
  // post: Post[];
  // lonSubmit(formPost) {
  //   console.log('enviando...');
  //   this.pS.onSubmit(formPost);
  //   formPost = {
  //     title: formPost.title,
  //     body:  formPost.body,
  //   }
  // }
  //
  //






}
