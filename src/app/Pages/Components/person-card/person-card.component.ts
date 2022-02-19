import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import { IPersonCard } from 'src/app/Models/IPersonCard';
import { IPersonUpdate } from 'src/app/Models/IPersonUpdate';
import { getTypeParameterOwner } from 'typescript';
import {PersonHttpService} from '../../../Services/person/person-http.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css'],
  providers: [MessageService]
})
export class PersonCardComponent implements OnInit {


  @Input() person: IPersonCard; // Getting data from parent component
  personList: IPersonCard[];
  imageSource: string = "assets/";
  name: string;
  imagePath: string = "";

  personToUpdate: IPersonUpdate = {
    city: '',
    isAtRisk: null,
    riskDescription: '',
    otherDetails: '',
    isWaiting: null,
  };



  constructor(
    private router: Router,
    private personHttpService: PersonHttpService,
    private messageService: MessageService) {

  }

  ngOnInit(): void {
this.getPhoto(this.person.picture);
  }

  putPerson(id:number){
    this.personHttpService.putPeopleById(id, this.personToUpdate).subscribe(
      (src)=> {
        this.personToUpdate = src;
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Nie udało się zmienić danych osoby',
        });
      }
    );
  }

  getPhoto(name: string){
    this.personHttpService.getPhotoFile(name).subscribe(
      (src) => {
        this.imageSource = src;
        // this.photos.push(src);alt:name,previewImageSrc:src,thumbnailImageSrc:src,title:name});
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Nie udało się wczytać zdjęcia',
        });
      }
    )
  }

  deletePerson(id:number){
    this.personHttpService.deletePeopleById(id).subscribe(
      (src)=> {
        console.log(src);
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Nie udało się zmienić danych osoby',
        });
      }
    );
  }

  actualAge(yearOfBirth: number): number {
      let actualYear = new Date().getFullYear();
      let actualAge = actualYear - yearOfBirth;
      return actualAge;
  }

  notWaiting(){
    this.personToUpdate.isWaiting = false;
    this.personToUpdate.city = this.person.city;
    this.personToUpdate.isAtRisk = this.person.isAtRisk;
    this.personToUpdate.riskDescription = this.person.description;
    this.putPerson(this.person.id);
    console.log(this.person.name);
    this.person.isWaiting = false;
    this.showMessage();
  }

  delete(){
    this.deletePerson(this.person.id);
    window.location.reload;
    this.showMessage();
  }

  showMessage() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  deleteFromCurrentArray(){

  }






}
