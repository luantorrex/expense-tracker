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
- `list` - List all added expenses
- `summary` - Display total spent per category

## Angular Browser Frontend

The pages inside `public/` use **AngularJS** (loaded from a CDN) to make the interface dynamic and slightly prettier. No additional build tools are required to try it out.

Pages available:

- `public/index.html` – landing page
- `public/add.html` – form to add a new expense
- `public/list.html` – table of all expenses
- `public/summary.html` – totals by category

### Opening the pages

1. (Optional) build the TypeScript sources if you want to use the Node examples:

   ```bash
   npm install
   npm run build
   ```

2. Start a simple web server from the project root:

   ```bash
   python -m http.server
   ```

3. Visit `http://localhost:8000/public/index.html` in your browser and navigate using the links.

AngularJS comes from the CDN so there is nothing else to configure. If you wish to change the UI logic look at `public/app.js` and the HTML templates.
