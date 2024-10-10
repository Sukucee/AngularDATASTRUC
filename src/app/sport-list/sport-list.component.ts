import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import SportList from '../Database/SportList';
import { SportListService } from '../services/sport-list/sport-list.service';

@Component({
  selector: 'app-sport-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './sport-list.component.html',
  styleUrl: './sport-list.component.css'
})
export class SportListComponent {
  sports=[] as SportList [];
  constructor (private sportService: SportListService)
  {this.sports=this.sportService.getSport();}

	sport: string = '';
	name: string = '';
	type: string = '';
	age: number = 8;

	addSport(): void {
		this.sportService.addSport(
			this.sport,
			this.name,
			this.type,
			this.age,
		);

		this.age = 8;
		this.sport = '';
		this.type = '';
		this.name = '';
	}
}
