import { Component } from '@angular/core';
import DestinationList from '../Database/DestinationList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  Destination: DestinationList[] = [];
	destination: string = '';
	country: string = '';
	price: number = 0;
  

	addDestination(): void {
		this.Destination.push({
			destination: this.destination,
			country: this.country,
			price: this.price,
		});

		this.price = 0;
		this.destination = '';
		this.country = '';
	}
}
