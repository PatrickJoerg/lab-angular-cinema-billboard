import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [MovieService]
})
export class MyMovieComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieList: MovieService) { }
     movieId: number;
     movie: Object;


  ngOnInit() {
        this.route.params
        .subscribe((params) => this.movieId = params['id']);
        this.movie = this.movieList.movies[this.movieId - 1];
      }

}

