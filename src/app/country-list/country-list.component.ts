import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CountryList from '../Database/CountryList';
import { CountryListService } from '../services/country-list/country-list.service';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  CountryList=[] as CountryList[];
  constructor(private countryService:CountryListService){
    this.CountryList=this.countryService.getCountry();
  }

	name: string = '';
  continent: string = '';
  capital: string = '';
  

	addCountry(): void {
		this.countryService.addCountry(
      this.name,
      this.continent,
      this.capital,
		);
    
	
		this.name = '';
    this.continent = '';
    this.capital = '';
	}
}
