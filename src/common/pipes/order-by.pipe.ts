import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], args: { column: string, order: 'desc' | 'asc' }): any {
    console.log(args);
    if (!args.column || !args.order) {
      return value;
    }
   const val = value.sort((a, b) => {
      if (args.order === 'desc') {
        return a[args.column] < b[args.column] ? 1 : -1;
      }
      return a[args.column] > b[args.column] ? 1 : -1;
    });
    return val;
  }

}
