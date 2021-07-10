const assertEquals = require('../src/test-framework.js')
const Basket = require('../src/basket.js')
const Item = require('../src/item.js')

let basket, item, result

console.log("--- Start of Basket Class Tests ---");
//--------------------------------------------------
console.log('add one item to empty basket')
//Setup
basket = new Basket(5)
item = new Item('Spinach',1.99)
//Execute
result = basket.add(item)

//Verify
console.log(assertEquals(basket.items.length, 1))
console.log(assertEquals(basket.items[0].getName(),'Spinach'))
//--------------------------------------------------
console.log('remove one item from empty basket')
//Setup
basket = new Basket(5)
basket.add('Pasta');

//Execute
result = basket.remove('Pasta')
//Verify
console.log(assertEquals(basket.items.length, 0))
console.log(assertEquals(basket.items.includes('Pasta'), false))
//--------------------------------------------------
console.log('add item to full basket')
//Setup
basket = new Basket(4)
basket.add('Pasta');
basket.add('Pasta');
basket.add('Pasta');
basket.add('Pasta');

//Execute
result = basket.add('Potato')

//Verify
console.log(assertEquals(basket.items.length, 4))
console.log(assertEquals(basket.items.includes('Potato'), false))
//--------------------------------------------------
// Construct a basket with a specified capacity
console.log('Create a basket with a specified capacity')
//Setup
const capacity = 5;

//Execute
basket = new Basket(capacity);

//Verify
console.log(assertEquals(basket.capacity, capacity))

//--------------------------------------------------
console.log('Construct two baskets, one with a small capacity and one with a large capacity')
//Setup
const capacitySmall = 1;
const capacityLarge = 3;

//Execute
basketSmall = new Basket(capacitySmall);
basketLarge = new Basket(capacityLarge);

basketSmall.add('Pasta');
basketSmall.add('Pasta');
basketLarge.add('Pasta');
basketLarge.add('Pasta');

//Verify
console.log(assertEquals(basketSmall.items.length, 1))
console.log(assertEquals(basketLarge.items.length, 2))

//--------------------------------------------------
console.log("--- End of Basket Class Tests ---");