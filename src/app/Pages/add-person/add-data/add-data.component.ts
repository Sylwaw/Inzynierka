import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { Router } from '@angular/router';
import { NGB_DATEPICKER_18N_FACTORY } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n';

export interface PersonalInformation {
  firstname?: string;
  lastname?: string;
  secondName?: string;
  birthDate?: number;
}

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent implements OnInit {
  // constructor(private router: Router) {}
  // date1: Date;
  // value:Date;
  // ngOnInit(): void {
  //   // this.router.navigate();
  // }
  personalInformation: PersonalInformation = {};

    submitted = false;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    nextPage() {
        // tslint:disable-next-line: max-line-length
        if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.birthDate && this.personalInformation.secondName) {
            this.router.navigate(['add/photo']);
            return;
        }

        this.submitted = true;
    }
}
