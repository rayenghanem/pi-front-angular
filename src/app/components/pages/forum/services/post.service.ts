import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Post } from "../models/post.model";
import { CookieService } from "./cookie.service";

@Injectable({ providedIn: 'root' })
export class PostService {

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    getAll() : Observable<Post[]> {
        return this.http.get<Post[]>(environment.apiUrl + 'post/getall');
    }
  createPost(post: Post) {
    return this.http.post<Post>(environment.apiUrl + 'post/addpost', post );
    }
  updatePost(post: Post) {
  return this.http.post<Post>(environment.apiUrl + 'post/update', post );
    }
    deletePost(postId:number) : Observable<Post>{
        return this.http.delete<Post>(environment.apiUrl + 'post/delete/'+postId);
    }
    getPostById(id: Number){
        return this.http.get<Post>(environment.apiUrl + 'post/get/' + id);
    }
    getNBComments(id : Number){
        return this.http.get<Number>(environment.apiUrl + 'post/get/number/'+ id );
    }

}