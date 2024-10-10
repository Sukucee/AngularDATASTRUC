import { Component } from '@angular/core';
import AnimalList from '../Database/AnimalList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../services/animal/animal.service';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
   AnimalList=[] as AnimalList[];
   constructor(private animalService: AnimalService){
	this.AnimalList = this.animalService.getAnimal();
   }
	name: string = '';
	legs: number = 0;
  wings: string = '';
	type: string = '';

	addAnimals(): void {
		this.animalService.addAnimal(
			this.name,
			this.legs,
      		this.wings,
			this.type,
		);

		this.legs = 0;
		this.type = '';
		this.wings = '';
		this.name = '';
	}
}
