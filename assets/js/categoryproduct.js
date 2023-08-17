class Category{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product {
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}