import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IPersonCard } from 'src/app/Models/IPersonCard';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { PersonHttpService } from '../../../Services/person/person-http.service';
import { IPersonDetails } from 'src/app/Models/IPersonDetails';
import { IPersonUpdate } from 'src/app/Models/IPersonUpdate';
import { IPhoto } from 'src/app/Models/IPhoto';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

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
  city: string = '';
  riskDescription: string = '';
  otherDetails: string = '';
  isAtRisk: boolean = false;
  photoNames: string[] = [];
  personToUpdate: IPersonUpdate = {
    city: '',
    isAtRisk: null,
    riskDescription: '',
    otherDetails: '',
    isWaiting: null,
  };
  base64photo: string;
  photos: string[] = [];


  images: IPhoto[] = [];

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
    private personHttpService: PersonHttpService,
    private router: Router,
    private sanitization:DomSanitizer
  ) {}
  ngOnDestroy(): void {
    if (this.paramRouteSub !== undefined) {
      this.paramRouteSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.paramRouteSub = this.activatedRoute.params.subscribe((params) => {
      this.personId = parseInt(params.id);
      this.getPeopleById(this.personId);
    });
  }

  getPeopleById(id: number) {
    this.personHttpService.getPeopleById(id).subscribe((src) => {
      this.person = src;
      this.getPersonPhotoList();
      this.getPhotoList();
    }, (error) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'Nie udane pobranie z bazy',
      });
    });

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
        // this.photos.push(src);
        this.images.push({alt:name,previewImageSrc:src,thumbnailImageSrc:src,title:name});
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

  updatePerson(){
    if(this.person.dangerOfLife != true){
      this.personToUpdate.isAtRisk = this.isAtRisk;
    }
    else{
      this.personToUpdate.isAtRisk = this.person.dangerOfLife;
    }
    this.personToUpdate.isWaiting = true;
    if(this.city != ''){
      this.personToUpdate.city = this.city;
    }
    else{
      this.personToUpdate.city = this.person.city;
    }
    if(this.riskDescription != ''){
      this.personToUpdate.riskDescription = this.riskDescription;
    }
    else{
      this.personToUpdate.riskDescription = this.person.description;
    }
    if(this.otherDetails != ''){
      this.personToUpdate.otherDetails = this.otherDetails;
    }

    this.putPerson(this.person.id);
  }

  getPersonPhotoList() {
    this.person.pictures.forEach(s =>  {
      // this.images.push({
      //   previewImageSrc: this.sanitization.bypassSecurityTrustUrl("assets/" + s),
      //   alt: s,
      //   thumbnailImageSrc: this.sanitization.bypassSecurityTrustUrl("assets/" + s),
      //   title: s,
      // });
    })
  }

  getPhotoList() {
    this.person.pictures.forEach(s => {
        this.getPhoto(s);
    })
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

  waitingPerson(){
    this.person.isWaiting = true;
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Jesteś pewien, że powierdzasz informacje?',
      header: 'Potwierdź',
      icon: 'pi pi-exclamation-triangle',
      key: 'clientIsLostPerson',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Potwierdzono',
          detail: 'Zaakceptowano',
        });
        this.updatePerson();
        this.router.navigateByUrl('/main');

      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Nie potwierdzono',
          detail: 'Nie potwierdziłeś',
        });
        this.displayIfClientIsLostPerson = false;
      },
    });
  }

  confirm2() {
    this.confirmationService.confirm({
        message: 'Jesteś pewien, ze potwierdzasz informacje?',
        header: 'Potwierdź',
        icon: 'pi pi-info-circle',
        key: 'updatePerson',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
            this.updatePerson();
            this.router.navigateByUrl('/main');
        },
        reject: (type) => {
          this.messageService.add({
            severity: 'info',
            summary: 'Nie potwierdzono',
            detail: 'Nie potwierdziłeś',
          });
          this.displayIfClientUpdate = false;
        }
      }
    );

    }

}
