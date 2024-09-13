// Sum two numbers
function addNumbers(a, b) {
  return a + b;
}
function subNumbers(a, b) {
  return a - b;
}
// Example usage
const number1 = 30;
const number2 = 20;
const sum = addNumbers(number1, number2);
const sub = subNumbers(number1, number2);
console.log(`The sum of ${number1} and ${number2} is ${sum}.`);
console.log(`The sub of ${number1} and ${number2} is ${sub}.`);

// Log a message to the console
function logMessage(message) {
  console.log(`Message: ${message}`);
}

// Example usage
logMessage("Hello, this is a test message!");
