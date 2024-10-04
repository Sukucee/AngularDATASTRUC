import { Component } from '@angular/core';
import ExerciseList from '../Database/ExerciseList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  Exercise: ExerciseList[] = [];
	  name: string = '';
	  type: string = '';
    target: string = '';

	addExercise(): void {
		  this.Exercise.push({
			name: this.name,
			type: this.type,
			target: this.target,
		});
		this.name = '';
		this.target = '';
    this.type = '';
	}
}
