// Define personAccount object
const personAccount = {
    firstName: 'Emma',
    lastName: 'Johnson',
    incomes: [],
    expenses: [],
  
    // Method to calculate total income
    totalIncome: function() {
      let total = 0;
      for (let income of this.incomes) {
        total += income.amount;
      }
      return total;
    },
  
    // Method to calculate total expenses
    totalExpense: function() {
      let total = 0;
      for (let expense of this.expenses) {
        total += expense.amount;
      }
      return total;
    },
  
    // Method to display account information
    accountInfo: function() {
      return `Account Information for ${this.firstName} ${this.lastName}: \n` +
             `Total Income: ${this.totalIncome()} \n` +
             `Total Expenses: ${this.totalExpense()} \n` +
             `Account Balance: ${this.accountBalance()}`;
    },
  
    // Method to add income
    addIncome: function(description, amount) {
      this.incomes.push({ description, amount });
    }, 
  
    // Method to add expense
    addExpense: function(description, amount) {
      this.expenses.push({ description, amount });
    },
  
    // Method to calculate account balance
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  
  // Example usage:
  personAccount.addIncome('Salary', 5000);
  personAccount.addExpense('Rent', 1500);
  personAccount.addExpense('Groceries', 300);
  console.log(personAccount.accountInfo());
  
  // Store personAccount object in localStorage
  localStorage.setItem('personAccount', JSON.stringify(personAccount));
  