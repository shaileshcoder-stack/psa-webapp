import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';  // Import HttpErrorResponse
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router, public authService: AuthserviceService) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response: { token: string }) => {  // Explicitly typing 'response'
        const token = response.token;
        this.authService.storeToken(token);
        this.router.navigate(['/home']); // Navigate to the home page after successful login
      },
      (error: HttpErrorResponse) => {  // Explicitly typing 'error' as HttpErrorResponse
        console.error('Login failed', error);
      }
    );
  }
}
