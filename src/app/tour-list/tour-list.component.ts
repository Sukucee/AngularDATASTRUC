import { Component } from '@angular/core';
import TourList from '../Database/TourList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  Tour: TourList[] = [];
	destination: string = '';
  tourguide: string = '';
  fee: number = 0;

	addNaThis(): void {
		this.Tour.push({
			destination:this.destination,
      tourguide:this.tourguide,
      fee:this.fee,
		});
    this.fee = 0;
		this.tourguide = '';
    this.destination = '';
	}
}
