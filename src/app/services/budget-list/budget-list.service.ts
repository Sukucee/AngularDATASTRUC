import { Injectable } from '@angular/core';
import BudgetList from '../../Database/BudgetList';
@Injectable({
  providedIn: 'root'
})
export class BudgetListService {
  private budgets: BudgetList[]=[];

  addBudget(category: string, budget: number, amount: number, difference: number): void {this.budgets.push({
    category: category,
    budget: budget,
    amount: amount,
    difference: difference,
  })
  }
  getBudget():BudgetList[]{
    return this.budgets;
  }
  constructor() { }
}
