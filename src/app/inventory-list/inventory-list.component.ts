import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import InventoryList from '../Database/InventoryList';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  inventory: InventoryList[] = [];
	name: string = '';
	type: string = '';
  quantity: number= 0;
  price: number= 0;

	addInventory(): void {
		this.inventory.push({
			name: this.name,
			type: this.type,
      quantity: this.quantity,
      price:this.price,
		});

		this.name = '';
		this.type = '';
    this.quantity = 0;
    this.price = 0;
	}
}
