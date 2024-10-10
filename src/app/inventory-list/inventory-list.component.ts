import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import InventoryList from '../Database/InventoryList';
import { InventoryListService } from '../services/inventory-list/inventory-list.service';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  InventoryList = [] as InventoryList [];
  constructor(private inventryService:InventoryListService)
  {this.InventoryList=this.inventryService.getInventory();}
	name: string = '';
	type: string = '';
  quantity: number= 0;
  price: number= 0;

	addInventory(): void {
		this.inventryService.addInventory(
			this.name,
			this.type,
      this.quantity,
      this.price,
		);

		this.name = '';
		this.type = '';
    this.quantity = 0;
    this.price = 0;
	}
}
