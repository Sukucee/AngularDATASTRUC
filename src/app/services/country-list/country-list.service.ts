import { Injectable } from '@angular/core';
import CountryList from '../../Database/CountryList';
@Injectable({
  providedIn: 'root'
})
export class CountryListService {
  private country: CountryList[]=[];

  addCountry(name: string, continent: string, capital: string):void{
    this.country.push({
      name:name,
      continent:continent,
      capital:capital
    });
  }
  getCountry():CountryList[]{
    return this.country;
  }
  constructor() { }
}
