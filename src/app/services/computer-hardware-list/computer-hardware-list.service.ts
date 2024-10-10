import { Injectable } from '@angular/core';
import ComputerHardwareList from '../../Database/ComputerHardwareList';
@Injectable({
  providedIn: 'root'
})
export class ComputerHardwareListService {
private computerHardware: ComputerHardwareList[]=[];

addComputer(hardware: string, brand: string, price: number):void
{this.computerHardware.push({
  hardware:hardware,
  brand:brand,
  price:price,
});
}
getComputer():ComputerHardwareList[]{
 return this.computerHardware;
}
  constructor() { }
}
