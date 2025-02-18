import 'skuba-dive/register';

// TypeScript

const str: string = 'hello world';

const age: number = 9;
const pi: number = 3.14;

const boolean: boolean = true;
const array: string[] = ['hello', 'world'];

const menu: Record<string, number> = {
  friedRice: 15,
  friedChicken: 20,
};

type MenuItem = {
  menu: string;
  price: number;
};

type ExtendedMenuItem = MenuItem & {
  sugarLevels: string[];
};

interface MenuItem2 {
  menu: string;
  price: number;
}

interface ExtendedMenuItem2 extends MenuItem2 {
  sugarLevels: string[];
}

const menuItem: MenuItem = {
  menu: 'fried rice',
  price: 30,
};

const menuItem2: MenuItem2 = {
  menu: 'fried rice',
  price: 30,
};

const extendedMenuItem2: ExtendedMenuItem2 = {
  menu: 'fried rice',
  price: 30,
  sugarLevels: ['yes'],
};

const extendedMenuItem: ExtendedMenuItem = {
  menu: 'fried rice',
  price: 30,
  sugarLevels: ['yes'],
};

type Action = 'add' | 'remove';

const action: Action = 'add';

type StringOrBoolean = string | boolean;

const stringOrBoolean: StringOrBoolean = '';

type Review = {
  title: string;
};

type State = {
  reviews: Review[];
};

const state: State = {
  reviews: [],
};

type AddAction = {
  action: 'add';
  payload: { title: string; rating: number };
};

type RemoveAction = {
  action: 'remove';
  payload: { title: string };
};

type ListAction = {
  action: 'list';
};

type ReducerAction = AddAction | ListAction | RemoveAction;

const reducer = (reducerAction: ReducerAction) => {
  switch (reducerAction.action) {
    case 'add':
      state.reviews = [...state.reviews, reducerAction.payload];
      break;
    case 'remove':
      state.reviews = state.reviews.filter(
        (review) => review.title !== reducerAction.payload.title,
      );
      break;
    case 'list':
      console.log(state.reviews);
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
reducer({
  action: 'add',
  payload: { title: 'another one', rating: 3 },
});
console.log(state);
reducer({ action: 'remove', payload: { title: 'this course is so good' } });

reducer({ action: 'list' }); // add this if you finish
