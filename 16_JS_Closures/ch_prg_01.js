// Level 3: Creating personAccount function
function personAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];

    function addIncome(description, amount) {
        incomes.push({ description, amount });
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
    }

    function totalIncome() {
        let total = 0;
        for (let income of incomes) {
            total += income.amount;
        }
        return total;
    }

    function totalExpense() {
        let total = 0;
        for (let expense of expenses) {
            total += expense.amount;
        }
        return total;
    }

    function accountInfo() {
        return `${firstName} ${lastName}'s account`;
    }

    function accountBalance() {
        let balance = totalIncome() - totalExpense();
        return balance;
    }

    return {
        addIncome: addIncome,
        addExpense: addExpense,
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        accountInfo: accountInfo,
        accountBalance: accountBalance
    };
}

// Creating a person account for testing
const johnDoeAccount = personAccount('John', 'Doe');
johnDoeAccount.addIncome('Salary', 3000);
johnDoeAccount.addIncome('Freelancing', 500);
johnDoeAccount.addExpense('Rent', 1000);
johnDoeAccount.addExpense('Utilities', 200);

console.log(johnDoeAccount.accountInfo()); // Output: John Doe's account
console.log(`Total Income: ${johnDoeAccount.totalIncome()}`); // Output: Total Income: 3500
console.log(`Total Expense: ${johnDoeAccount.totalExpense()}`); // Output: Total Expense: 1200
console.log(`Account Balance: ${johnDoeAccount.accountBalance()}`); // Output: Account Balance: 2300
