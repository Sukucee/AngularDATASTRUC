import { Injectable } from '@angular/core';
import LaptopList from '../../Database/LaptopList';
@Injectable({
  providedIn: 'root'
})
export class LaptopListService {
  private laptop: LaptopList[]=[];

  addLaptop(model: string, price: number):void
  {this.laptop.push({
    model:model,
    price:price,
  });
}
  getLaptop():LaptopList[]{
    return this.laptop;
  }
  constructor() { }
}
