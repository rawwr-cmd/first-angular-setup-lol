const MenuItem = (itemId: string) => (target: Function) => {
  target.prototype.id = itemId;
};

@MenuItem('ytuwyfuwd875675')
class Pizza {
  id!: string;
}

@MenuItem('89')
class Hamburger {
  id!: string;
}

const pizza = new Pizza();
const hamburger = new Hamburger();

console.log(pizza.id);
console.log(hamburger.id);
