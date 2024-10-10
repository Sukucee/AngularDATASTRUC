import { Injectable } from '@angular/core';
import VegetableList from '../../Database/VegetableList';
@Injectable({
  providedIn: 'root'
})
export class VegetableListService {
  private vegie: VegetableList[]=[];

  addVegie(name: string, color: string, status: string, price: number):void
  {this.vegie.push({
    name: name,
    color: color,
    status: status,
    price:price
  });

}
  getVegie():VegetableList[]
  {return this.vegie;}
  constructor() { }
}
