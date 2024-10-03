import { Component } from '@angular/core';
import AnimalList from '../Database/AnimalList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  animal: AnimalList[] = [];
	name: string = '';
	legs: number = 0;
  wings: string = '';
	type: string = '';

	addAnimals(): void {
		this.animal.push({
			name: this.name,
			legs: this.legs,
      wings: this.wings,
			type: this.type,
		});

		this.legs = 0;
		this.type = '';
		this.wings = '';
		this.name = '';
	}
}
