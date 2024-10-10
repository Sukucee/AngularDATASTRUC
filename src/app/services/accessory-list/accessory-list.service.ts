import { Injectable } from '@angular/core';
import AccessoryList from '../../Database/AccessoriesList';

@Injectable({
  providedIn: 'root'
})
export class AccessoryListService {
  private accessories: AccessoryList[]=[];

  constructor() { }

  addAccessory(type: string, description: string, material: string, price: number): void {this.accessories.push({
    type: type,
    description: description,
    material: material,
    price: price,
    });
  }
  getAccessories(): AccessoryList[] {
    return this.accessories;
  }


}

