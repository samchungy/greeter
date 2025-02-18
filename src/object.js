export const obj = {
  a: 1,
  'a-': 1,
  b: 'asdasd',
  c: {
    d: '1',
  },
  e: ['e'],
};

export const obj2 = {
  ...obj,
  a: true,
};

export default hello = '';

// obj2.c.d = true;
// obj2.a = false;
// obj2.e[0] = 'f';

// console.log(
//   Object.entries(obj).map((item) => {
//     return {
//       key: item[0],
//       value: item[1],
//     };
//   }),
// );

// const func = ({ a, b, ...others }) => {
//   console.log(a, b, others);
// };

// func({ a: 1, b: 2, c: 3, d: 4 });

// const array = [1, 2, 3];
// const clonedArray = [...array];
// array[0] = 0;

// console.log(array, clonedArray);

// const func2 = (name, age, isTall) => {
//   console.log(name, age, isTall);
// };

// func2('a', 1, true);

// const func3 = ({ name, age, isTall }) => {
//   console.log(name, age, isTall);
// };

// func2({ name: 'a', age: 1, isTall: true });

// const deepObject = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
// };

// console.log(deepObject.a.b.c);

// if (deepObject.a && deepObject.a.d) {
//   console.log(deepObject.a.d.c);
// }

// const hirerContactDetails = {
//   addresses: {
//     homeAddress: undefined,
//     workAddress: undefined,
//   },
// };

// const country =
//   hirerContactDetails.addresses.homeAddress?.country ||
//   hirerContactDetails.addresses.workAddress?.country;

// console.log(country);
