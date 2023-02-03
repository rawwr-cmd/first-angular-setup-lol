const addNumber = (a: number, b: number): number | boolean => a + b;
addNumber(1, 2);

// Arrays
// let items: string[] | number[] = [null, undefined, 89, 'hi hello'];
let items = [null, undefined, 89, 'hi hello'];

// Objects
const account: {
  name: string;
  age: number;
  status?: string;
} = {
  name: 'Luis',
  age: 70,
};

let accounts: {}[];

accounts = [
  {
    name: 'Luis',
    age: 70,
  },
];
