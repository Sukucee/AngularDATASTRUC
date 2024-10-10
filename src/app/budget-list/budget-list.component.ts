import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import BudgetList from '../Database/BudgetList';
import { BudgetListService } from '../services/budget-list/budget-list.service';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
  BudgetList =[] as BudgetList[];
  constructor(private BudgetService: BudgetListService){this.BudgetList = this.BudgetService.getBudget();
  }
	category: string = '';
  budget: number = 0;
  amount: number = 0;
  difference: number = 0;

	addBudget(): void {
		this.BudgetService.addBudget(
			this.category,
			this.budget,
      this.amount,
      this.difference,
		);
    this.category = '';
		this.budget = 0;
		this.amount = 0;
    this.difference = 0;
	}
}
