// libs
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// module
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './containers/cars/cars.component';
import { CarsTableComponent } from './components/cars-table/cars-table.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarsDetailComponent } from './containers/cars-detail/cars-detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ConvertFromPoundsPipe } from './pipes/convertFromPoundsPipe';
import { HttpClientModule } from '@angular/common/http';

// app

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CarsRoutingModule,
  ],
  declarations: [CarsComponent, CarsTableComponent, CarsListComponent, CarsDetailComponent, FilterPipe, ConvertFromPoundsPipe],
})
export class CarsModule {
}
