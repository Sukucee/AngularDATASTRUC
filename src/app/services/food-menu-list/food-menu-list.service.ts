import { Injectable } from '@angular/core';
import FoodMenuList from '../../Database/FoodMenuList';
@Injectable({
  providedIn: 'root'
})
export class FoodMenuListService {
  private food: FoodMenuList[]=[];
  
  addFoodMenu(name: string, type: string, price: number):void
  {this.food.push({
    name:name,
    type:type,
    price:price
  })
}
  getFoodMenu():FoodMenuList[]{
    return this.food;
  }
  constructor() { }
}
