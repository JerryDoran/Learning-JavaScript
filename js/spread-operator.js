const udemy = 'udemy';

// Get all the letters
const letters = [...udemy];
// console.log(letters);

const boys = ['steve', 'tony', 'bruce'];
const girls = ['natasha', 'hope'];

const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

const newFriends = [...friends];
console.log(newFriends);
newFriends[0] = 'karen';
console.log(newFriends);
console.log(friends);

const person = { name: 'reed', job: 'scientist' };

const newPerson = { ...person, city: 'new york', name: 'banner' };
console.log(person);
console.log(newPerson);
