import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  constructor() {}

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      { label: 'Dane osobowe', routerLink: 'data' },
      { label: 'Zdjęcie', routerLink: 'photo' },
      { label: 'Szczegóły', routerLink: 'details' },
    ];
  }
}
