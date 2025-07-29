import { Expense } from './expense';

export class ExpenseTracker {
  private expenses: Expense[] = [];

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }

  getExpenses(): Expense[] {
    return [...this.expenses];
  }

  getTotal(): number {
    return this.expenses.reduce((sum, e) => sum + e.amount, 0);
  }

  getSummaryByCategory(): Record<string, number> {
    return this.expenses.reduce((summary, expense) => {
      summary[expense.category] = (summary[expense.category] || 0) + expense.amount;
      return summary;
    }, {} as Record<string, number>);
  }
}
