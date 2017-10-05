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

  addMovie(newMovie: Movie){
    this.movies.push(newMovie);
  }

  getMovieById(movieId: string){
    return this.database.object('video-judaica/' + movieId);
  }

  updateMovie(localUpdatedMovie){
    var projectEntryinFirebase = this.getMovieById(localUpdatedMovie.$key);
    projectEntryinFirebase.update({title: localUpdatedMovie.title,
    runtime: localUpdatedMovie.runtime,
    rating: localUpdatedMovie.rating,
    language: localUpdatedMovie.language,
    genre: localUpdatedMovie.genre,
    format: localUpdatedMovie.format,
    deposit: localUpdatedMovie.deposit,
    imdb: localUpdatedMovie.imdb,
    restriction: localUpdatedMovie.restriction,
    availability: localUpdatedMovie.availability});
  }

  readyEdit(movieToEdit: Movie){

  }
}
