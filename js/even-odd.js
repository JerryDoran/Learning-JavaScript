// const sum = (number) => {
//   // convert number to string...can also use number + ''
//   const numbers = [...number.toString()];
//   const result = numbers.reduce((total, item) => {
//     return total + parseInt(item);
//   }, 0);
//   return result % 2 === 0 ? 'EVEN' : 'ODD';
// };

// Short version
const sum = (number) =>
  [...number.toString()].reduce((total, item) => total + parseInt(item), 0) %
    2 ===
  0
    ? 'EVEN'
    : 'ODD';

console.log(sum(123));
