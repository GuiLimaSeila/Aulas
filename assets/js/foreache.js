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
const cars = [
    {
        marca: "Ford",
        modelo: "Focus",
    },
    {
        marca: "BMW",
        modelo: "BMW Z4",
    },
    {
        marca: "Fiat",
        modelo: "Palio",
    },
    {
        marca: "Audi",
        modelo: "A3",
    },
];

cars.forEach((car) => {
    console.log(`Marca: ${car.marca} -
    Modelo: ${car.modelo}`);
});