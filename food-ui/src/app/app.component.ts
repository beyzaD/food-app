import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { MenuService } from './core/menu/menu.service';
import { FoodFacade } from './food/store/facades/food.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Passion for Food!';
  authenticated: boolean = false;
  sidenavMode: MatDrawerMode = 'side';
  sidenavVisible = this.ms.sideNavVisible;

  constructor(
    private as: AuthService,
    private router: Router,
    public ms: MenuService,
    public ff: FoodFacade
  ) {}

  ngOnInit(): void {
    this.ms.sideNavPosition.subscribe(
      (m) => (this.sidenavMode = m as MatDrawerMode)
    );

    this.as.isAuthenticated().subscribe((isAuth) => {
      this.authenticated = isAuth;
      if (isAuth) {
        this.router.navigate(['/food']);
      }
    });
  }

  getWorbenchStyle() {
    let result = {};
    this.ms.sideNavVisible.subscribe((visible) => {
      result = visible
        ? {
            'padding-left': '10px',
          }
        : {};
    });
    return result;
  }
}
