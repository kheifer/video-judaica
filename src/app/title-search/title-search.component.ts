import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-search',
  templateUrl: './title-search.component.html',
  styleUrls: ['./title-search.component.css'],
  providers: [MovieService]
})
export class TitleSearchComponent implements OnInit {
  movies;
  startAt = new Subject()
  endAt = new Subject()
  public filterText: string;
 public filterPlaceholder: string;
 public filterInput = new FormControl();


  constructor(private movieService: MovieService) { }


  ngOnInit() {
    this.filterText = "";
    this.filterPlaceholder = "Filter..";

    this.movieService.searchMovies(this.startAt, this.endAt)
                  .subscribe(movies => this.movies = movies)
  }
  search($event) {
      let query = $event.target.value
      this.startAt.next(query)
      this.endAt.next(query+"\uf8ff")
  }
}
