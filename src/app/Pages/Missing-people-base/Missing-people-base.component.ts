import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { IPersonCard } from 'src/app/Models/IPersonCard';
import { PersonHttpService } from '../../Services/person/person-http.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import {SelectItem} from 'primeng/api';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Missing-people-base',
  templateUrl: './Missing-people-base.component.html',
  styleUrls: ['./Missing-people-base.component.scss'],
})
export class MissingPeopleBaseComponent implements OnInit {
  constructor(
    private router: Router,
    private personHttpService: PersonHttpService,
    private messageService: MessageService
  ) {}

  visible = false;

  person: IPersonCard;
  personList: IPersonCard[];
  persons: IPersonCard[] = [];
  sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

  ngOnInit() {
    this.getAllPeople();
    this.sortOptions = [
      {label: 'Wiek rosnąco', value: '!yearOfBirth'},
      {label: 'Wiek malejąco', value: 'yearOfBirth'},
  ];


  }

  showDialog() {
    this.visible = !this.visible;
  }

  onSortChange(event) {
    let value = event.value;

    if (value.yearOfBirth('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

  getAllPeople(): void {
    this.personHttpService.getAllPeople().subscribe(
    (src) => {
      this.personList = src;
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
