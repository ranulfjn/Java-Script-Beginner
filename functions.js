function atmEx(accNo, balance) {
    let balanceNew = balance;
    return {
        withdrawal: function (amount) {

            if (balanceNew - amount <= 0) {
                console.log("LOW balance")
            } else {
                balanceNew -= amount;
                console.log("Amount withdrawn Successfully");
            }
        },
        deposit: function (amount) {
            if (amount > 0) {
                balanceNew += amount;
                console.log("Amount deposited Successfully");
            } else {
                console.log("Amount Less than 0");
            }

        },
        getAccNo: function () {
            return accNo;
        },
        getBalance: function () {
            return balanceNew;
        }
    }
}
let myAtm = atmEx(1234, 100);
myAtm.deposit(10);
console.log("Balance is: ", myAtm.getBalance());
console.log("Account number is: ", myAtm.getAccNo());
myAtm.withdrawal(100);
console.log("Balance is: ", myAtm.getBalance());
console.log("Account number is: ", myAtm.getAccNo());
myAtm.deposit(0);
console.log("Balance is: ", myAtm.getBalance());
console.log("Account number is: ", myAtm.getAccNo());
myAtm.withdrawal(50);
console.log("Balance is: ", myAtm.getBalance());
console.log("Account number is: ", myAtm.getAccNo());



