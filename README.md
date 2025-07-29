# Expense Tracker

A simple but effective expense tracker where users can add expenses, categorize them, and see a summary of their spending. The application may include a basic chart or graph to visualize expenses over time.

## Features

- **Add Expenses:** Record individual expenses with amounts, descriptions, and categories.
- **Categorization:** Organize expenses into custom categories (e.g., food, transportation, utilities).
- **Summary View:** See a summary of total spending by category or over a specified period.
- **Visualization:** Optionally view charts or graphs for a quick look at spending trends.

## Usage

The repository contains a basic TypeScript project. After installing dependencies and running the build script, you can execute the example application:

```bash
npm install
npm run build
npm start
```

Running `npm start` will execute the compiled JavaScript in `dist/index.js`, which demonstrates adding an expense and printing a summary.

## Running Tests

Unit tests are written using Jest. After installing dependencies you can run:

```bash
npm test
```

## Command Line Interface

A simple CLI is available to manage expenses. Build the project first and then run it with:

```bash
npm run build
npm run cli -- <command>
```

Commands available:

- `add <amount> <description> <category>` - Add a new expense
- `list` - List all added expenses in the current session
- `summary` - Display total spent per category
