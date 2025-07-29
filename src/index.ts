import { Expense } from './expense';
import { ExpenseTracker } from './tracker';

const tracker = new ExpenseTracker();

// Example usage
const expense: Expense = {
  amount: 50,
  description: 'Groceries',
  category: 'Food',
  date: new Date(),
};

tracker.addExpense(expense);

console.log('Total expenses:', tracker.getTotal());
console.log('Summary by category:', tracker.getSummaryByCategory());
