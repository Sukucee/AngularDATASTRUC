import { Injectable } from '@angular/core';
import LaptopSpecList from '../../Database/LaptopSpecList';
@Injectable({
  providedIn: 'root'
})
export class LaptopSpecsListService {
private specs: LaptopSpecList[]=[];

addLaptopSpecs(model: string, processor: string, memory: string ):void
{this.specs.push({
  model:model,
  processor:processor,
  memory:memory
});

}
  getLaptopSpecs():LaptopSpecList[]{
    return this.specs;
  }
  constructor() { }
}
