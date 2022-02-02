import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Http2ServerRequest } from 'http2';
import { MessageService } from 'primeng/api';
import { IPersonCard } from 'src/app/Models/IPersonCard';
import { getTypeParameterOwner } from 'typescript';
import {PersonHttpService} from '../../../Services/person/person-http.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {


  @Input() person: IPersonCard; // Getting data from parent component
  personList: IPersonCard[];
  imageSource: string = "assets/";
  name: string;
  imagePath: string = "";



  constructor(
    private router: Router,
    private personHttpService: PersonHttpService,
    private messageService: MessageService) {

  }

  ngOnInit(): void {
    // console.log(this.person);
  }

  actualAge(yearOfBirth: number): number {
      let actualYear = new Date().getFullYear();
      let actualAge = actualYear - yearOfBirth;
      return actualAge;
  }



}
