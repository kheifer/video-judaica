import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css'],
  providers: [MovieService]
})
export class TitleListComponent implements OnInit {
  currentRoute: string = this.router.url;
  movies: FirebaseListObservable<any[]>;
  @Output() editClickSender = new EventEmitter();

  constructor(private router: Router, private movieService: MovieService) { }


  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  editLinkClicked(movieToEdit: Movie){
    this.editClickSender.emit(movieToEdit);
  }

}
