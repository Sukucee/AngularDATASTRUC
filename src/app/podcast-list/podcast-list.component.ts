import { Component } from '@angular/core';
import PodcastList from '../Database/PodcastList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-podcast-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  podcast: PodcastList[] = [];
	title: string = '';
  host: string = '';
  genre: string = '';
  desc: string = '';

	addNaThis(): void {
		this.podcast.push({
			title:this.title,
      host:this.host,
      genre:this.genre,
      desc:this.desc,
		});
    this.title = '';
		this.host = '';
    this.genre = '';
		this.desc = '';
	}
}
