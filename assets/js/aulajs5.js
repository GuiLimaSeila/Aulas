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
    let par = [];
    let pmpar = [];

    for (let i = 0; i < numeros1.length; i++) {
        if (numeros1[i] % 2 == 0) {
            par.push(numeros1[i]);
        }
    }
    for (let i = 0; i < numeros1.length; i++) {
        if (numeros1[i] % 2 != 0) {
            pmpar.push(numeros1[i]);
        }
    }
    console.log(`Impares: ${pmpar}`);
    console.log(`Pares: ${par}`);
}
function novoarray() {
    let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let maiorNumero = 0;
    let menorNumero = numeros1[7];
    let soma = 0;
    let media = 0;

    for (let i = 0; i < numeros1.length; i++) {
        var rato = numeros1[i]
        if (rato > maiorNumero) {
            maiorNumero = rato;
        }
        if (rato < menorNumero) {
            menorNumero = rato;
        }
        soma += rato
        media = soma / 10
    }
    console.log(`Numeros: ${numeros1}`);
    console.log(`Maior numero: ${maiorNumero}`);
    console.log(`Menor Numero: ${menorNumero}`);
    console.log(`Soma: ${soma}`);
    console.log(`Média: ${media}`);
}
function tabuas() {
    let num1 = Number(document.getElementById("nuke").value);
    for (let i = 1; i <= 10; i++) {
        var tabuada = i * num1;
        if (num1 > 10 || num1 < 1) {
            console.log("bota um numero certo 😡");
        } else {
            console.log(`Tabuada do ${num1} X ${i}: ${tabuada}`);
        }
    }
}
function primo() {
    let num1 = Number(document.getElementById("nukes").value);
    let divi = 0;
    for (let i = 1; i <= num1; i++)
        if (num1 % i == 0) {
            divi++;
        }
    if (divi == 2) {
        console.log("é primo");
    }
    else {
        console.log("não é primo");
    }

}
function entre() {
    let num1 = Number(document.getElementById("nukes1").value);
    let num2 = Number(document.getElementById("nukes2").value);
    let a = []

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            a.push(i);
        }
    } else {
        for (let i = num2; i <= num1; i++) {
            a.push(i);
        }
    }
    console.log(a)
}
function divisores() {
    let num1 = Number(document.getElementById("nukes3").value);
    let divi = [];
    for (let i = 1; i <= num1; i++)
        if (num1 % i == 0) {
            divi.push(i);
        }
    console.log(divi)

}