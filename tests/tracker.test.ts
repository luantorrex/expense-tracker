import { ExpenseTracker } from '../src/tracker';
import { Expense } from '../src/expense';

describe('ExpenseTracker', () => {
  test('addExpense and getExpenses', () => {
    const tracker = new ExpenseTracker();
    const expense: Expense = { amount: 10, description: 'Coffee', category: 'Food', date: new Date() };
    tracker.addExpense(expense);
    expect(tracker.getExpenses()).toEqual([expense]);
  });

  test('getTotal', () => {
    const tracker = new ExpenseTracker();
    tracker.addExpense({ amount: 10, description: 'Coffee', category: 'Food', date: new Date() });
    tracker.addExpense({ amount: 15, description: 'Taxi', category: 'Transport', date: new Date() });
    expect(tracker.getTotal()).toBe(25);
  });

  test('getSummaryByCategory', () => {
    const tracker = new ExpenseTracker();
    tracker.addExpense({ amount: 10, description: 'Coffee', category: 'Food', date: new Date() });
    tracker.addExpense({ amount: 20, description: 'Dinner', category: 'Food', date: new Date() });
    tracker.addExpense({ amount: 15, description: 'Taxi', category: 'Transport', date: new Date() });
    expect(tracker.getSummaryByCategory()).toEqual({ Food: 30, Transport: 15 });
  });
});
