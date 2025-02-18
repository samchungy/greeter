import { setTimeout } from 'node:timers/promises';

// let value = 'string';
// const promise = setTimeout(5000)
//   .then(() => {
//     console.log('waited');
//     value = 'a';
//     console.log(value);
//     throw new Error('something went wrong!');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// console.log(promise);

const callApi = async (timeout) => {
  await setTimeout(timeout);
  console.log(`finished ${timeout} operation`);
  return 'data';
};

const run = async () => {
  try {
    const [data, data2] = await Promise.all([callApi(1000), callApi(2000)]);

    const data3 = await callApi(data.id);
    console.log(data, data2);
  } catch (error) {
    console.error(error);
  }
};

run();

// Pending
// Fulfilled
// Rejected

// await
