class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextcategoryID = 0;
    }

    addCategory(name){
        const id = this.nextcategoryID ++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductService{
    constructor(){
        this.products = [];
        this.nextproductID = 0; 
    }

    addProduct(name, price, category){
        const id= this.nextproductID ++;
        const product = new Product(id, name, price, category);
        category.products.push(product);
        this.products.push(product)
    }
}

const categoryList = new CategoryService()
const productList = new ProductService()

function createCategory(){
    const categoryName = "Doce";
    const productName = "Kit-Kat";

    categoryList.addCategory(categoryName);
    productList.addProduct(productName);

    console.log(categoryList.categories)
    console.log(productList.products)
}