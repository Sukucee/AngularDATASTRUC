import { Component } from '@angular/core';
import ArtistList from '../Database/ArtistList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtistListService } from '../services/artist-list/artist-list.service';

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  ArtistList= [] as ArtistList[];
  constructor(private artistService: ArtistListService){
	this.ArtistList = this.artistService.getArtist();
  }

  name: string = '';
  style: string = '';
  work: string = '';

	addArt(): void {
		this.artistService.addArtist(
		this.name,
		this.style,
      	this.work,
		);

    	this.work = '';
		this.name = '';
		this.style = '';
	}
}
