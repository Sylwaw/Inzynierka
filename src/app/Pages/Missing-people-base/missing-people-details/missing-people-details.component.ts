import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/Models/person';

@Component({
  templateUrl: './missing-people-details.component.html',
  styleUrls: ['./missing-people-details.component.scss']
})
export class MissingPeopleDetailsComponent implements OnInit {
  @Input() person: Person;
  // Galeria, narazie nie działa!!

  /*images: any[];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];*/

  constructor() { }

  ngOnInit(): void {
  }

}
