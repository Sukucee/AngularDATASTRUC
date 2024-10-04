import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import BudgetList from '../Database/BudgetList';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
  Budget:BudgetList[] = [];
	category: string = '';
  budget: number = 0;
  amount: number = 0;
  difference: number = 0;

	addBudget(): void {
		this.Budget.push({
			category: this.category,
			budget: this.budget,
      amount:this.amount,
      difference:this.difference,
		});
    this.category = '';
		this.budget = 0;
		this.amount = 0;
    this.difference = 0;
	}
}
