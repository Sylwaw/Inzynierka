import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { Router } from '@angular/router';
import { NGB_DATEPICKER_18N_FACTORY } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n';

export interface PersonalInformation {
  firstname?: string;
  lastname?: string;
  secondName?: string;
  birthDate?: number;
  lastPlace?: string;
  lostDate?: Date;
}



export interface ChoiceList {
  viewValue: any;
  value: number;
}

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent implements OnInit {

  constructor(private router: Router) {}
  personalInformation: PersonalInformation = {};

  submitted = false;
  today = new Date;

  ngOnInit() {}

  nextPage() {
    // tslint:disable-next-line: max-line-length
    if (
      this.personalInformation.firstname &&
      this.personalInformation.lastname &&
      this.personalInformation.birthDate &&
      this.personalInformation.lastPlace &&
      this.personalInformation.lostDate
    ) {
      this.router.navigateByUrl('/add/photo');
      return;
    }
    this.submitted = true;
  }





}
