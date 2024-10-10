import { Injectable } from '@angular/core';
import MealPlanList from '../../Database/MealPlanList';

@Injectable({
  providedIn: 'root'
})
export class MealPlanListService {
  private meal: MealPlanList[]=[];

  addMealPlan(meal: string, food: string,  calories: number, nutrients: string):void
  {this.meal.push({
      meal:meal,
      food:food,
      calories:calories,
      nutrients:nutrients
  });
}
  getMealPlan():MealPlanList[]{
    return this.meal;
  }
  constructor() { }
}
