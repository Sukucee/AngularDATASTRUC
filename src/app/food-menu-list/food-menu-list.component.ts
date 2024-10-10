import { Component } from '@angular/core';
import FoodMenuList from '../Database/FoodMenuList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodMenuListService } from '../services/food-menu-list/food-menu-list.service';

@Component({
  selector: 'app-food-menu-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './food-menu-list.component.html',
  styleUrl: './food-menu-list.component.css'
})
export class FoodMenuListComponent {
  	FoodMenuList=[] as FoodMenuList[];
	constructor(private foodmenuService: FoodMenuListService)
	{this.FoodMenuList=this.foodmenuService.getFoodMenu();}
	name: string = '';
	type: string = '';
    price: number= 0;

	addMenu(): void {
		this.foodmenuService.addFoodMenu(
			this.name,
			this.type,
      		this.price,
		);

		this.name = '';
		this.type = '';
    	this.price = 0;
	}
}
