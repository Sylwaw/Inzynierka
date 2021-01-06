import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGB_DATEPICKER_18N_FACTORY } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent implements OnInit {
  constructor(private router: Router) {}
  date1: Date;
  value:Date;
  ngOnInit(): void {
    // this.router.navigate();
  }
}
