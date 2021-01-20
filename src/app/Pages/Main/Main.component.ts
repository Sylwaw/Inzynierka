import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.scss']
})
export class MainComponent implements OnInit {
persons: Array<Person> = [{}, {}, {}];
  constructor() { }

  ngOnInit() {
  }

}
