import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CountryList from '../Database/CountryList';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  country: CountryList[] = [];
	name: string = '';
  continent: string = '';
  capital: string = '';
  

	addCountry(): void {
		this.country.push({
      name:this.name,
      continent:this.continent,
      capital:this.capital,
		});
    
	
		this.name = '';
    this.continent = '';
    this.capital = '';
	}
}
