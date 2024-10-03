import { Component } from '@angular/core';
import MusicPlaylist from '../Database/MusicPlaylist';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-music-playlist',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './music-playlist.component.html',
  styleUrl: './music-playlist.component.css'
})
export class MusicPlaylistComponent {
  songs: MusicPlaylist[] = [];
	title: string = '';
	artist: string = '';

	addMusic(): void {
		this.songs.push({
			title: this.title,
			artist: this.artist,
		});

		this.title = '';
		this.artist = '';
	}
}
