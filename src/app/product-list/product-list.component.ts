import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import ProductList from '../Database/ProductList';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product: ProductList[] = [];
	id: string = '';
	name: string = '';
  type: string = '';
	price: number = 0;

	addItems(): void {
		this.product.push({
			id: this.id,
			name: this.name,
      type: this.type,
			price: this.price,
		});

		this.price = 0;
		this.type = '';
		this.id = '';
		this.name = '';
}
}
