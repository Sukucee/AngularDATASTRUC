import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import VegetableList from '../Database/VegetableList';
import { VegetableListService } from '../services/vegetable-list/vegetable-list.service';

@Component({
  selector: 'app-vegetable-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  vegetable=[] as VegetableList [];
  constructor(private vegetableService:VegetableListService)
  {this.vegetable=this.vegetableService.getVegie();}

	name: string = '';
	color: string = '';
    status: string = '';
	price: number = 0;

	addVegie(): void {
		this.vegetableService.addVegie(
			this.name,
			this.color,
      		this.status,
			this.price,
		);

		this.price = 0;
		this.status = '';
		this.color = '';
		this.name = '';
	}
}
