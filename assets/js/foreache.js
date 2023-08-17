console.error("Empresas");
const companies = ["Apple", "Google", "Facebook"];

companies.forEach(company => {
    console.log(`Hey, ${company}`);
});

console.error("Números pares");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach((number, index) => {
    if (number % 2 == 0) {
        console.log("Isso é um número par: " + number);
        console.log("Esse é seu Index: " + index)
    }
});

console.error("Marcas de carros e seus modelos");
const cars = [];

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}


function moreCars() {
    let brand = document.getElementById("addBrand").value;
    let model = document.getElementById("addModel").value;
    const nuevo = new Car(brand, model)
    cars.push(nuevo)

    cars.forEach((car) => {
        console.log(`Marca: ${car.brand} - Modelo: ${car.model}`);
    });
    cleanFields()
}

function cleanFields() {
    document.getElementById("addBrand").value = "";
    document.getElementById("addModel").value = "";

}

function removeCars(index) {
    if (cars.length <= 1 ){
        console.log(`Não a mais carros na lista`);
    }else{
    cars.splice(index, 1);
    cars.forEach((car) => {
        console.log(`Marca: ${car.brand} - Modelo: ${car.model}`);
    });
    }
}