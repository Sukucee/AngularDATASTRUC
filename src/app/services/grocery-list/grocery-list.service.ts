import { Injectable } from '@angular/core';
import GroceryList from '../../Database/GroceryList';
@Injectable({
  providedIn: 'root'
})
export class GroceryListService {
  private grocery: GroceryList[]=[]

  addGrocery(name: string, type: string, price: number):void
  {this.grocery.push({
    name:name,
    type:type,
    price:price
  });
}
  getGrocery(): GroceryList[]{
    return this.grocery;
  }
  constructor() { }
}
