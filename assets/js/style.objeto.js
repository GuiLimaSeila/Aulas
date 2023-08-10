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

getTimerBase(){
    if(this.base == 'traditional'){
        return 10;
    } else if (this.base == "integral"){
        return 15;
    } else{
        return 'This base does not exist!'
    }
}
getTimerSauce(){
    if(this.sauce == 'tomato'){
        return 4;
    } else if (this.sauce == 'pesto'){
        return 6;
    } else{
        return 'This sauce does not exist!'
    }
}
getTimerToppings(){
    if(this.toppings == 'pepperoni'){
        return 2;
    } else if (this.base == 'bacon'){
        return 3;
    } else{
        return 'This toppings does not exist!'
    }
}
getTimerCheese(){
    if(this.cheese == 'mozzarella'){
        return 4;
    } else if (this.cheese == 'cheddar'){
        return 2;
    } else{
        return 'This cheese does not exist!'
    }
}

}

const myPizza = new Pizza ('traditional', 'tomato', 'pepperoni', 'mozzarella')
console.log(myPizza.getDescription());
let totalTime = myPizza.getTimerBase() + myPizza.getTimerSauce() + myPizza.getTimerToppings() + myPizza.getTimerCheese();
console.log('Time to cook the pizza = ' + totalTime + ' minutes')
