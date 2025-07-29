import { Expense } from './expense';
import { ExpenseTracker } from './tracker';

const tracker = new ExpenseTracker();

// Example usage
const expense1: Expense = {
  id: '1',
  amount: 50,
  description: 'Groceries',
  category: 'Food',
  date: new Date(),
};

const expense2: Expense = {
  id: '2',
  amount: 20,
  description: 'Bus ticket',
  category: 'Transport',
  date: new Date(),
};

tracker.addExpense(expense1);
tracker.addExpense(expense2);

console.log('Total expenses:', tracker.getTotal());
console.log('Summary by category:', tracker.getSummaryByCategory());
console.log('Total for Food:', tracker.getTotalByCategory('Food'));

tracker.removeExpense('1');
console.log('Expenses after removing id=1:', tracker.getExpenses());
