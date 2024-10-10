import { Component } from '@angular/core';
import ExerciseList from '../Database/ExerciseList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExerciseListService } from '../services/exercise-list/exercise-list.service';

@Component({
  selector: 'app-exercise-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
 	  ExerciseList=[] as ExerciseList [];
	  constructor(private exerciseService: ExerciseListService)
	  {this.ExerciseList=this.exerciseService.getExercise();}

	  name: string = '';
	  type: string = '';
      target: string = '';

	addExercise(): void {
		  this.exerciseService.addExercise(
			this.name,
			this.type,
			this.target,
		);
		this.name = '';
		this.target = '';
    	this.type = '';
	}
}
