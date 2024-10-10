import { Injectable } from '@angular/core';
import PodcastList from '../../Database/PodcastList';
@Injectable({
  providedIn: 'root'
})
export class PodcastListService {
  private podcast: PodcastList[]=[];

  addPodcast(title: string, host: string, genre: string, desc: string):void
  {this.podcast.push({
    title:title,
    host:host,
    genre:genre,
    desc:desc
  });
}
  getPodcast():PodcastList[]{
    return this.podcast;
  }
  constructor() { }
}
