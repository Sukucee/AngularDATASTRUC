import { Component } from '@angular/core';
import MovieList from '../Database/MovieList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieListService } from '../services/movie-list/movie-list.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movie = [] as MovieList [];
  constructor(private movieService: MovieListService)
  {this.movie=this.movieService.getMovies();}

	id: string = '';
	title: string = '';
  	genre: string = '';
	year: number = 0;

	addMovies(): void {
		this.movieService.addMovies(
			this.id,
			this.title,
      		this.genre,
			this.year,
		);

		this.year = 0;
		this.genre = '';
		this.id = '';
		this.title = '';
}
}
