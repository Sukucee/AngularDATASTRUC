import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import ProductList from '../Database/ProductList';
import { ProductListService } from '../services/product-list/product-list.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product = [] as ProductList[];
  constructor(private productService: ProductListService)
  {this.product=this.productService.getProduct();}

	id: string = '';
	name: string = '';
  	type: string = '';
	price: number = 0;

	addItems(): void {
		this.productService.addProduct(
			this.id,
			this.name,
      		this.type,
			this.price,
		);

		this.price = 0;
		this.type = '';
		this.id = '';
		this.name = '';
}
}
