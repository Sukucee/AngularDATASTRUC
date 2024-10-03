import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import SportList from '../Database/SportList';

@Component({
  selector: 'app-sport-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './sport-list.component.html',
  styleUrl: './sport-list.component.css'
})
export class SportListComponent {
  sports: SportList[] = [];
	sport: string = '';
	name: string = '';
	type: string = '';
	age: number = 8;

	addSport(): void {
		this.sports.push({
			sport: this.sport,
			name: this.name,
			type: this.type,
			age: this.age,
		});

		this.age = 8;
		this.sport = '';
		this.type = '';
		this.name = '';
	}
}
