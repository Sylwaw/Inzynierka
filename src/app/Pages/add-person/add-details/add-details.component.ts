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
  features: ChoiceList[];
  j = 1;
  // wartość true/false dla checkboxa
  boolValue = false;
  explainAlert: string;
  display = false;

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

    this.features = [
      {viewValue: 'Włosy', value: 1},
      {viewValue: 'Nos', value: 2},
      {viewValue: 'Uzębienie', value: 3},
      {viewValue: 'Ręce', value: 4},
      {viewValue: 'Sylwetka', value: 5},
      {viewValue: 'Twarz', value: 6},
      {viewValue: 'Ramiona', value: 7},
      {viewValue: 'Szyja', value: 8},
      {viewValue: 'Nogi', value: 9}
  ];
  }

  prevPage() {
    this.router.navigateByUrl('/add/photo');
  }

  switchValue(boolVal: boolean) {
    boolVal = !boolVal;
  }

  showDialog() {
    this.display = true;
  }

  hideDialog() {
    this.display = false;
  }
}
