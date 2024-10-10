import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import FruitList from '../Database/FruitList';
import { FruitListService } from '../services/fruit-list/fruit-list.service';

@Component({
  selector: 'app-fruit-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
 	FruitList=[] as FruitList[];
	constructor(private fruitService: FruitListService)
	{this.FruitList=this.fruitService.getFruit()}

	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addFruit(): void {
		this.fruitService.addFruit(
			this.name,
			this.quantity,
			this.price,
		);

		this.price = 0;
		this.quantity = 0;
		this.name = '';
	}
}
