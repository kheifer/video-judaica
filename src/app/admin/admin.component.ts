import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MovieService]
})
export class AdminComponent implements OnInit {

  selectedMovie = null;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  newItemForm(title: string, runtime: string, rating: string, language: string, genre: string, format: string, deposit: string, imdb: string, restriction: string){
    var newMovie: Movie = new Movie (title, runtime, rating, language, genre, format, deposit, imdb, restriction);
    this.movieService.addMovie(newMovie);
  }

  editMovie(clickedMovie){
    this.selectedMovie = clickedMovie;
  }

  finishedEditing(){
    this.selectedMovie = null;
  }

}
