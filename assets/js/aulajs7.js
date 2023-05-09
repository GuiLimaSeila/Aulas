/*let nome = prompt("Digite numeros");
let i = 0;
let div = nome.split(" ");
let tamanho1 = div[0];

console.log(div);
do {

    var soma = div[i];
    if (soma.length < tamanho1.length) {
        soma = tamanho1;
    } else if(soma.length > tamanho1.length){
        tamanho1 = soma
    }
i++
} while (i < div.length);

alert("a maior palavra é: " + soma + " ;"); */
/*let nome = prompt("Digite");
let i = 0;
let div = nome.split(" ");
var rato = div;
do {
    nome = prompt("Digite novamente");
    var div2 = nome.split(" ");
i++;
} while (i == 2);
let pato =rato.concat(div2)
console.log(pato);*/
let nome = prompt("Digite").trim();
let div = nome.split("");
let nome2 = [];
let i = div.length  -1;
do {
    nome2.push(div[i]);
    i--;
} while (i >= 0);
let nome3=[];
nome3.push(nome2);
alert(nome3);