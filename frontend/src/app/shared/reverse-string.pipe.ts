import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  /**
   * This pipe was create just for practice purpose
   */
  transform(value: string, ...args: any[]): any {
    return value.split('').reverse().join('');
  }

}
