import { Component } from '@angular/core';
import TVShowList from '../Database/TVShowList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tvshow-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.css'
})
export class TVShowListComponent {
  show: TVShowList[] = [];
	
	title: string = '';
  genre: string = '';
	year: number = 0;

	addShow(): void {
		this.show.push({
			title: this.title,
      genre: this.genre,
			year: this.year,
		});

		this.year = 0;
		this.genre = '';
		this.title = '';
}
}
