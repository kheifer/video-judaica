import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie.model';

@Pipe({
  name: 'letter'
})
export class LetterPipe implements PipeTransform {
  transform(movies: any, searchWord: any): any {
      if (searchWord && Array.isArray(movies)) {
          let searchKeys = Object.keys(searchWord);
          return movies.filter(movie =>
              searchKeys.reduce((bool, keyName) =>
                  (bool && new RegExp(searchWord[keyName], 'gi').test(movie[keyName])) || searchWord[keyName] === "", true));

      } else {
          return movies;
      }
    }

}
