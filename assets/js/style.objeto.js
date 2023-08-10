/*let personSimple = "John Doe";

const personObject = {
firstName : "John",
lastName : "Doe",
age : 50,
eyeColor : "blue"
}

personObject.age = 10; //Mudando para 10

console.log(personSimple);
console.log(personObject); */

/*class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);

    }
}
const user1 = new User('João', 30);
    user1.introduce();
*/

class Pizza {
    constructor(base, sauce, toppings, cheese){
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }


getDescription() {
    return `A delicious pizza with ${this.base} base, ${this.sauce} sauce, ${this.toppings} toppings, and a lots of cheese.`;
}
}

const myPizza = new Pizza ('traditional', 'tomato', 'pepperoni', 'mozzarella')
console.log(myPizza.getDescription());
