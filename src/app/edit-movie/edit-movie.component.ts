import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
  providers: [MovieService]
})
export class EditMovieComponent implements OnInit {

  @Input() childSelectedMovie: Movie;
  @Output() doneButtonClickSender = new EventEmitter();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  finishedMovie(movieToUpdate){
    this.movieService.updateMovie(movieToUpdate);
    this.doneButtonClickSender.emit();
  }

}
