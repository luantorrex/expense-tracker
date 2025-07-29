import { ExpenseTracker } from './tracker';
import { Expense } from './expense';

// Minimal declaration for process when Node typings are unavailable
declare const process: { argv: string[]; exit(code?: number): void };

const tracker = new ExpenseTracker();

const [command, ...args] = process.argv.slice(2);

switch (command) {
  case 'add': {
    if (args.length < 3) {
      console.log('Usage: add <amount> <description> <category>');
      process.exit(1);
    }
    const [amountStr, description, category] = args;
    const amount = Number(amountStr);
    if (isNaN(amount)) {
      console.log('Amount must be a number.');
      process.exit(1);
    }
    const expense: Expense = {
      amount,
      description,
      category,
      date: new Date()
    };
    tracker.addExpense(expense);
    console.log('Expense added.');
    break;
  }
  case 'list':
    console.table(tracker.getExpenses());
    break;
  case 'summary':
    console.table(tracker.getSummaryByCategory());
    break;
  default:
    console.log('Available commands: add, list, summary');
    process.exit(1);
}
