import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  posts : any;
  constructor(private service:PostService) { }

  ngOnInit(){
    this.service.retrieveAllPostss().subscribe(res=>{console.log(res);
    this.posts=res});
  }

}
