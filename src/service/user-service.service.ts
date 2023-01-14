import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from 'src/model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url : string = 'https://jsonplaceholder.typicode.com/comments';
  constructor(
    private http: HttpClient,
  ) { }

  getComments(): Observable<Comments>{
    return this.http.get<Comments>(this.url);
  }
}
