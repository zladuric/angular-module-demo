import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './containers/cars/cars.component';
import { CarsDetailComponent } from './containers/cars-detail/cars-detail.component';


const routes: Routes = [
  {
    path: '',
    component: CarsComponent,
  },
  {
    path: ':carName',
    component: CarsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {
}
