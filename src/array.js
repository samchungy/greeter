// Arrays

// Iterating

const basket = [
  'apple',
  'orange',
  'banana',
  'pear',
  'watermelon',
  'kiwi',
  'orange',
];

//

// const logItem = (item, i) => {
//   console.log(item, i);
// };

// function logItemFunction(item, i) {
//   console.log(item, i);
// }

// basket.forEach(logItemFunction);

// Use an array method to "find" the watermelon.

console.log(basket.find((val) => val === 'watermelon'));

// Filter out oranges and watermelons from the list
// [
//   'apple',
//   'banana',
//   'pear',
//   'kiwi',
// ]
const filteredBasket = basket.filter(
  (item) => !['orange', 'watermelon'].includes(item),
);

console.log(filteredBasket);

// Produce an array with only the first letter of each item in an array.
// [
//   'a',
//   'o',
//   'b',
//   'p',
//   'w',
//   'k',
//   'o',
// ];
const firstLetterBasket = basket.map((item) => item[0]);
console.log(firstLetterBasket);

// Give me the total of the items in the list
const count = [1, 2, 3, 4, 5, 6];
const total = count.reduce((accumulator, current) => {
  // todo
  return accumulator + current;
}, 0);
console.log(total); // 21

// Product a count of all the items in the basket.
const reducedBasket = basket.reduce((accumulator, current) => {
  if (accumulator[current]) {
    accumulator[current] = accumulator[current] + 1;
  } else {
    accumulator[current] = 1;
  }
  return accumulator;
}, {});

console.log(reducedBasket);
