import { Component } from '@angular/core';
import MealPlanList from '../Database/MealPlanList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meal-plan-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  MealPlan: MealPlanList[] = [];
  meal: string = '';
  food: string = '';
  calories: number = 0;
  nutrients: string = '';

addMP(): void {
    this.MealPlan.push({
    meal: this.meal,
    food: this.food,
    calories: this.calories,
    nutrients:this.nutrients,
  });
  this.meal = '';
  this.food = '';
  this.calories = 0;
  this.nutrients = '';
}
}
