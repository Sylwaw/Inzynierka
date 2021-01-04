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

  persons: Person[] = [
    {
      id: '1',
      name: 'Henryk',
      surname: 'Abłomiejko',
      town: 'Urad',
      image: 'assets/foto1.jpg'
    },
    {
      id: '2',
      name: 'Rafał',
      surname: 'Adach',
      town: '-',
      image: 'assets/foto2.jpg'
    },
    {
      id: '3',
      name: 'Mariusz',
      surname: 'Adamczewski',
      town: '-',
      image: 'assets/foto3.jpg'
    },
    {
      id: '4',
      name: 'Paweł',
      surname: 'Adamczyk',
      town: '-',
      image: 'assets/foto4.jpg'
    },
    {
      id: '5',
      name: 'Sylwiaaaaa',
      surname: 'Wawrzuta',
      town: 'Bielsko',
      image: 'assets/foto5.jpg'
    },
    {
      id: '6',
      name: 'Sylwia',
      surname: 'Wawrzuta',
      town: 'Bielsko',
      image: 'assets/foto6.jpg'
    },
    {
      id: '7',
      name: 'Sylwia',
      surname: 'Wawrzuta',
      town: 'Bielsko',
      image: 'assets/foto7.jpg'
    },
    {
      id: '1',
      name: 'Sylwia',
      surname: 'Wawrzuta',
      town: 'Bielsko',
      image: 'assets/foto8.jpg'
    },
    {
      id: '1',
      name: 'Henryk',
      surname: 'Abłomiejko',
      town: 'Urad',
      image: 'assets/foto9.jpg'
    },
    {
      id: '1',
      name: 'Sylwia',
      surname: 'Wawrzuta',
      town: 'Bielsko',
      image: 'assets/foto10.jpg'
    }

  ];

  openTabDatabase() {
    this.router.navigateByUrl('/database');
  }



  ngOnInit() {

  }
}
