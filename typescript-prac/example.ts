const addNumber = (a: number, b: number): number | boolean => a + b;
addNumber(1, 2);

// Arrays
// let items: string[] | number[] = [null, undefined, 89, 'hi hello'];
let items = [null, undefined, 89, 'hi hello'];

// Objects

interface IAccount {
  name: string;
  age: number;
  status?: string;
  deposit?: (amount: number) => void;
}

const account: IAccount = {
  name: 'Luis',
  age: 70,
};

let accounts: IAccount[];

accounts = [
  {
    name: 'Luis',
    age: 70,
  },
];

class InvestmentAccount implements IAccount {
  constructor(public name: string, public age: number) {}
  private withdraw() {}
}
