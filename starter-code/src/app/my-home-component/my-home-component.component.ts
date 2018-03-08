import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MovieService]
})
export class MyHomeComponentComponent implements OnInit {

  constructor(private movieList: MovieService) { }

  ngOnInit() {
  }

}
