import { Component } from '@angular/core';
import FurnitureList from '../Database/FurnitureList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FurnitureListService } from '../services/furniture-list/furniture-list.service';

@Component({
  selector: 'app-furniture-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
	FurnitureList = [] as FurnitureList [];
	constructor (private furnitureService: FurnitureListService)
	{this.FurnitureList=this.furnitureService.getFurniture();}

	name: string = '';
	material: string = '';
	price: number = 0;

	addFurniture(): void {
		this.furnitureService.addFurniture(
			this.name,
			this.material,
			this.price,
		);

		this.price = 0;
		this.material = '';
		this.name = '';
	}
}
