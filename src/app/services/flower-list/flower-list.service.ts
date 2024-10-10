import { Injectable } from '@angular/core';
import FlowerList from '../../Database/FlowerList';
@Injectable({
  providedIn: 'root'
})
export class FlowerListService {
  private flower: FlowerList[]=[];

  addFlower(name: string, stock: string, price: number, color: string):void
  {this.flower.push({
    name:name,
    stock:stock,
    price:price,
    color:color
  });
}
  getFlower():FlowerList[]{
    return this.flower;
  }
  constructor() { }
}
