import { Component } from '@angular/core';
import LaptopList from '../Database/LaptopList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-laptop-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  lappy: LaptopList[] = [];
	model: string = '';
  price: number = 0;

	addLappy(): void {
		this.lappy.push({
			model: this.model,
      price: this.price,
		});

		this.model = '';
		this.price = 0;
}
}
