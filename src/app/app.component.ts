import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'inzynierka';
  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Strona główna', icon: 'pi pi-fw pi-home', routerLink: '/main' },
      {
        label: 'Baza zaginionych',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/search',
      },
      { label: 'Zgłoś osobę', icon: 'pi pi-plus', routerLink: '/add' },
    ];
    this.activeItem = this.items[0];
  }
}
