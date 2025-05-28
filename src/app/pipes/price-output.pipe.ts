import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceOutput'
})
export class PriceOutputPipe implements PipeTransform {

  transform(value: number): string {
    return value.toFixed(2).replace('.', ',');
  }
}
