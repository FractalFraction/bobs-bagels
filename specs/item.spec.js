const assertEquals = require('../src/test-framework.js')
const Item = require("../src/item.js")

console.log("--- Start of Item Class Tests ---");
let item,name,price

//--------------------------------------------------
console.log('Test checkPrice() works')
//Setup
name = 'Spinach';
price = 1.20;
item = new Item(name,price);
//Execute
item.checkPrice()
//Verify
console.log(assertEquals(item.checkPrice(), price))

//--------------------------------------------------
console.log('Test getName() method works')
//Setup
name = 'Spinach';
price = 1.20;
item = new Item(name, price);
//Execute
item.checkPrice()
//Verify
console.log(assertEquals(item.checkPrice(), price))

//--------------------------------------------------

console.log("--- End of Item Class Tests ---");