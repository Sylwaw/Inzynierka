import { Component, OnInit } from '@angular/core';
import * as internal from 'events';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})


export class SearchDetailsComponent implements OnInit {


  searchName = '';
  searchSurname = '';
  searchAge = null;
  searchHeightFrom = null;
  searchHeightTo = null;
  searchWeightFrom = null;
  searchWeightTo = null;
  searchEyeColor = '';
  searchHairColor = '';
  eyes = [];

  constructor() {

    this.eyes = ['zielone', 'czerwone', 'czarne'];
  }






  ngOnInit(): void {



  }

}
