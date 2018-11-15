import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(cars: any[], filterValue?: any): any[] {
    if (!filterValue) {
      return cars;
    }
    return cars.filter(car => car.Name.indexOf(filterValue) > -1);
  }

}
