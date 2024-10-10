import { Component } from '@angular/core';
import GroceryList from '../Database/GroceryList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroceryListService } from '../services/grocery-list/grocery-list.service';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  	GroceryList=[] as GroceryList [];
	constructor(private groceryService: GroceryListService)
	{this.GroceryList=this.groceryService.getGrocery();}

	name: string = '';
	type: string = '';
  	price: number= 0;

	addGrocery(): void {
		this.groceryService.addGrocery(
			this.name,
			this.type,
      		this.price,
		);

		this.name = '';
		this.type = '';
    this.price = 0;
	}
}
