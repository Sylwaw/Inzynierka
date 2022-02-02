import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IPersonCard } from 'src/app/Models/IPersonCard';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { PersonHttpService } from '../../../Services/person/person-http.service';
import { IPersonDetails } from 'src/app/Models/IPersonDetails';

export interface Photos {
  previewImageSrc?: string;
  thumbnailImageSrc?: string;
  alt?: string;
  title?: string;
}
@Component({
  templateUrl: './missing-people-details.component.html',
  styleUrls: ['./missing-people-details.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class MissingPeopleDetailsComponent implements OnInit, OnDestroy {
  person: IPersonDetails;

  displayIfClientIsLostPerson = false;
  displayToAddPhoto = false;
  displayIfClientUpdate = false;
  paramRouteSub: Subscription;
  personId: number;
  photoNames: string[] = [];

  images: Photos[] = [
    {
      previewImageSrc: 'assets/foto1.jpg',
      thumbnailImageSrc: 'assets/foto1.jpg',
      alt: 'Desc1',
      title: 'Title1',
    },
    {
      previewImageSrc: 'assets/foto2.jpg',
      thumbnailImageSrc: 'assets/foto2.jpg',
      alt: 'Desc2',
      title: 'Title2',
    },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private personHttpService: PersonHttpService
  ) {}
  ngOnDestroy(): void {
    if (this.paramRouteSub !== undefined) {
      this.paramRouteSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.paramRouteSub = this.activatedRoute.params.subscribe((params) => {
      this.personId = params.id;
      this.getPeopleById(this.personId);
    });
  }

  getPeopleById(id: number) {
    this.personHttpService.getPeopleById(id).subscribe((src) => {
      this.person = src;
    }, (error) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'Nie udane pobranie z bazy',
      });
    });

  }

  showDialog() {
    this.displayIfClientIsLostPerson = !this.displayIfClientIsLostPerson;
  }

  showDialogToAddPhoto() {
    this.displayToAddPhoto = true;
  }

  showDialogToUpdate() {
    this.displayIfClientUpdate = true;
  }

  back() {
    this.location.back();
  }

  actualAge(yearOfBirth: number): number {
    let actualYear = new Date().getFullYear();
    let actualAge = actualYear - yearOfBirth;
    return actualAge;
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
        this.displayIfClientIsLostPerson = false;
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
        this.displayIfClientIsLostPerson = false;
      },
    });
  }
}
