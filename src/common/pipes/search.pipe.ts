import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], query: { search: string, searchIn: string[] }): any {
    if (!query.search) {
      return value;
    }
    return value.filter((item: any) => {
      for (let i = 0; i < query.searchIn.length; i++) {
        if (('' + item[query.searchIn[i]]).indexOf(query.search) > -1) {
          return true;
        }
      }
      return false;
    });
  }
}
