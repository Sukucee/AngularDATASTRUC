import { Component } from '@angular/core';
import StationeryList from '../Database/StationeryList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stationery-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
  stationery: StationeryList[] = [];
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addItemList(): void {
		this.stationery.push({
			name: this.name,
			quantity: this.quantity,
			price: this.price,
		});

		this.price = 0;
		this.quantity = 0;
		this.name = '';
	}
}
