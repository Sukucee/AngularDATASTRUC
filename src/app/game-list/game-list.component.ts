import { Component } from '@angular/core';
import GameList from '../Database/GameList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameListService } from '../services/game-list/game-list.service';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  GameList=[] as GameList [];
  constructor (private gamelistService: GameListService)
  {this.GameList=this.gamelistService.getGames();}

	name: string = '';
  type: string = '';
  genre: string = '';
  availability: string = '';

	addGame(): void {
		this.gamelistService.addGames(
		   this.name,
       this.type,
       this.genre,
       this.availability,
		);

		this.name = '';
    this.type = '';
    this.genre = '';
    this.availability = '';
}
}
