const texRate = .08;
const phonePrice = 10000;
const accessoryPrice = 500;
const spendingThreshold = 1000;

let bankAccountBalance = 30000;


function calculateTax(price, taxRate) {
    return price * taxRate;
}

const tax = calculateTax(phonePrice, texRate);

console.log(tax);