//Function that takes a word and checks if its true or false to be a palidrome
function isPalindrome(word) {
  word = word.toLowerCase().replace(/[a-z0-9]/g, "");
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}
let word = "eye";
console.log(isPalindrome(word));

//Function that takes a number and checks if its odd
let N = 100;
let isOdd = (number) => {
  if (number > 0 && number < 1000000) {
    if (number % 2 !== 0) {
      return "odd number";
    }
  }
  return "even number or out of range";
};
console.log(isOdd(N));

//Function to return fibonacie series

let a = 0;
let b = 1;
let n = 10;
let seriesValues = [a, b];
function fibonancieSeries(n) {
  for (i = 0; i < n; i++) {
    let nextNumber = a + b;
    a = b;
    b = nextNumber;
    seriesValues.push(nextNumber);
  }
  console.log(seriesValues);
}
fibonancieSeries(n);

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
  }
  speak() {
    console.log(`The name of this bank ${this.bankName}`);
  }
}
let bank = new Bank("equity");
bank.speak();
