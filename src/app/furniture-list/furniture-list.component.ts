import { Component } from '@angular/core';
import FurnitureList from '../Database/FurnitureList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-furniture-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
furniture: FurnitureList[] = [];
	name: string = '';
	material: string = '';
	price: number = 0;

	addFurniture(): void {
		this.furniture.push({
			name: this.name,
			material: this.material,
			price: this.price,
		});

		this.price = 0;
		this.material = '';
		this.name = '';
	}
}
