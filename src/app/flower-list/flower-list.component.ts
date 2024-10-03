import { Component } from '@angular/core';
import FlowerList from '../Database/FlowerList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flower-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
  flower: FlowerList[] = [];
	name: string = '';
	stock: string = '';
	price: number = 0;
  color: string = '';

	addFlower(): void {
		this.flower.push({
			name: this.name,
			stock: this.stock,
			price: this.price,
      color: this.color,
		});

		this.price = 0;
		this.stock = '';
		this.name = '';
    this.color = '';
	}
}
