import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureValues } from '../enums/temperature.enums';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, ...args: TemperatureValues[]): unknown {
    let finalValue = value;
    if (args[0].toString() === TemperatureValues.F){
      finalValue = (value * (9/5)) + 32;
    }
    return `${finalValue} °${args[0]}`;
  }

}
