import { Injectable } from '@angular/core';
import ExerciseList from '../../Database/ExerciseList';
@Injectable({
  providedIn: 'root'
})
export class ExerciseListService {
  private exercise: ExerciseList[]=[];

  addExercise(name: string, type: string, target: string):void
  {this.exercise.push({
    name:name,
    type:type,
    target:target
  });
}
  getExercise(): ExerciseList[]{
    return this.exercise;
  }
  constructor() { }
}
