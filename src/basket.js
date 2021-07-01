class Basket {
    constructor(capacity) {
        this.items = [];
        this.capacity = capacity;
    }

    add (item) {
        return (this.items.length >= this.capacity) ? this.items : this.items.push(item)
    }

    remove (item) {
        const indexItem = this.items.indexOf(item);
        this.items.splice(indexItem, 1);
        return this.items
    }
    
}

module.exports = Basket;