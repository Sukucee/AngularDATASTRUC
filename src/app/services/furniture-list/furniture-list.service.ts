import { Injectable } from '@angular/core';
import FurnitureList from '../../Database/FurnitureList';
@Injectable({
  providedIn: 'root'
})
export class FurnitureListService {
  private furniture: FurnitureList[]=[]

  addFurniture(name: string, material: string, price: number):void
  {this.furniture.push({
    name:name,
    material:material,
    price:price
  });
}
  getFurniture():FurnitureList[]{
    return this.furniture;
  }
  constructor() { }
}
