import { Component } from '@angular/core';
import AccessoryList from '../Database/AccessoriesList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accessory-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
accessory: AccessoryList[] = [];
	type: string = '';
	description: string = '';
  material: string = '';
	price: number = 0;

	

	addThings(): void {
		this.accessory.push({
      type: this.type,
			description: this.description,
      material: this.material,
			price: this.price,
		});

		this.price = 0;
		this.material = '';
		this.description = '';
		this.type = '';
	}
}
