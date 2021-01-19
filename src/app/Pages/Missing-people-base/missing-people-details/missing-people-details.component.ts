import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/Models/person';

export interface Photos {
  previewImageSrc?: string;
  thumbnailImageSrc?: string;
  alt?: string;
  title?: string;
}
@Component({
  templateUrl: './missing-people-details.component.html',
  styleUrls: ['./missing-people-details.component.scss']
})
export class MissingPeopleDetailsComponent implements OnInit {
  @Input() person: Person;

  display: boolean = false;

    


  images: Photos[] = [
    {
        previewImageSrc: 'assets/foto1.jpg',
        thumbnailImageSrc: 'assets/foto1.jpg',
        alt: 'Desc1',
        title: 'Title1'
    },
    {
      previewImageSrc: 'assets/foto2.jpg',
      thumbnailImageSrc: 'assets/foto2.jpg',
      alt: 'Desc2',
      title: 'Title2'
  }
  ];

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
];
showDialog() {
  this.display = !this.display;
}

  constructor() { }

  ngOnInit(): void {
  }

}
