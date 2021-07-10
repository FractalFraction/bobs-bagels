class Item {
    constructor(name,price){
        this._name = name
        this._price = price
    }

    getName() {
        return this._name
    }

    checkPrice() {
        return this._price
    }
}

module.exports = Item