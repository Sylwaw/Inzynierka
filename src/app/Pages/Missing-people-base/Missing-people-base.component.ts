import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Missing-people-base',
  templateUrl: './Missing-people-base.component.html',
  styleUrls: ['./Missing-people-base.component.scss'],
})
export class MissingPeopleBaseComponent implements OnInit {
  constructor(private router: Router) {}
  // czekaj musze poszukac jak sie ten modul nazywal:D
  ngOnInit() {}

  openTabDatabase() {
    this.router.navigateByUrl('/database');
  }
}
