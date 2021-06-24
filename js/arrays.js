const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 }
];

const numbers = [1, 2, 3, 4, 5];

// FILTER METHOD
const filteredItems = items.filter(item => item.price <= 100);
// Give me all the items in the array that are less than or equal to 100
// This will return a true or false value depending if the item will be put in the new
// filtered array or not.
// return item.price <= 100;

console.log(filteredItems);

// MAP METHOD - ALLOWS YOU TO TAKE ONE ARRAY AND CONVERT IT TO A NEW ARRAY SO THAT THE ITEMS IN THE
// NEW ARRAY ARE SLIGHTLY DIFFERENT
const itemNames = items.map(item => item.name);

console.log(itemNames);

// FIND METHOD - ALLOWS YOU TO TAKE FIND A SINGLE OBJECT/VALUE IN AN ARRAY
// RETURNS THE FIRST ITEM THAT EVALUATES TO TRUE BASED ON THE SEARCH VALUE YOU PASSED IN
const foundItem = items.find(item => item.name === 'Book');

console.log(foundItem);

// FOREACH METHOD
items.forEach(item => console.log(item.name));

// SOME METHOD - WILL RETURN A TRUE OR FALSE VALUE IF AT LEAST ONE ITEM MEETS THE SEARCH VALUE
const hasInexpensiveItems = items.some(item => item.price <= 100);

console.log(hasInexpensiveItems);

// SOME METHOD - WILL RETURN A TRUE OR FALSE VALUE IF ALL ITEMS MEET THE SEARCH VALUE
const hasAllInexpensiveItems = items.every(item => item.price <= 100);

console.log(hasAllInexpensiveItems);

// REDUCE METHOD - WILL RETURN A NEW ARRAY BASED ON THE COMBINATION OF COMPUTATIONS THAT YOU PERFORMED
// ON THE ARRAY.  TAKES TWO PARAMETERS -- AN ACCUMULATOR THAT KEEPS TRACK OF THE CALCULATION THAT
// YOU ARE PERFORMING ON EACH ITEM AND EACH ITEM IN THE ARRAY, AND ALSO A STARTING POINT PARAMETER VALUE
// FOR THE ACCUMULATOR VARIABLE

const total = items.reduce((acc, item) => {
  // This line returns the value to the acc parameter each time it loops through an item in the array.
  return item.price + acc;
}, 0);

console.log(total);

// INCLUDES METHOD - WILL RETURN A TRUE OR FALSE VALUE
const includesTwo = numbers.includes(4);

console.log(includesTwo);
