import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import FruitList from '../Database/FruitList';

@Component({
  selector: 'app-fruit-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  fruits: FruitList[] = [];
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addFruit(): void {
		this.fruits.push({
			name: this.name,
			quantity: this.quantity,
			price: this.price,
		});

		this.price = 0;
		this.quantity = 0;
		this.name = '';
	}
}
