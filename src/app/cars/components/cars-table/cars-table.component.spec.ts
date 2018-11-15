import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsTableComponent } from './cars-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CarsTableComponent', () => {
  let component: CarsTableComponent;
  let fixture: ComponentFixture<CarsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarsTableComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do show 2 cars in the table', function () {
    component.cars = [
      {Name: 'bmw'},
      {Name: 'das auto'},
    ];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('tbody tr').length).toEqual(2);
  });
});
