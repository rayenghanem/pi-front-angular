import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CookieService } from "./cookie.service";

@Injectable({ providedIn: 'root' })
export class CommentService {

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    getAll() : Observable<Comment[]> {
        return this.http.get<Comment[]>(environment.apiUrl + 'comment/all');
    }
    createComment(comment: Comment) {
        return this.http.post<Comment>(environment.apiUrl + 'comment/create', comment );
        }
    getCommentsByPostId(id: Number) {
        return this.http.get<Comment>(environment.apiUrl + 'comment/post/get' + id);
    }
    getCommentById(id: Number){
        return this.http.get<Comment>(environment.apiUrl + 'comment/get/' + id);
    }
    getCountCommentsByUser(idUser : Number){
        return this.http.get<Number>(environment.apiUrl + 'comment/count/user/' + idUser);
    }

}