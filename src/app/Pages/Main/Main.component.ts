import { Component, OnInit } from '@angular/core';
import { IPersonCard } from 'src/app/Models/IPersonCard';
import { PersonHttpService } from '../../Services/person/person-http.service';
import { MessageService } from 'primeng/api';
import { IPersonDetails } from 'src/app/Models/IPersonDetails';
import { filter } from 'rxjs/operators';
import { ICity } from 'src/app/Models/ICity';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.scss']
})

export class MainComponent implements OnInit {


person: IPersonCard;
public personList: IPersonCard[];
public peopleWithDanger: IPersonCard[] = [];
public peopleInArea: IPersonCard[] = [];
public city: ICity;

cityName: string;
distance: number = 5;
myLongitude: number;
myLatitude: number;
ifLocationAvailable = true;
displayPeopleInArea = false;
readonly PI = 3.141592653589793;
readonly RADIUS = 6378.16;

  constructor(
    private personHttpService: PersonHttpService,
    private messageService: MessageService
  ) { }



  ngOnInit() {
    if (!navigator.geolocation){
      console.log('Geolocation is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.myLongitude = position.coords.longitude;
      this.myLatitude = position.coords.latitude;
    }, (error) => {
      this.ifLocationAvailable = false;
    });

    this.getAllPeople();
  }

    // Convert degrees to Radians
    public Radians(x: number): number
    {
        return x * this.PI / 180;
    }


    // Calculate the distance between two places.
    public DistanceBetweenPlaces(longitude1: number, latitude1: number, longitude2: number, latitude2: number): number
  {
      let longitudesDistance = this.Radians(longitude2 - longitude1);
      let latitudesDistance = this.Radians(latitude2 - latitude1);

      let a = (Math.sin(latitudesDistance / 2) * Math.sin(latitudesDistance / 2)) + Math.cos(this.Radians(latitude1))
      * Math.cos(this.Radians(latitude2)) * (Math.sin(longitudesDistance / 2) * Math.sin(longitudesDistance / 2));
      let angle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return angle * this.RADIUS;
  }

  public getAllPeople(): void {
    this.personHttpService.getAllPeople().subscribe(
    (src) => {
      this.personList = src;
      this.peopleWithDanger = src.filter(value => value.isAtRisk);
      this.peopleInArea = src.filter(value => (this.DistanceBetweenPlaces(value.decimalLongitude, value.decimalLatitude,
      this.myLongitude, this.myLatitude) <= this.distance));
    },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Nie udane pobranie z bazy',
        });
      }
    );
  }

  showPeopleInArea(){
    this.displayPeopleInArea != this.displayPeopleInArea;
  }

  console(): void{
    console.log(this.personList[50].name);
  }

  updateDistance(value: number){
    this.distance=value;
    this.updatePeopleInArea();
  }

  updateCity(value: string){
    this.getCityByName(value);
    this.myLatitude = this.city.decimalLatitude;
    this.myLongitude = this.city.decimalLongitude;
    this.updatePeopleInArea();
  }

  updatePeopleInArea(){
    this.peopleInArea = this.personList.filter(value => (this.DistanceBetweenPlaces(value.decimalLongitude, value.decimalLatitude,
    this.myLongitude, this.myLatitude) <= this.distance));
  }

  public getCityByName(value: string): void {
    this.personHttpService.getCityByName(value).subscribe(
    (src) => {
      this.city = src;
    },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Nie udane pobranie z bazy',
        });
      }
    );
  }





}
