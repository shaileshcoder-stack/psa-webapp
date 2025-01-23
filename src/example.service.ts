import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor( private http:HttpClient) { }
  getdata():Observable<any> {
    return this.http.get('https://jsonpla');
  }
}
