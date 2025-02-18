const state = {
  reviews: [],
};

// TODO: you can remove this eslint rule when you start coding and using the `payload`
// eslint-disable-next-line no-unused-vars
const reducer = ({ action, payload }) => {
  switch (action) {
    case 'add':
      state.reviews = [...state.reviews, payload];
      break;
    case 'remove':
      state.reviews = state.reviews.filter(
        (review) => review.title !== payload.title,
      );
      break;
    default:
      throw new Error('blah');
  }
};

// We can just call the reducer here so we don't have to deal with getting user input.
reducer({
  action: 'add',
  payload: { title: 'this course is so good', rating: 5 },
});
console.log(state);
reducer({ action: 'remove', payload: { title: 'this course is so good' } });
console.log(state);
