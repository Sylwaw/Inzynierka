import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  display1 = false;

  tmpListSelectedItems: ChoiceList[] = [];

  selectedValueEyes: ChoiceList;
  selectedValueHeightMin: ChoiceList;
  selectedValueHeightMax: ChoiceList;
  selectedValueWeightMin: ChoiceList;
  selectedValueWeightMax: ChoiceList;
  selectedFeatures: ChoiceList[];
  // tablica z opisami poszczególnych wybranych szczegółów wyglądu
  selectedFeaturesDescriptions: SelectedFeaturesDescriptions[] = [];


  constructor(private router: Router, private messageService: MessageService) { }

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
      { viewValue: 'Tatuaże', value: 1 },
      { viewValue: 'Blizny', value: 2 },
      { viewValue: 'Ubiór', value: 3 },
      { viewValue: 'Opis innych cech', value: 4 },
    ];
  }

  prevPage() {
    this.router.navigateByUrl('/add/photo');
  }

  confirm(){
    this.router.navigateByUrl('/main');
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

  showDialog1() {
    this.display1 = true;
  }

  hideDialog1() {
    this.display1 = false;
  }

  // dodawanie opisów poszczególnych cech, usuwanie z listy
  addFeatureDescription(values: ChoiceList[]) {
    if (this.tmpListSelectedItems.length < values.length) {
      const choice = values[values.length - 1];
      this.selectedFeaturesDescriptions.push({ value: choice.value, description: '', label: choice.viewValue });
    }
    else {
      let choiceList: string;
      for (let i = 0; i < this.tmpListSelectedItems.length; i++) {
        const obj = values.find(s => s.viewValue === this.tmpListSelectedItems[i].viewValue);

        if (!obj) {
          choiceList = this.tmpListSelectedItems[i].viewValue;
          break;
        }
      }

      if (choiceList) {
        const index = this.selectedFeaturesDescriptions.findIndex(s => s.label === choiceList);

        if (index > -1) {
          const form = document.getElementById(this.selectedFeaturesDescriptions[index].value.toString());
          this.selectedFeaturesDescriptions.slice(index, 1);
          form.remove();
        }

      }
    }

    this.tmpListSelectedItems = values;
  }

}
