import { Component } from '@angular/core';
import FoodMenuList from '../Database/FoodMenuList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-menu-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './food-menu-list.component.html',
  styleUrl: './food-menu-list.component.css'
})
export class FoodMenuListComponent {
  food: FoodMenuList[] = [];
	name: string = '';
	type: string = '';
  price: number= 0;

	addMenu(): void {
		this.food.push({
			name: this.name,
			type: this.type,
      price:this.price,
		});

		this.name = '';
		this.type = '';
    this.price = 0;
	}
}
