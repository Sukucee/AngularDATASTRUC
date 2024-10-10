import { Injectable } from '@angular/core';
import StationeryList from '../../Database/StationeryList';
@Injectable({
  providedIn: 'root'
})
export class StationeryListService {
  private Stationary: StationeryList[]=[];

  addStationary(name: string, quantity: number, price: number):void
  {this.Stationary.push({
      name:name,
      quantity:quantity,
      price:price
  });
}
  getStationary():StationeryList[]{
    return this.Stationary;
  }
  constructor() { }
}
