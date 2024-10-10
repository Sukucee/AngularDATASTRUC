import { Injectable } from '@angular/core';
import MusicPlaylist from '../../Database/MusicPlaylist';
@Injectable({
  providedIn: 'root'
})
export class MusicListService {
  private music: MusicPlaylist[]=[];

  addMusic(title: string, artist: string):void
  {this.music.push({
    title:title,
    artist:artist
  });
}
  getMusic():MusicPlaylist[]{
    return this.music;
  }
  constructor() { }
}
