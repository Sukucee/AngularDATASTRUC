import { Component } from '@angular/core';
import PodcastList from '../Database/PodcastList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PodcastListService } from '../services/podcast-list/podcast-list.service';

@Component({
  selector: 'app-podcast-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  podcast=[] as PodcastList [];
  constructor(private podcastService:PodcastListService)
  {this.podcast=this.podcastService.getPodcast();}
	title: string = '';
  host: string = '';
  genre: string = '';
  desc: string = '';

	addNaThis(): void {
		this.podcastService.addPodcast(
			this.title,
      this.host,
      this.genre,
      this.desc,
		);
    this.title = '';
		this.host = '';
    this.genre = '';
		this.desc = '';
	}
}
