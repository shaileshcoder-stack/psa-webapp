import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  login() {
    // Simulate login logic, like calling a backend API and getting a token
    localStorage.setItem('userToken', 'your_token_value');  // Simulating a token being stored after login

    // Get the stored redirect URL (if any)
    const redirectUrl = sessionStorage.getItem('redirectUrl') || '/home';

    // Clear the stored redirect URL
    sessionStorage.removeItem('redirectUrl');

    // Redirect to the intended page or default to home
    this.router.navigate([redirectUrl]);
  }
}
