import { Component } from '@angular/core';
import LaptopList from '../Database/LaptopList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaptopListService } from '../services/laptop-list/laptop-list.service';

@Component({
  selector: 'app-laptop-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  LaptopList=[] as LaptopList [];
  constructor(private laptopService:LaptopListService)
  {this.LaptopList=this.laptopService.getLaptop();}
	model: string = '';
  price: number = 0;

	addLappy(): void {
		this.laptopService.addLaptop(
			this.model,
      this.price,
		);

		this.model = '';
		this.price = 0;
}
}
