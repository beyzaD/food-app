import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Passion for Food!';
  authenticated: boolean = false;

  constructor(private as: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.as.isAuthenticated().subscribe((isAuth) => {
      this.authenticated = isAuth;
      if (isAuth) {
        this.router.navigate(['/food']);
      }
    });
  }
}
