import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface ChoiceList {
  viewValue: any;
  value: number;
}
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css'],
})
export class AddDetailsComponent implements OnInit {
  eyes: ChoiceList[];
  height: ChoiceList[];
  j = 1;

  selectedValue: ChoiceList;

  constructor(private router: Router) {}

  ngOnInit() {
    this.eyes = [
      { viewValue: 'Ciemne', value: 1 },
      { viewValue: 'Jasne', value: 2 },
    ];

    // tslint:disable-next-line: no-unused-expression
    this.height = [];
    for (let i = 50; i < 210; i++) {
      this.height.push({ viewValue: i, value: i });
    }
  }

  prevPage() {
    this.router.navigateByUrl('/add/photo');
  }
}
