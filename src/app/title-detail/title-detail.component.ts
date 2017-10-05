import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-title-detail',
  templateUrl: './title-detail.component.html',
  styleUrls: ['./title-detail.component.css'],
  providers: [MovieService]
})
export class TitleDetailComponent implements OnInit {
  movieId: string;
  movieToDisplay;
  constructor(private route: ActivatedRoute, private Location, private movieService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.movieId = urlParameters['id'];
    });
    this.movieService.getMovieById(this.movieId).subscribe(dataLastEmittedFromObserver => {
      this.movieToDisplay = new Movie(dataLastEmittedFromObserver.title,
                                        dataLastEmittedFromObserver.runtime,
                                        dataLastEmittedFromObserver.rating,
                                        dataLastEmittedFromObserver.language,
                                        dataLastEmittedFromObserver.genre,
                                        dataLastEmittedFromObserver.format,
                                        dataLastEmittedFromObserver.availability,
                                        dataLastEmittedFromObserver.deposit,
                                        dataLastEmittedFromObserver.imdb,
                                        dataLastEmittedFromObserver.restriction)
    })
  }


}
