import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeRepeatedFromList',
    standalone: true,
})
export class RemoveRepeatedFromListPipe implements PipeTransform {
  transform(array: Array<any>): Array<any> {
    return array.filter((value, index, self) => {
      const isObject = typeof value === 'object';
      if (isObject) {
        return !self
          .slice(index + 1)
          .some((other) => JSON.stringify(other) === JSON.stringify(value));
      } else {
        return self.indexOf(value) === index;
      }
    });
  }
}
