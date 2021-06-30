class Basket {
    constructor() {
        this.items = [];
        let maxLength = 4;
    }

    add (item) {
        return (this.items.length >= 4) ? this.items : this.items.push(item)
    }

    remove (item) {
        const indexItem = this.items.indexOf(item);
        this.items.splice(indexItem, 1);
        return this.items
    }
    
}

module.exports = Basket;