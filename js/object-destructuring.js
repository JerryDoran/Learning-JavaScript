const bob = {
  first: 'bob',
  last: 'smith',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

const {
  first,
  last: lastName,
  city,
  siblings: { sister: mySister },
} = bob;

console.log(first, lastName, city, mySister);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);

// const printPerson = (person) => {
//   const { first, last } = person;
//   console.log(first, last);
// };

const printPerson = ({ first, last, city, siblings: { sister } }) => {
  console.log(first, last, sister);
};

printPerson(bob);
