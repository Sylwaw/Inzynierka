import { Component, OnInit } from '@angular/core';
import { IPersonCard } from 'src/app/Models/IPersonCard';
import { PersonHttpService } from '../../Services/person/person-http.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.scss']
})
export class MainComponent implements OnInit {
// persons: Array<IPersonCard> = [{}, {}, {}];
persons: Array<IPersonCard> = [
  {
    id: 1,
    name: 'Henryk',
    surname: 'Abłomiejko',
    city: 'Urad',
    picture: 'assets/foto1.jpg'
  },
  {
    id: 2,
    name: 'Rafał',
    surname: 'Adach',
    city: '-',
    picture: 'assets/foto2.jpg'
  },
  {
    id: 3,
    name: 'Mariusz',
    surname: 'Adamczewski',
    city: '-',
    picture: 'assets/foto3.jpg'
  },
  {
    id: 4,
    name: 'Paweł',
    surname: 'Adamczyk',
    city: '-',
    picture: 'assets/foto4.jpg'
  },
  {
    id: 5,
    name: 'Sylwiaaaaa',
    surname: 'Wawrzuta',
    city: 'Bielsko',
    picture: 'assets/foto5.jpg'
  }
];

localization: string;
distance: number =  null;
latitude: number;
longitude: number;
ifLocationAvailable: boolean = true;
  constructor() { }



  ngOnInit() {
    if(!navigator.geolocation){
      console.log("Geolocation is not supported");
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude;
    }, (error) => {
      this.ifLocationAvailable = false;
    })

  }





}
