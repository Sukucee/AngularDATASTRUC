import { Component } from '@angular/core';
import DestinationList from '../Database/DestinationList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DestinationListService } from '../services/destination-list/destination-list.service';

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  	DestinationList=[] as DestinationList [];
	constructor(private destinationService: DestinationListService){
		this.DestinationList=this.destinationService.getDestination();
	}
	
	destination: string = '';
	country: string = '';
	price: number = 0;
  

	addDestination(): void {
		this.destinationService.addDestination(
			this.destination,
			this.country,
			this.price,
		);

		this.price = 0;
		this.destination = '';
		this.country = '';
	}
}
