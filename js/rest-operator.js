const fruits = ['apple', 'orange', 'lemon', 'banana']
const [first, ...restOfFruits] = fruits
console.log(first, restOfFruits);

const specificFruit = restOfFruits.find(fruit => fruit === 'lemon')
console.log(specificFruit);

const person = {firstName: 'Steve', lastName: 'Rogers', job: 'developer'}
const {firstName, ...rest} = person;
console.log(firstName, rest);

const getAverage = (name, ...scores) =>{
  console.log(name);
  console.log(scores);
  const average = scores.reduce((total, item)=> total += item, 0)/scores.length
  console.log(average);
}

// getAverage(person.firstName,89,75,90)

const testScores = [61, 50,95, 99]
getAverage(person.firstName,...testScores)