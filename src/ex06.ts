// Create a function called calculate.
// This function should take two numbers and a callback function.
// The callback function will perform a mathematical operation (like add, subtract) on the two numbers.
// Call calculate with different mathematical operations.

function calculate(a, b, operation) {
  return operation(a, b);
}

// Example usage with different operations.
console.log(calculate(10, 5, (x, y) => x + y)); // Expected output: 15 (Addition)
console.log(calculate(10, 5, (x, y) => x - y)); // Expected output: 5 (Subtraction)
console.log(calculate(10, 5, (x, y) => x * y)); // Expected output: 50 (Multiplication)
console.log(calculate(10, 5, (x, y) => x / y)); // Expected output: 2 (Division)