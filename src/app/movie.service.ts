import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MovieService {
  movies: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.movies = database.list('movies');
  }
  getProducts(){
    return this.movies;
  }

  addMovie(newMovie: Movie){
    this.movies.push(newMovie);
  }

  getMovieById(movieId: string){
    return this.database.object('movies/' + movieId);
  }

  // updateMovie(localUpdatedMovie){
  //   var projectEntryinFirebase = this.getMovieById
  // }
}
