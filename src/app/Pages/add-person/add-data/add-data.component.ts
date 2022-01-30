import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { Router } from '@angular/router';
import { NGB_DATEPICKER_18N_FACTORY } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n';
import { IPersonDetails } from 'src/app/Models/IPersonDetails';


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
  personDetails: IPersonDetails = {};

  submitted = false;
  today = new Date;

  ngOnInit() {}

  nextPage() {
    // tslint:disable-next-line: max-line-length
    if (
      this.personDetails.name &&
      this.personDetails.surname &&
      this.personDetails.yearOfBirth &&
      this.personDetails.city &&
      this.personDetails.dateOfDissapear
    ) {
      this.router.navigateByUrl('/add/photo');
      return;
    }
    this.submitted = true;
  }





}
