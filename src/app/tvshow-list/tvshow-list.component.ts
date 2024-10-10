import { Component } from '@angular/core';
import TVShowList from '../Database/TVShowList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TvshowListService } from '../services/tvshow-list/tvshow-list.service';

@Component({
  selector: 'app-tvshow-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.css'
})
export class TVShowListComponent {
  show= [] as TVShowList[];
  constructor(private tvshowService: TvshowListService)
  {this.show=this.tvshowService.getTVShow();}
	
	title: string = '';
  	genre: string = '';
	year: number = 0;

	addShow(): void {
		this.tvshowService.addTVShow(
			this.title,
      		this.genre,
			this.year,
		);

		this.year = 0;
		this.genre = '';
		this.title = '';
}
}
