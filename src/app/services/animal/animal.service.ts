import { Injectable } from '@angular/core';
import AnimalList from '../../Database/AnimalList';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
private animal: AnimalList[]=[];
addAnimal(name: string, legs: number, wings: string, type: string): void {this.animal.push({
  name:name,
  legs:legs,
  wings:wings,
  type:type,
  });
}
getAnimal(): AnimalList[] {
  return this.animal;
}

  constructor() { }
}
