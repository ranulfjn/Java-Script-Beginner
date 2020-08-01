var tip = [];

var bill = [124, 48, 268];

bill.forEach(tipCalculator);
function tipCalculator(bill, index) {
    if (bill < 50) {
        tip[index] = bill * 0.2;
    }
    if (bill > 50 && bill <= 200) {
        tip[index] = bill * 0.15;
    }
    if (bill > 200) {
        tip[index] = bill * 0.1;
    }
}

var finalPrice = [];
finalPrice[0] = tip[0] + bill[0];
finalPrice[1] = tip[1] + bill[1];
finalPrice[2] = tip[2] + bill[2];


console.log("Bill :", bill);
console.log("Tip :", tip);
console.log("final price :", finalPrice);



