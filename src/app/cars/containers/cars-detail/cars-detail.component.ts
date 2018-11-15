import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css'],
})
export class CarsDetailComponent implements OnInit {

  car: any;

  constructor(private service: CarsService,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const carName = this.route.snapshot.params.carName;
    this.car = this.service.getCarByName(carName);
  }

}
