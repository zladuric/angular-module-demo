import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { SearchService } from '../../../core/search/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit, OnDestroy {

  cars;

  private subs: Subscription[] = [];

  constructor(private carsService: CarsService,
              private search: SearchService) {
  }

  ngOnInit() {
    this.cars = this.carsService.getCars();
    const sub = this.search.filter$.subscribe(
      value => this.doSearch(value),
    );

    this.subs.push(sub);
  }

  ngOnDestroy() {
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
  }

  doSearch(val) {
    this.cars = this.carsService.getCars().filter(car => car.Name.indexOf(val) > -1);
  }

}
