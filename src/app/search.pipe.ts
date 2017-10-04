import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(movies: any, filter: any, isAnd: boolean): any {
     if (filter && Array.isArray(movies)) {
       let filterKeys = Object.keys(filter);
       if (isAnd) {
         return movies.filter(item =>
             filterKeys.reduce((memo, keyName) =>
                 (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
       } else {
         return movies.filter(item => {
           return filterKeys.some((keyName) => {
             return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === "";
           });
         });
       }
     } else {
       return movies;
     }
   }
 }
