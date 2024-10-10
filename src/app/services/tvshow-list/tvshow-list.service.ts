import { Injectable } from '@angular/core';
import TVShowList from '../../Database/TVShowList';
@Injectable({
  providedIn: 'root'
})
export class TvshowListService {
  private tvshow: TVShowList[]=[];

  addTVShow(title: string, genre: string, year: number):void
  {this.tvshow.push({
    title: title,
    genre: genre,
    year: year
  });
}
  getTVShow(): TVShowList[]{
    return this.tvshow;
  }
  constructor() { }
}
