import { Injectable } from '@angular/core';
import ArtistList from '../../Database/ArtistList';
@Injectable({
  providedIn: 'root'
})
export class ArtistListService {
  private artist: ArtistList[]=[];
  
  addArtist(name: string, style:string, work:string):void { this.artist.push({
    name:name,
    style:style,
    work:work,
  });
}
  getArtist():ArtistList[]{
    return this.artist;
  
}
constructor() { }
}
