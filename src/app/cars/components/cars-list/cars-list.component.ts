import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  @Input() cars = [];
  constructor() { }

  ngOnInit() {
  }

}
