import { Injectable } from '@angular/core';
import InventoryList from '../../Database/InventoryList';
@Injectable({
  providedIn: 'root'
})
export class InventoryListService {
  private inventory: InventoryList[]=[];
  
  addInventory(name: string, type: string, quantity: number, price: number):void
  {this.inventory.push({
    name:name,
    type:type,
    quantity:quantity,
    price:price
  });
}
  getInventory():InventoryList[]{
    return this.inventory;
  }
  constructor() { }
}
