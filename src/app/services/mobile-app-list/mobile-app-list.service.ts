import { Injectable } from '@angular/core';
import MobileAppList from '../../Database/MobileAppList';
@Injectable({
  providedIn: 'root'
})
export class MobileAppListService {
  private mobileapp: MobileAppList[]=[];

  addMobileApp(title: string, genre: string, rating: number ):void
  {this.mobileapp.push({
    title:title,
    genre:genre,
    rating:rating
  });
}
  getMobileApp():MobileAppList[]
  {return this.mobileapp;}
  constructor() { }
}
