import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

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
  movies: any[];

  constructor(private router: Router, private movieService: MovieService) { }


  ngOnInit(){
   this.movieService.getMovies().subscribe( newList => {
      this.movies = newList;
    });
  }

}
