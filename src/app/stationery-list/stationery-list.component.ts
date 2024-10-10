import { Component } from '@angular/core';
import StationeryList from '../Database/StationeryList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StationeryListService } from '../services/stationery-list/stationery-list.service';

@Component({
  selector: 'app-stationery-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
  stationery=[] as StationeryList [];
  constructor (private stationaryService: StationeryListService)
  {this.stationery=this.stationaryService.getStationary();}
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addItemList(): void {
		this.stationaryService.addStationary(
			this.name,
			this.quantity,
			this.price,
		);

		this.price = 0;
		this.quantity = 0;
		this.name = '';
	}
}
