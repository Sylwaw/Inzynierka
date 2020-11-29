import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Models/person';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Missing-people-base',
  templateUrl: './Missing-people-base.component.html',
  styleUrls: ['./Missing-people-base.component.scss'],
})
export class MissingPeopleBaseComponent implements OnInit {
  constructor(private router: Router) {}

  openTabDatabase() {
    this.router.navigateByUrl('/database');
  }

  persons: Person[] = [
    {
      id: '1',
      name: 'Sylwia',
      surname: 'Wawrzuta',
      town: 'Bielsko',
      image: 'TU BĘDZIE FOTKA'
    },
    {
      id: '2',
      name: 'Sylwiaa',
      surname: 'Wawrzuta',
      town: 'Bielsko',
      image: 'TU BĘDZIE FOTKA'
    },
    {
      id: '3',
      name: 'Sylwiaaa',
      surname: 'Wawrzuta',
      town: 'Bielsko',
      image: 'TU BĘDZIE FOTKA'
    },
    {
      id: '4',
      name: 'Sylwiaaaa',
      surname: 'Wawrzuta',
      town: 'Bielsko',
      image: 'TU BĘDZIE FOTKA'
    },
    {
      id: '5',
      name: 'Sylwiaaaaa',
      surname: 'Wawrzuta',
      town: 'Bielsko',
      image: 'TU BĘDZIE FOTKA'
    }

  ];



  ngOnInit() {

  }
}
