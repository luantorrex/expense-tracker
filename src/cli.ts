import { ExpenseTracker } from './tracker';
import { Expense } from './expense';
// Minimal require declaration so TypeScript compiles without Node typings
declare function require(name: string): any;
const { existsSync, readFileSync, writeFileSync } = require('fs');

const DATA_FILE = 'expenses.json';

// Minimal declaration for process when Node typings are unavailable
declare const process: { argv: string[]; exit(code?: number): void };

const tracker = new ExpenseTracker();

function loadExpenses() {
  if (existsSync(DATA_FILE)) {
    try {
      const raw = readFileSync(DATA_FILE, 'utf8');
      const items: Expense[] = JSON.parse(raw, (key, value) => {
        if (key === 'date') {
          return new Date(value);
        }
        return value;
      });
      items.forEach((e) => tracker.addExpense(e));
    } catch {
      // If the file can't be read or parsed, start fresh
    }
  }
}

function saveExpenses() {
  writeFileSync(DATA_FILE, JSON.stringify(tracker.getExpenses()));
}

loadExpenses();

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
    saveExpenses();
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

