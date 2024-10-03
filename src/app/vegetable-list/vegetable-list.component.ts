import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import VegetableList from '../Database/VegetableList';

@Component({
  selector: 'app-vegetable-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  vegetable: VegetableList[] = [];

	name: string = '';
	color: string = '';
  status: string = '';
	price: number = 0;

	addVegie(): void {
		this.vegetable.push({
			name: this.name,
			color: this.color,
      status: this.status,
			price: this.price,
		});

		this.price = 0;
		this.status = '';
		this.color = '';
		this.name = '';
	}
}
