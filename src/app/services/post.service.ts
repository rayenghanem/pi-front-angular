
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class PostService {

  posturl="localhost:8086/SheApp/retrieve-all-Posts";
    constructor(private http:HttpClient) { }
  
  retrieveAllPostss(): Observable<any> {
      return this.http.get<any>(this. posturl);

}}
