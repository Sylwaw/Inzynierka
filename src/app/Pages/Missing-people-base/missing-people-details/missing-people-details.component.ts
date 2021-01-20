import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Person } from 'src/app/Models/person';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import {PersonHttpService} from '../../../Services/person/person-http.service';

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
  person: Person;

  display = false;
  paramRouteSub: Subscription;

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
      const personId = +params.id;
      this.getPersonById(personId);
    });
  }

  getPersonById(id: number) {
    this.personHttpService.getPersonById(id).subscribe((src) => {
      this.person = src;
    }, (error) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'Nie udane pobranie ludzia:D z bazy',
      });
    });
  }

  showDialog() {
    this.display = !this.display;
  }

  back() {
    this.location.back();
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
        this.display = false;
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
  }
}
