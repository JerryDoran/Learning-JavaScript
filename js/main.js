// Import default objects
import User from '/user.js';

// Import non-default functions
import { printName as printUserName, printAge } from '/user.js';

const user = new User('Bob', 21);

console.log(user);

printUserName(user);
printAge(user);

// TODO: make a function here