import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService, ConfirmationService } from 'primeng/api';
import { IPersonCreate } from 'src/app/Models/IPersonCreate';
import { PersonHttpService } from 'src/app/Services/person/person-http.service';
import { ChoiceList } from './add-data/add-data.component';
import { Router } from '@angular/router';
import * as internal from 'events';
import { ICity } from 'src/app/Models/ICity';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  constructor(
    public messageService: MessageService,
    private confirmationService: ConfirmationService,
    private personHttpService: PersonHttpService,
    private router: Router) {};


  items: MenuItem[]; // elements of adding people form
  personToCreate: IPersonCreate = {
    name: '',
    secondName: '',
    surname: '',
    dictCity: null,
    heightFrom: null,
    heightTo: null,
    weightFrom: null,
    weightTo: null,
    otherDetails: '',
    clothesDescription: '',
    tatoosDescription: '',
    scarsDescription:'',
    dateOfDisappear: null,
    isAtRisk: false,
    description: '',
    yearOfBirth: null,
    dictEyeID: null,
    isWaiting: true,
    pictures : []
  };
  submitted = false;
  boolSubmit = false;
  today = new Date;
  maxDateValue = this.today;
  currentYear: number;
  cityName: string;
  cityID: number;
  dateOfDisappear: Date;
  eyes: ChoiceList[];
  tatoosDescription: string;
  scarsDescription: string;
  otherDetails: string;
  clothesDescription: string;
  name: string;
  dictEyeID: number;
  heightMin: ChoiceList[];
  heightMax: ChoiceList[];
  weightMin: ChoiceList[];
  weightMax: ChoiceList[];
  year: ChoiceList[];
  selectedValueYear: ChoiceList;
  selectedValueEyes: ChoiceList;
  selectedValueHeightMin: ChoiceList;
  selectedValueHeightMax: ChoiceList;
  selectedValueWeightMin: ChoiceList;
  selectedValueWeightMax: ChoiceList;
  isAtRisk = false;
  display = false;
  display1 = false;
  boolTatoosDescription: boolean = false;
  boolScarsDescription: boolean = false;
  boolOtherDescription: boolean = false;
  boolClothesDescription: boolean = false;
  city: ICity = {
    id: null,
    name: '',
    decimalLatitude: null,
    decimalLongitude: null
  };



  ngOnInit(): void {

    this.messageService.add({});
    this.eyes = [
      { viewValue: 'Ciemne', value: 1 },
      { viewValue: 'Jasne', value: 2 },
      { viewValue: 'Brązowe', value: 3 },
      { viewValue: 'Czarne', value: 4 },
      { viewValue: 'Niebieskie', value: 5 },
      { viewValue: 'Piwne', value: 6 },
      { viewValue: 'Szare', value: 7 },
      { viewValue: 'Zielone', value: 8 },
    ];

    this.heightMin = [];
    for (let i = 50; i < 210; i++) {
      this.heightMin.push({ viewValue: i + 'cm', value: i });
    }

    this.heightMax = [];
    for (let i = 50; i < 210; i++) {
      this.heightMax.push({ viewValue: i + 'cm', value: i });
    }

    this.weightMin = [];
    for (let i = 1; i < 200; i++) {
      this.weightMin.push({ viewValue: i + 'kg', value: i });
    }

    this.weightMax = [];
    for (let i = 1; i < 200; i++) {
      this.weightMax.push({ viewValue: i + 'kg', value: i });
    }

    this.getCurrentYear();

    this.year = [];
    for (let i = this.currentYear - 110; i <= this.currentYear; i++) {
      this.year.push({ viewValue: i, value: i });
    }
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

  nameImage(event) {
    this.personToCreate.pictures.push(event);
  }

  createNewPerson(){
    //this.personToCreate.name = this.name;
    this.personToCreate.isAtRisk = this.isAtRisk;
    this.personToCreate.heightFrom = this.selectedValueHeightMin.value;
    this.personToCreate.heightTo = this.selectedValueHeightMax.value;
    this.personToCreate.weightFrom = this.selectedValueWeightMin.value;
    this.personToCreate.weightTo = this.selectedValueWeightMax.value;
    this.personToCreate.dictEyeID = this.selectedValueEyes.value;
    this.personToCreate.yearOfBirth = this.selectedValueYear.value;
    this.personToCreate.dictCity = this.cityName;
    this.personToCreate.dateOfDisappear = this.dateOfDisappear;
    this.postPerson();
  }

  postPerson(){
    this.personHttpService.postPerson(this.personToCreate).subscribe(
      (src)=> {
        this.personToCreate = src;
        console.log("test111");
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Nie udało się dodać osoby',
        });
      }
    );
  }

  getCityID(){
    this.getCityByName(this.cityName);
    this.cityID = this.city.id;
  }

  submit() {
    this.createNewPerson();
    this.boolSubmit = true;
  }

  switchValue(boolVal: boolean) {
    boolVal = !boolVal;
  }

  riskIsTrue() {
    this.isAtRisk = true;
  }

  showDialog() {
    this.display = true;
  }

  hideDialog() {
    this.display = false;
  }

  showDialog1() {
    this.display1 = true;
  }

  hideDialog1() {
    this.display1 = false;
  }



  confirm() {
    this.confirmationService.confirm({
      message: 'Jesteś pewien, że powierdzasz informacje?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Zaakceptowano',
        });
        this.boolSubmit = false;
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Rejected',
          detail: 'Nie potwierdziłeś',
        });
        this.boolSubmit = false;
      },
    });
    this.router.navigateByUrl('/main');
  }

  checkIfNull(value: any): boolean{
    if(value == '' || null){
      return true;
    }
    return false;
  }

  getCurrentYear(){
    this.currentYear = new Date().getFullYear();
  }


}
