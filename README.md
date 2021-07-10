# bobs-bagels-Grant
```
# Part 1
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket
```

|Object |Properties| Messages | Output|
| --- | --- | --- | --- |
| Basket | items @Array[@String]  | add(@String) |items @Array|
| | |remove (@String) | |
| | | |

```
# Part 2
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. In the same way, I want to know if I try to add an item with the same ID already in my basket.
```
|Object |Properties| Messages | Output| Context |
| --- | --- | --- | --- |
| Basket | items @Array[@String] | add(@String) |items @Array|
| |  |remove (@String) | |
| | maxLength @Number| |
| | | |

```
# Part 3
As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket
```

|Object |Properties| Messages | Output| Context |
| --- | --- | --- | --- |
| Basket | items @Array[@Item]  | add(@String) |items @Array|
| |  |remove (@String) | |
| | maxLength @Number| |
| Item | price @Number | checkPrice(price @Number) || 
| Checkout | total @Number | sum(@ Basket) |gets the total of all of items in the basket|total @Number|