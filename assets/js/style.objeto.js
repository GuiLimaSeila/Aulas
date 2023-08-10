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
/*
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
*/

/*class Calculator {
    add(a, b){
        return a + b;
    }
    multiply(a, b){
        return a * b;
    }
    subtract(a, b){
        return a - b;
    }
}

const calculator = new Calculator();

const sumResult = calculator.add(5, 3);
console.log("Sum:", sumResult);

const multiplicationResult = calculator.multiply(4, 2);
console.log("Multiplication:", multiplicationResult);

const subtractionResult = calculator.subtract(10, 4);
console.log("Subtraction:", subtractionResult); */

 /*class Witch {

    constructor(name, patron, house, colorEyes) {
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }

    getName() {
        return `O nome do bruxo(a) é: ${this.name}`;
    }
    getHouse() {
        return `Ele(a) está na casa: ${this.house}`;
    }
    getPatron() {
        return `Seu patrono é: ${this.patron}`
    }
}

const witch1 = new Witch('Harry Potter', 'Deer', 'Grynffindor', 'green')

class TypeWitch extends Witch{
    constructor(name, patron, house, colorEyes, typeWitch){
        super(name, patron, house, colorEyes);
        this.typeWitch = typeWitch;
    }

    getTypeWitch() {
        if (this.typeWitch === 'P'){
            return "Este bruxo é sanue puro";
        } else if (this.typeWitch === 'M'){
            return "Este bruxo é Mestiço";
        } else {
            return "Este é um trouxa";
        }
    }
}

const harry = new TypeWitch('Harry Potter', 'Deer', 'Grynffindor', 'green', 'M');
console.log(harry); 

class CamaraSecreta {
    constructor(name, pwd){
        this.name = name;
        let _pwd = pwd;

        this.verifyPwd = (pwdInput) => {
            return pwdInput == _pwd;
        }
        this.acessChamber = () => {
            let pwdInput = prompt("Digite a Senha");
            if(this.verifyPwd(pwdInput)){
                console.log(`Bem-Vendo ${this.name}`)
            } else{
                console.log("SAAAAAAAAAAAAAI")
            }
        }
    }
    showName(){
        console.log(`Nome do bruxo: ${this.name}`);
    }
}

const myAccess1 = new CamaraSecreta("Harry Poter", "senha123")

myAccess1.showName();

myAccess1.name = "HP";
myAccess1.pwd = "123";

myAccess1.acessChamber(); */