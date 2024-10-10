import { Injectable } from '@angular/core';
import DestinationList from '../../Database/DestinationList';

@Injectable({
  providedIn: 'root'
})
export class DestinationListService {
  private destination: DestinationList[]=[];

  addDestination(destination: string, country: string, price: number ):void{
    this.destination.push({
      destination: destination,
      country: country,
      price:price
    });
  }
  getDestination():DestinationList[]{
    return this.destination;
  }

  constructor() { }
}
