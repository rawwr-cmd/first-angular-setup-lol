var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const MenuItem = (itemId) => (target) => {
    target.prototype.id = itemId;
};
let Pizza = class Pizza {
};
Pizza = __decorate([
    MenuItem('ytuwyfuwd875675')
], Pizza);
let Hamburger = class Hamburger {
};
Hamburger = __decorate([
    MenuItem('89')
], Hamburger);
const pizza = new Pizza();
const hamburger = new Hamburger();
console.log(pizza.id);
console.log(hamburger.id);
