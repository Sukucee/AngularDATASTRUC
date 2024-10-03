import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CityList from '../Database/CityList';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  city: CityList[] = [];
	id: string = '';
	name: string = '';
	zipcode: number = 0;
	region: string = '';

	addCity(): void {
		this.city.push({
      id: this.id,
			name: this.name,
			zipcode: this.zipcode,
      region: this.region,
		});

		this.zipcode = 0;
		this.region = '';
		this.id = '';
		this.name = '';
	}
}
