import { Component } from '@angular/core';
import GameList from '../Database/GameList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  Game: GameList[] = [];
	name: string = '';
  type: string = '';
  genre: string = '';
  availability: string = '';

	addGame(): void {
		this.Game.push({
			name: this.name,
      type: this.type,
      genre: this.genre,
      availability:this.availability,
		});

		this.name = '';
    this.type = '';
    this.genre = '';
    this.availability = '';
}
}
