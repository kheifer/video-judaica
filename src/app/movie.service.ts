import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MovieService {
  movies: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.movies = database.list('video-judaica');
  }
  getMovies(){
    return this.movies;
  }
}
