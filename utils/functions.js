function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}

function isEven(n) {
  return n % 2 === 0;
}

function factorial(n) {
  if (n < 0) throw new Error('Negative numbers are not allowed');
  return n === 0 ? 1 : n * factorial(n - 1);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  isEven,
  factorial
};
