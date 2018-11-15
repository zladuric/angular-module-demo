import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertFromPounds',
})
export class ConvertFromPoundsPipe implements PipeTransform {
  transform(oldValue: number): number {
    return Math.round(oldValue * 0.453592);
  }
}
