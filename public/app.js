function loadExpenses() {
  const raw = localStorage.getItem('expenses');
  return raw ? JSON.parse(raw) : [];
}

function saveExpenses(expenses) {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

function addExpense(expense) {
  const expenses = loadExpenses();
  expenses.push(expense);
  saveExpenses(expenses);
}

function getSummaryByCategory() {
  const expenses = loadExpenses();
  return expenses.reduce((summary, e) => {
    const cat = e.category || 'Uncategorized';
    summary[cat] = (summary[cat] || 0) + Number(e.amount);
    return summary;
  }, {});
}
