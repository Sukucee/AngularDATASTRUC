import { Component } from '@angular/core';
import GroceryList from '../Database/GroceryList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  grocery: GroceryList[] = [];
	name: string = '';
	type: string = '';
  price: number= 0;

	addGrocery(): void {
		this.grocery.push({
			name: this.name,
			type: this.type,
      price:this.price,
		});

		this.name = '';
		this.type = '';
    this.price = 0;
	}
}
