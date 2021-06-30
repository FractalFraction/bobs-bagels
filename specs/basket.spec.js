const assertEquals = require('../src/test-framework.js')
const Basket = require('../src/basket.js')

let basket, result

console.log('add one item to empty basket')
//Setup
basket = new Basket()
//Execute
result = basket.add('Spinach')
//Verify
console.log(assertEquals(basket.items.length, 1))
console.log(assertEquals(basket.items.includes('Spinach'), true))