// Define a function called createUser that takes a name (string) and age (number),
// and returns an object with name and age properties.
// Use typeof to assign the same type as createUser to the myCreateUser variable.

function createUser(name: string, age: number): { name: string, age: number } {
  return { name, age };
}

const myCreateUser = function(name, age) {
  
}

console.log(myCreateUser("John", 25)); // Expected output: { name: "John", age: 25 }