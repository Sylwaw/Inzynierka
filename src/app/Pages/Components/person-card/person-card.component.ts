import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Models/person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {


  @Input() person: Person; // Getting data from parent component

  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(this.person);
  }

}
