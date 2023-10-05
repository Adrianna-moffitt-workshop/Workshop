// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
  {
    name: "cappuccino",
    price: 8,
    seasonal: false,
  },
  {
    name: "espresso",
    price: 5,
    seasonal: false,
  },
  {
    name: "latte",
    price: 5,
    seasonal: false,
  },
  {
    name: "affogato",
    price: 9,
    seasonal: true,
  },
  {
    name: "macchiato",
    price: 6,
    seasonal: false,
  },
  {
    name: "americano",
    price: 7,
    seasonal: false,
  },
  {
    name: "iced coffee",
    price: 6,
    seasonal: false,
  },
  {
    name: "frappe",
    price: 8,
    seasonal: false,
  },
  {
    name: "cuban espresso",
    price: 10,
    seasonal: true,
  },
];

//Prints drink names in an array
const allDrinks = coffeeMenu.map((drink) => drink.name);
console.log(allDrinks);

//Prints drinks <= $5
const under5Drinks = coffeeMenu
  .filter((drink) => drink.price <= 5)
  .map((drink) => drink.name);
console.log(under5Drinks);

//Prints drinks at an even cost
const evenPricedDrinks = coffeeMenu
  .filter((drink) => drink.price % 2 === 0)
  .map((drink) => drink.name);
console.log(evenPricedDrinks);

//Print total as if I ordered one of everything
const priceCoffeeMenu = coffeeMenu.reduce(
  (total, drink) => total + drink.price,
  0
);
console.log(priceCoffeeMenu);

//Prints Seasonal drinks
const seasonalDrinks = coffeeMenu
  .filter((drink) => drink.seasonal)
  .map((drink) => drink.name);
console.log(seasonalDrinks);

//Prints seasonal drinks with message "with imported beans"
const seasonalDrinksMessage = seasonalDrinks.map(
  (drink) => `${drink} with imported beans`
);
console.log(seasonalDrinksMessage);
module.exports = coffeeMenu;
