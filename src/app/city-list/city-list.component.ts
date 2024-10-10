import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CityList from '../Database/CityList';
import { CitylListService } from '../services/city-list/cityl-list.service';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  	cityList=[] as CityList[];
	constructor(private cityService: CitylListService){
		this.cityList = this.cityService.getCity();
	}
	id: string = '';
	name: string = '';
	zipcode: number = 0;
	region: string = '';

	addCity(): void {
		this.cityService.addCity(
      		this.id,
			this.name,
			this.zipcode,
            this.region,
		);

		this.zipcode = 0;
		this.region = '';
		this.id = '';
		this.name = '';
	}
}
