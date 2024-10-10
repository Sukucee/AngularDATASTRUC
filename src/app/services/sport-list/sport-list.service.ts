import { Injectable } from '@angular/core';
import SportList from '../../Database/SportList';
@Injectable({
  providedIn: 'root'
})
export class SportListService {
  private Sport: SportList[]=[];

  addSport(sport: string, name: string, type: string, age: number):void
  {this.Sport.push({
    sport:sport,
    name:name,
    type:type,
    age:age
  });
}
  getSport():SportList[]{
    return this.Sport;
  }
  constructor() { }
}
