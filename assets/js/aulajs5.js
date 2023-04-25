function loopsemloop() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
    /* console.log('0')
     console.log('1')
     console.log('2')
     console.log('3')
     console.log('4')
     console.log('5')
     console.log('6')
     console.log('7')
     console.log('8')
     console.log('9')
     console.log('10')
 }*/
}
function loopcom() {
    let num1 = Number(document.getElementById("num1").value);
    if (num1 > 20 || num1 < 0) {
        console.log("bota um numero certo 😡");
    } else {
        for (let i = 0; i <= num1; i++) {
            console.log(i);
        }
    }
}
function array() {
    let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < numeros1.length; i++) {
        if (numeros1[i] % 2 == 0) {
            console.log("Pares");
            console.log(numeros1[i]);
        }
    }
    for (let i = 0; i < numeros1.length; i++) {
        if (numeros1[i] % 2 > 0) {
            console.log("Impares");
            console.log(numeros1[i]);
        }
    }
}
