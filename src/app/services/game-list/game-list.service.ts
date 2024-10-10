import { Injectable } from '@angular/core';
import GameList from '../../Database/GameList';
@Injectable({
  providedIn: 'root'
})
export class GameListService {
  private games: GameList[]=[];

  addGames(name: string, type: string, genre: string, availability: string):void
  {this.games.push({
    name:name,
    type:type,
    genre:genre,
    availability:availability
  });
}
  getGames():GameList[]{
    return this.games;
  }
  constructor() { }
}
