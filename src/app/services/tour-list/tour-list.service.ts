import { Injectable } from '@angular/core';
import TourList from '../../Database/TourList';
@Injectable({
  providedIn: 'root'
})
export class TourListService {
  private tour: TourList[]=[]

  addTour(destination: string, tourguide: string, fee: number):void
  {this.tour.push({
    destination:destination,
    tourguide:tourguide,
    fee:fee
  });
}
  getTour():TourList[]{
    return this.tour;
  }
  constructor() { }
}
