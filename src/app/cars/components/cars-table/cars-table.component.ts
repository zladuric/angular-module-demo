import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css'],
})
export class CarsTableComponent implements OnInit {

  @Input() cars = [];

  @Input('renamedInputThingy') filterValue = '';

  constructor() {
  }

  ngOnInit() {
  }

  doSearch(value) {
    this.filterValue = value;
  }

}
