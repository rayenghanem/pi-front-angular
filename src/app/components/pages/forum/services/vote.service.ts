import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Vote } from "../models/vote.model";
import { CookieService } from "./cookie.service";

@Injectable({ providedIn: 'root' })
export class VoteService {

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

  vote(vote: Vote,userId:number,idPost:number)   {
    return this.http.post<Vote>(environment.apiUrl + 'vote/addvote/'+userId+'/'+idPost, vote );
  }
}