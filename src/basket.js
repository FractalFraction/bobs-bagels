class Basket {
    constructor() {
        this.items = [];
    }

    add (item) {
        return this.items.push(item);
    }

    remove (item) {
        const indexItem = this.items.indexOf(item);
        this.items.splice(indexItem, 1);
        return this.items
    }
    
}

module.exports = Basket;