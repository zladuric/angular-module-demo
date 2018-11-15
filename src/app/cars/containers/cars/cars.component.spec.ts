import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsComponent } from './cars.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cars-table',
  template: 'mock cmp',
})
class TestComponent {
  @Input() cars;
}

fdescribe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarsComponent,
        TestComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
