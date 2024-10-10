import { Injectable } from '@angular/core';
import CityList from '../../Database/CityList';
@Injectable({
  providedIn: 'root'
})
export class CitylListService {
private city: CityList[]=[];
addCity(id: string, name: string, zipcode: number, region: string): void
{this.city.push({
  id:id,
  name:name,
  zipcode:zipcode,
  region:region,
})

}
getCity():CityList[]{

return this.city;
}
  constructor() { }
}
