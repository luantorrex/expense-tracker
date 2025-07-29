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

  removeExpense(id: string): boolean {
    const index = this.expenses.findIndex(e => e.id === id);
    if (index >= 0) {
      this.expenses.splice(index, 1);
      return true;
    }
    return false;
  }

  getExpensesByCategory(category: string): Expense[] {
    return this.expenses.filter(e => e.category === category);
  }

  getExpensesByDateRange(start: Date, end: Date): Expense[] {
    return this.expenses.filter(e => e.date >= start && e.date <= end);
  }

  getTotalByCategory(category: string): number {
    return this.getExpensesByCategory(category).reduce((sum, e) => sum + e.amount, 0);
  }
}
