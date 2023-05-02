let nome = prompt("bota um numero")
let i = [];
let soma = 0;
let div = 0;
let a = 0
let maiorNumero = 0;
let menorNumero = i[a];

while (nome != "a") {
    a++
    i.push(nome);
    nome = prompt("bota um numero")
    div++
    var rato = i[a]
    soma += rato
    if (rato > maiorNumero) {
        maiorNumero = rato;
    }
    if (rato < menorNumero) {
        menorNumero = rato;
    }
}

alert("Seus numeros foram: " + i + "\n" + `A soma é ${soma}` + "\n" + `Sua divição é ${soma / div}` + "\n" + `Maior numero: ${maiorNumero}` + "\n" + `Menor numero: ${menorNumero}`)
