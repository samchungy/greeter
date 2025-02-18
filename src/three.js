// Falsy Values

false; //falsy
('false'); //truthy
-1; //truthy
0; //falsy
undefined; //falsy
null; //falsy
{
} //truthy
[]; //truthy
(''); //falsy

// if ('') {
//   console.log('foo');
// }

const a = 1;
const b = 2;

if (a === b) {
  console.log('truthy');
}
