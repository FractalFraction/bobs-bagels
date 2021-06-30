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

console.log('remove one item from empty basket')
//Setup
basket = new Basket()
basket.add('Pasta');

//Execute
result = basket.remove('Pasta')
//Verify
console.log(assertEquals(basket.items.length, 0))
console.log(assertEquals(basket.items.includes('Pasta'), false))





console.log('add item to full basket')
//Setup
basket = new Basket()
basket.add('Pasta');
basket.add('Pasta');
basket.add('Pasta');
basket.add('Pasta');

//Execute
result = basket.add('Potato')

//Verify
console.log(assertEquals(basket.items.length, 4))
console.log(assertEquals(basket.items.includes('Potato'), false))