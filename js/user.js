// Export the user class and function from the user.js file

export default class User {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

export function printName(user) {
  console.log(`User's name is ${user.name}`);
}

export function printAge(user) {
  console.log(`User is ${user.age} years old`);
}
