/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MissingPeopleBaseComponent } from './Missing-people-base.component';

describe('MissingPeopleBaseComponent', () => {
  let component: MissingPeopleBaseComponent;
  let fixture: ComponentFixture<MissingPeopleBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingPeopleBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPeopleBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
