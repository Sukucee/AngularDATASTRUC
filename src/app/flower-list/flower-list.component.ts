import { Component } from '@angular/core';
import FlowerList from '../Database/FlowerList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlowerListService } from '../services/flower-list/flower-list.service';

@Component({
  selector: 'app-flower-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
  	FlowerList=[] as FlowerList [];
	constructor(private flowerService: FlowerListService)
	{this.FlowerList=this.flowerService.getFlower();}
	name: string = '';
	stock: string = '';
	price: number = 0;
    color: string = '';

	addFlower(): void {
		this.flowerService.addFlower(
			this.name,
			this.stock,
			this.price,
      		this.color,
		);

		this.price = 0;
		this.stock = '';
		this.name = '';
    this.color = '';
	}
}
