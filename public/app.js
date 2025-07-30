// AngularJS Expense Tracker Application
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

const app = angular.module('expenseApp', []);

app.controller('AddController', function($scope) {
  $scope.expense = {};
  $scope.add = function() {
    if (!$scope.expense.amount || !$scope.expense.description || !$scope.expense.category) return;
    addExpense({
      amount: parseFloat($scope.expense.amount),
      description: $scope.expense.description,
      category: $scope.expense.category,
      date: new Date()
    });
    $scope.expense = {};
    alert('Expense added!');
  };
});

app.controller('ListController', function($scope) {
  $scope.expenses = loadExpenses();
});

app.controller('SummaryController', function($scope) {
  $scope.summary = getSummaryByCategory();
});
