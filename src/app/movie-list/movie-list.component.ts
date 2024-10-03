import { Component } from '@angular/core';
import MovieList from '../Database/MovieList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movie: MovieList[] = [];
	id: string = '';
	title: string = '';
  genre: string = '';
	year: number = 0;

	addMovies(): void {
		this.movie.push({
			id: this.id,
			title: this.title,
      genre: this.genre,
			year: this.year,
		});

		this.year = 0;
		this.genre = '';
		this.id = '';
		this.title = '';
}
}
