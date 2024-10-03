import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CarModelList from '../Database/CarModelList';

@Component({
  selector: 'app-car-model-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {
  car: CarModelList[] = [];
	id: string = '';
	brand: string = '';
  model: string = '';
  year: number = 0;

	addCarModel(): void {
		this.car.push({
			id: this.id,
      brand: this.brand,
      model: this.model,
      year: this.year,
		});
    
		this.id = '';
		this.brand = '';
    this.model = '';
    this.year = 0;
	}
}
