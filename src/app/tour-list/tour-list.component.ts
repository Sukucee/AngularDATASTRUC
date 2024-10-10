import { Component } from '@angular/core';
import TourList from '../Database/TourList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TourListService } from '../services/tour-list/tour-list.service';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  Tour=[] as TourList [];
  constructor (private tourService:TourListService)
  {this.Tour=this.tourService.getTour();}
	destination: string = '';
  tourguide: string = '';
  fee: number = 0;

	addNaThis(): void {
		this.tourService.addTour(
			this.destination,
      this.tourguide,
      this.fee,
		);
    this.fee = 0;
		this.tourguide = '';
    this.destination = '';
	}
}
