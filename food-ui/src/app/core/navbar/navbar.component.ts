import { Component, OnInit } from '@angular/core';
import { NavItem } from './nav-item.model';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private ms: MenuService) {}

  menuItems: NavItem[];

  ngOnInit() {
    this.menuItems = [
      { title: 'Home', url: '/' },
      { title: 'Food', url: '/food' },
      { title: 'About', url: '/about' },
    ];
  }

  toggleMenu() {
    this.ms.toggleMenuVisibility();
  }
}
