import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'darkModeAutomatic',
})
export class DarkModeAutomaticPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? 'bg-dark text-white': 'bg-white text-dark';
  }
}
