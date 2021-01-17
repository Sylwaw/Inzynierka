import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';

export interface ChoiceList {
  viewValue: any;
  value: number;
}

export interface SelectedFeaturesDescriptions {
  value: number;
  description?: string;
  label?: string;
}

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css'],
})
export class AddDetailsComponent implements OnInit {
  eyes: ChoiceList[];
  heightMin: ChoiceList[];
  heightMax: ChoiceList[];
  weightMin: ChoiceList[];
  weightMax: ChoiceList[];
  features: ChoiceList[];
  // wartość true/false dla checkboxa
  boolValue = false;
  explainAlert: string;
  display = false;

  selectedValueEyes: ChoiceList;
  selectedValueHeightMin: ChoiceList;
  selectedValueHeightMax: ChoiceList;
  selectedValueWeightMin: ChoiceList;
  selectedValueWeightMax: ChoiceList;
  selectedFeatures: ChoiceList[];
  // tablica z opisami poszczególnych wybranych szczegółów wyglądu
  selectedFeaturesDescriptions: SelectedFeaturesDescriptions[] = [];


  constructor(private router: Router) {}

  ngOnInit() {
    this.eyes = [
      { viewValue: 'Ciemne', value: 1 },
      { viewValue: 'Jasne', value: 2 },
      { viewValue: 'Brązowe', value: 3 },
      { viewValue: 'Niebieskie', value: 4 },
      { viewValue: 'Zielone', value: 5 },
      { viewValue: 'Szare', value: 6 },
    ];

    // tslint:disable-next-line: no-unused-expression
    this.heightMin = [];
    for (let i = 50; i < 210; i++) {
      this.heightMin.push({ viewValue: i + 'cm', value: i });
    }

    this.heightMax = [];
    for (let i = 50; i < 210; i++) {
      this.heightMax.push({ viewValue: i + 'cm', value: i });
    }

    this.weightMin = [];
    for (let i = 10; i < 200; i++) {
      this.weightMin.push({ viewValue: i + 'kg', value: i });
    }

    this.weightMax = [];
    for (let i = 10; i < 200; i++) {
      this.weightMax.push({ viewValue: i + 'kg', value: i });
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
      {viewValue: 'Nogi', value: 9},
      {viewValue: 'Ubiór', value: 10}
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

  addFeatureDescription(values: ChoiceList[]) {
    // musisz tez zrobic odejmowanie
    const choice = values[values.length - 1];
    this.selectedFeaturesDescriptions.push({ value: choice.value, description: '', label: choice.viewValue });
  }
}
