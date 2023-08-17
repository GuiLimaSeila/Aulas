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

    addCategory(name) {
        const id = this.nextcategoryID++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductService {
    constructor() {
        this.products = [];
        this.nextproductID = 0;
    }

    addProduct(name, price, category) {
        const id = this.nextproductID++;
        const product = new Product(id, name, price, category);
        category.products.push(product);
        this.products.push(product);
    }
}

const categoryList = new CategoryService()
const productList = new ProductService()


function createCategory() {
    const categoryName = document.getElementById("categoryName").value;
    categoryList.addCategory(categoryName);
    console.log(categoryList.categories);
    cleanFormFields()
}

function createProduct() {
    const productName = "Bolo";
    const productPrice = 20;
    const productCategory = categoryList.categories[0];

    productList.addProduct(productName, productPrice, productCategory)
    console.log(productList.products)
    displayCategoriesAndProducts()
    cleanFormFields()
}

function cleanFormFields() {
    document.getElementById("categoryName").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";
}

function displayCategoriesAndProducts() {
    let content = "";

    categoryList.categories.forEach((category) => {
        content += `
        <li>
<div class="categoriesList">
<span><b>Categoria:</b> ${category.name}</span>
<div>
<button class="editeButton"><i class="fa-solid fa-pen"></i></button>
<button class="deleteButton"><i class="fa-solid fa-trash"></i></button>
</div>
</div>
        </li>
        <ul class="productsListByCategory">`;
        category.products.forEach((product) => {
            content += `
            <li>
            <div class="productsList">
            <span><b>Produto:</b> ${product.name} - <b>Preço:</b> ${product.price}</span>
<div>
<button class="editeButton"><i class="fa-solid fa-pen"></i></button>
<button class="deleteButton"><i class="fa-solid fa-trash"></i></button>
</div>
</div>`

        
    });
    content += `
    </ul>
    </li>`;
});
    document.getElementById("categoriesList").innerHTML = content;
}
