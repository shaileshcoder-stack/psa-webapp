import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {

  private apiUrl = 'http://localhost:4200/login'; // Replace with your actual login endpoint

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(this.apiUrl, body); // POST request to the server
  }

  storeToken(token: string) {
    localStorage.setItem('userToken', token); // Storing token in localStorage
  }
  
  getToken() {
    return localStorage.getItem('userToken'); // Get the token from localStorage
  }

  logout() {
    localStorage.removeItem('userToken'); // Removing token on logout
  }

  isAuthenticated(): boolean {
    return !!this.getToken(); // Check if a token exists (user is authenticated)
  }
}
