import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

  @Injectable()
  export class MovieService {
    movies: FirebaseListObservable<any[]>;

    constructor(private database: AngularFireDatabase) {
    }



    getMovies():FirebaseListObservable<any[]> {
      return this.database.list('video-judaica');
    }


    searchMovies(start, end): FirebaseListObservable<any> {
      return this.database.list('/video-judaica', {
        query: {
          orderByChild: 'title',
          limitToFirst: 10,
          startAt: start,
          endAt: end
        }
      });
    }

}
