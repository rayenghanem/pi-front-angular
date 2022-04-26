import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { thumbnailsSettings } from 'lightgallery/plugins/thumbnail/lg-thumbnail-settings';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { CommentService } from '../services/comment.service';
import { CookieService } from '../services/cookie.service';
import { LikeService } from '../services/like.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  user : User;
  posts : Post[];
  post : Post;
  postForm : FormGroup;
  nbUserComments: Number;
  nbUserPosts: number;
  nbPostLikes: Map<string, Number>;

  constructor(private cookieService: CookieService, private postService: PostService, private formBuilder: FormBuilder,
    private commentService : CommentService,private authService : AuthService,private router: Router,
    private likeService : LikeService) {
      this.nbUserComments = 0;
      this.nbUserPosts = 0;
      this.nbPostLikes = new Map<string,Number>();
      this.post = new Post();
      this.post.user = new User();
      this.post.title='test';
      this.post.description='tesset';
      this.post.subject='tesset';
      this.post.user.name='user1';
      this.post.user.id=1;
      this.post.createDate=new Date();
     }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title : ["",Validators.required],
      subject : ["",Validators.required],
      description : ["",Validators.required]
    });
    this.user = JSON.parse(this.cookieService.getCookie('currentUser')!);
    /* this.commentService.getCountCommentsByUser(this.user.id!).subscribe(count => {
      this.nbUserComments = count;
    }); */
    //Web service to all post of a user
    this.postService.getAll().subscribe(data => {
      this.posts = data;
      //here for each post we use a web service to count likes on a post using a map(key=post_id,val=nblikes)
      this.posts.forEach((val,index)=>{
        /* this.likeService.countLikesPostAndComments(val.postId!).subscribe(postLikeCounts=>{
          this.nbPostLikes.set(val.postId!.toString(),postLikeCounts);
        }); */
      });
      this.nbUserPosts = data.length;
      //we save the nb of posts that a user has to use it in other pages
      this.cookieService.setCookie('nbUserPosts',this.posts.length.toString(),1);
      console.log(data);
    });
  }

  loadScripts() { 
  
    // This array contains all the files/CDNs 
    //const dynamicScripts = environment.scripts;
    
   }
   onSubmit(){
     let p = new Post();
     p = this.postForm.value;
     p.createDate = new Date();
     this.postService.createPost(p).subscribe(data => {
       alert('post added !');
       this.postService.getAll().subscribe(data => {
        this.posts = data;
        this.nbUserPosts = data.length;
        this.cookieService.setCookie('nbUserPosts',this.posts.length.toString(),1);
        console.log(data);
        this.postForm = this.formBuilder.group({
          title : ["",Validators.required],
          post_text : ["",Validators.required]
        });
      });
     },
     (e)=>{console.log(e);});
   }
   logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
