import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { ConfigService } from './core/config/config.service';
import { FoodFacade } from './food/state/food.facade';
import { MenuFacade } from './state/menu/menu.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Passion for Food!';
  authenticated: boolean = false;
  sidenavMode: MatDrawerMode = 'side';
  sidenavVisible = this.mf.sideNavVisible;
  isIframe = window !== window.parent && !window.opener;

  constructor(
    private as: AuthService,
    private router: Router,
    public mf: MenuFacade,
    public ff: FoodFacade,
    public cs: ConfigService
  ) {}

  ngOnInit(): void {
    this.mf.sideNavPosition.subscribe(
      (mode) => (this.sidenavMode = mode as MatDrawerMode)
    );

    this.as.isInitAndAuthenticated().subscribe((proceed) => {
      if (proceed) {
        this.authenticated = proceed;
        this.router.navigate(['/food']);
      }
    });
  }

  getWorbenchStyle() {
    let result = {};
    this.mf.sideNavVisible.subscribe((visible) => {
      result = visible
        ? {
            'padding-left': '10px',
          }
        : {};
    });
    return result;
  }
}
