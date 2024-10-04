import { Component } from '@angular/core';
import ArtistList from '../Database/ArtistList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  artist: ArtistList[] = [];
	name: string = '';
	style: string = '';
  work: string = '';

	addArt(): void {
		this.artist.push({
			name: this.name,
			style: this.style,
      work:this.work,
		});
    this.work = '';
		this.name = '';
		this.style = '';
	}
}
