import { Injectable } from '@angular/core';
import SoftwareList from '../../Database/SoftwareList';
@Injectable({
  providedIn: 'root'
})
export class SoftwareListService {
  private software: SoftwareList[]=[];

  addSoftware(name: string, type: string, price: number ):void
  {this.software.push({
    name:name,
    type:type,
    price:price
  });
}
  getSoftware():SoftwareList[]{
    return this.software;
  }
  constructor() { }
}
