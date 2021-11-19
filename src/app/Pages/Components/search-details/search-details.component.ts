import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  constructor() { }
  searchName = '';
  searchSurname = '';
  searchAge = null;
  searchHeightFrom = null;
  searchHeightTo = null;
  searchWeightFrom = null;
  searchWeightTo = null;
  searchEyeColor = '';
  searchHairColor = '';

  ngOnInit(): void {

  }

}
