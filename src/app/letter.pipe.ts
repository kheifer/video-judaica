import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie.model';

@Pipe({
  name: 'letter'
})
export class LetterPipe implements PipeTransform {
  transform(movies: any, filter: any): any {
      if (filter && Array.isArray(movies)) {
          let filterKeys = Object.keys(filter);
          return movies.filter(movie =>
              filterKeys.reduce((memo, keyName) =>
                  (memo && new RegExp(filter[keyName], 'gi').test(movie[keyName])) || filter[keyName] === "", true));
      } else {
          return movies;
      }
    }

}
