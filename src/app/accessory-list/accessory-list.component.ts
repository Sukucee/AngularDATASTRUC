import { Component } from '@angular/core';
import AccessoryList from '../Database/AccessoriesList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccessoryListService } from '../services/accessory-list/accessory-list.service';

@Component({
  selector: 'app-accessory-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
accessoryList = [] as AccessoryList[];
constructor(private accessoryService: AccessoryListService){
this.accessoryList = this.accessoryService.getAccessories();
}

	type: string = '';
	description: string = '';
  	material: string = '';
	price: number = 0;

	

	addThings(): void {
		this.accessoryService.addAccessory(
       	this.type,
		this.description,
    	this.material,
		this.price,
		);

		this.price = 0;
		this.material = '';
		this.description = '';
		this.type = '';
	}
}
