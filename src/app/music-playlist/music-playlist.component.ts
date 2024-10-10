import { Component } from '@angular/core';
import MusicPlaylist from '../Database/MusicPlaylist';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicListService } from '../services/music-list/music-list.service';

@Component({
  selector: 'app-music-playlist',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './music-playlist.component.html',
  styleUrl: './music-playlist.component.css'
})
export class MusicPlaylistComponent {
  songs=[] as MusicPlaylist [];
  constructor (private musicService: MusicListService)
  {this.songs=musicService.getMusic();}

	title: string = '';
	artist: string = '';

	addMusic(): void {
		this.musicService.addMusic(
			this.title,
			this.artist,
		);

		this.title = '';
		this.artist = '';
	}
}
