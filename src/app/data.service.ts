import { Injectable } from '@angular/core';
import { post } from './components/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private httpd :HttpClient) { }
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getpost(): Observable<[]>{
    return this.httpd.get<[]>(this.apiUrl)
  }
}
