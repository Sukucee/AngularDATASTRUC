import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CarModelList from '../Database/CarModelList';
import { CarModelListService } from '../services/car-model-list/car-model-list.service';

@Component({
  selector: 'app-car-model-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {
  CarModelList=[] as CarModelList[];
  constructor(private CarModelService:
    CarModelListService){
      this.CarModelList=this.CarModelService.getCarModel();
    }

	id: string = '';
	brand: string = '';
  model: string = '';
  year: number = 0;

	addCarModel(): void {
		this.CarModelService.addCarModel(
			this.id,
      this.brand,
      this.model,
      this.year,
		);
    
		this.id = '';
		this.brand = '';
    this.model = '';
    this.year = 0;
	}
}
