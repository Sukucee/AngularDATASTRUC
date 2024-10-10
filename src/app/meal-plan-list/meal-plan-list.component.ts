import { Component } from '@angular/core';
import MealPlanList from '../Database/MealPlanList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealPlanListService } from '../services/meal-plan-list/meal-plan-list.service';

@Component({
  selector: 'app-meal-plan-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  MealPlan = [] as MealPlanList [];
  constructor (private mealplanService: MealPlanListService)
  {this.MealPlan=this.mealplanService.getMealPlan();}

  meal: string = '';
  food: string = '';
  calories: number = 0;
  nutrients: string = '';

addMP(): void {
    this.mealplanService.addMealPlan(
    this.meal,
    this.food,
    this.calories,
    this.nutrients,
  );
  this.meal = '';
  this.food = '';
  this.calories = 0;
  this.nutrients = '';
}
}
