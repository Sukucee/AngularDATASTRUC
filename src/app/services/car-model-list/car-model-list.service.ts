import { Injectable } from '@angular/core';
import CarModelList from '../../Database/CarModelList';
@Injectable({
  providedIn: 'root'
})
export class CarModelListService {
  private car: CarModelList[]=[];

  addCarModel(id: string, brand: string, model: string, year: number):void
  {this.car.push({
    id:id,
    brand:brand,
    model:model,
    year:year,  
  });
  }
  getCarModel(): CarModelList[]{
  return this.car;
  }
  constructor() { }
}
