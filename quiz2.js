class Account {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
        this.isBalance = true;
    }
    Balance = this.balance >= 0.0 ? true : false;
    credit(amount) {
        this.balance = +amount + +this.balance;
    }
    debit(amount) {
        if (this.balance - amount > 0) {
            this.balance -= amount;
            this.isBalance = true;
        } else {

            console.log('Debit amount exceeded account balance')
            this.isbalance = false;
        }
    }
    get getBalance() {
        return this.balance;
    }
}


class SavingsAccount extends Account {

    constructor(balance, interest) {
        super(balance);
        this.interestRate = interest;
    }
    CalculateInterest() {

        return this.balance * (this.interestRate / 100);
    }
    credit(amount) {
        this.balance = +amount + +this.balance;
    }
    debit(amount) {
        if (this.balance - amount > 0) {
            this.balance -= amount;
        } else {
            console.log('Debit amount exceeded account balance')
        }
    }
}


class CheckingAccount extends Account {


    constructor(balance, feeChargedPerTrans) {
        super(balance);
        this.feeChargedPerTrans = feeChargedPerTrans;
    }

    credit(amount) {
        this.balance = +amount + +this.balance;
    }
    debit(amount) {
        if ((this.balance - amount - this.feeChargedPerTrans) >= 0) {
            this.balance = this.balance - amount - this.feeChargedPerTrans;;
        } else {
            console.log('Debit amount exceeded account balance')
        }
    }

}

var readline = require('readline');
var rl = r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter  Initial  amount: ", function (amt) {
    var amount = amt;
    let accObj = new Account(amount);
    console.log("Initial Balance: " + accObj.getBalance);
    accObj.credit(amount);
    console.log("Current Balance after Credit: " + accObj.balance);
    accObj.debit(amount);
    console.log("Current Balance after debit: " + accObj.balance);
    // rl.close();
    console.log("-------------------Savings Account---------------------------");
    let savingsObj = new SavingsAccount(amt, 15)
    console.log("Initial Balance: " + savingsObj.getBalance);
    savingsObj.credit(amt);
    console.log("Current Balance in savings account after credit: " + savingsObj.getBalance);
    console.log("Savings account  Interest : " + savingsObj.CalculateInterest());
    savingsObj.credit(savingsObj.CalculateInterest());
    console.log("Savings account after adding Interest : " + savingsObj.getBalance);
    // rl.close();
    console.log("-------------------Checking Account---------------------------");
    let checkingObj = new CheckingAccount(amount, 20);
    console.log("Initial Balance: " + checkingObj.getBalance);
    checkingObj.credit(amount);
    console.log("Current Balance in Checking account after credit: " + checkingObj.getBalance);
    checkingObj.debit(amount);
    console.log("Current Balance in Checking account after debit: " + checkingObj.getBalance);
    rl.close();

});



// let accObj = new Account(1000);
// console.log("Initial Balance: " + accObj.getBalance);
// accObj.credit(200);
// console.log("Current Balance after Credit: " + accObj.getBalance);
// accObj.debit(1300);
// console.log("Current Balance after debit: " + accObj.getBalance);

// console.log("-------------------Savings Account---------------------------");
// let savingsObj = new SavingsAccount(1000, 15)
// console.log("Initial Balance: " + savingsObj.getBalance);
// savingsObj.credit(150);
// console.log("Current Balance in savings account after credit: " + savingsObj.getBalance);
// console.log("Savings account  Interest : " + savingsObj.CalculateInterest());
// savingsObj.credit(savingsObj.CalculateInterest());
// console.log("Savings account after adding Interest : " + savingsObj.getBalance);

// console.log("-------------------Checking Account---------------------------");

// let checkingObj = new CheckingAccount(amount, 20);
// console.log("Initial Balance: " + checkingObj.getBalance);
// checkingObj.credit(credit);
// console.log("Current Balance in Checking account after credit: " + checkingObj.getBalance);
// checkingObj.debit(50);
// console.log("Current Balance in Checking account after debit: " + checkingObj.getBalance);
