import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { ExpenseTracker } from './tracker';
import { Expense } from './expense';

const tracker = new ExpenseTracker();

const argv = yargs(hideBin(process.argv))
  .command('add <amount> <description> <category>', 'Add a new expense', y => {
    return y
      .positional('amount', { type: 'number', describe: 'Amount spent' })
      .positional('description', { type: 'string', describe: 'Expense description' })
      .positional('category', { type: 'string', describe: 'Expense category' });
  }, args => {
    const expense: Expense = {
      amount: args.amount as number,
      description: args.description as string,
      category: args.category as string,
      date: new Date()
    };
    tracker.addExpense(expense);
    console.log('Expense added.');
  })
  .command('list', 'List all expenses', {}, () => {
    console.table(tracker.getExpenses());
  })
  .command('summary', 'Show summary by category', {}, () => {
    console.table(tracker.getSummaryByCategory());
  })
  .demandCommand()
  .help()
  .argv;

