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
/*let nome = prompt("Digite").trim();
let div = nome.split("");
let nome2 = [];
let i = div.length  -1;
do {
    nome2.push(div[i]);
    i--;
} while (i >= 0);
let nome3=[];
nome3.push(nome2);
alert(nome3);*/

//LET's das perguntas
/*let nome = prompt("Digite o seu nome")
let nomePushado = [];
nomePushado.push(nome);

let altura = Number(prompt("Digite a sua altura (COLOCAR EM METROS)"))
let alturaPushado = [];
alturaPushado.push(altura);

let idade = Number(prompt("Digite a sua idade"))
let idadePushado = [];
idadePushado.push(idade);

let peso = Number(prompt("Digite o seu peso (COLOCAR EM QUILOS)"))
let pesoPushado = [];
pesoPushado.push(peso);

let sexo = prompt("Digite o seu sexo")
let sexoPushado = [];
sexoPushado.push(sexo);

let i = 0;

//Calculo IMC
let IMC = pesoPushado / (alturaPushado * alturaPushado)
let IMCPushado = [];
IMCPushado.push(parseInt(IMC));

let pare = prompt("Quer parar: 'S' para sim, 'N' para nao")

//Calculo de masculino e feminino e seu console log
let masculino = 0;
let feminino = 0;

//Laça de repetição da pergunta
do {
    nome = prompt("Digite outro nome")
    nomePushado.push(nome);

    altura = Number(prompt("Digite a sua altura (COLOCAR EM METROS)"))
    alturaPushado.push(altura);

    idade = Number(prompt("Digite a sua idade"))
    idadePushado.push(idade);

    peso = Number(prompt("Digite o seu peso (COLOCAR EM QUILOS)"))
    pesoPushado.push(peso);

    sexo = prompt("Digite o seu sexo")
    sexoPushado.push(sexo);

    if (sexoPushado[i] == "M") {
        masculino++
        
    }
    if (sexoPushado[i] == "F") {
        feminino++
    }

    i++

    if (sexoPushado[i] == "M") {
        masculino++
    }
    if (sexoPushado[i] == "F") {
        feminino++
    }

    IMC = pesoPushado[i] / (alturaPushado[i] * alturaPushado[i])
    IMCPushado.push(parseInt(IMC));

    pare = prompt("Quer parar: 'S' para sim, 'N' para nao")
} while (pare.toUpperCase() != "S");

//consolo log inicial
console.log(`Os nomes são: ${nomePushado}`)
console.log(`As idades em ordem são:  ${idadePushado}`)
console.log(`As alturas em ordem são:  ${alturaPushado}`)
console.log(`Os pesos em ordem são:  ${pesoPushado}`)
console.log(`Os sexos em ordem são:  ${sexoPushado}`)

//consolo log especiais
console.log(`Os IMC's em ordem são:  ${IMCPushado}`)
console.log("Verifique seu IMC nessa tabela:" + "\n" + "Menor que 18.5: Abaixo do peso normal" + "\n" + "18.5 - 24.9: Peso normal" + "\n" + "25.0 - 29.9: Exesso de peso" + "\n" + "30.0 - 34.9: Obesidade classe I" + "\n" + "35.0 - 39.9: Obesidade classe II" + "\n" + "Maior ou igual a 40.0: Obesidade classe III")
console.log(`São exatos: ${masculino} pessoas do sexo masculino e ${feminino} do sexo feminino`)

//console log medias

let somaAltura= 0;
let somaIdade = 0;
let somaPeso = 0;

somaAltura += alturaPushado
somaIdade += idadePushado
somaPeso += pesoPushado

let mediaAltura= somaAltura / alturaPushado.length
let mediaIdade = somaIdade / idadePushado.length
let mediaPeso = somaPeso / pesoPushado.length

console.log(`A media de altura é: ${mediaAltura}M`)
console.log(`A media de idade é:  ${mediaIdade} anos`)
console.log(`A media de peso é:  ${mediaPeso}KG`) */

/*let nomeJogo = prompt("Digite o nome de um jogo").toUpperCase()
let jogoArray = []
jogoArray.push(nomeJogo)

let dicaArray = []

let dica1 = prompt("Digite a primeira dica APENAS EM EMOJIS (Windows + .)")
dicaArray.push(dica1)

let dica2 = prompt("Digite a o genero do jogo").toUpperCase()
dicaArray.push(dica2)

let dica3 = prompt("Digite a inicial do jogo").toUpperCase()
dicaArray.push(dica3)

let dica4 = prompt("Descreva o protagonista do jogo").toUpperCase()
dicaArray.push(dica4)

let dica5 = prompt("Descreva o final de jogo em uma palavra").toUpperCase()
dicaArray.push(dica5)

let resposta1 = prompt("Os emojis que descrevem esse jogo são: " + dicaArray[0]).toUpperCase()
if (resposta1 == jogoArray) {
    alert("Parabéns você acertou!!! sua pontuação é: 100")

} else {

    let resposta2 = prompt("O genero do jogo é: " + dicaArray[1]).toUpperCase()
    if (resposta2 == jogoArray) {
        alert("Parabéns você acertou!!! sua pontuação é: 80")

    } else {

        let resposta3 = prompt("O final do jogo foi descrito como: " + dicaArray[2]).toUpperCase()
        if (resposta3 == jogoArray) {
            alert("Parabéns você acertou!!! sua pontuação é: 50")

        } else {

            let resposta4 = prompt("A inicial do jogo é: " + dicaArray[3]).toUpperCase()
            if (resposta4 == jogoArray) {
                alert("Parabéns você acertou!!! sua pontuação é: 20")

            } else {

                let resposta5 = prompt("A inicial do jogo é: " + dicaArray[4]).toUpperCase()
                if (resposta5 == jogoArray) {
                    alert("Parabéns você acertou!!! sua pontuação é: 10")

                } else {

                    alert("Você errou, o jogo era:" + jogoArray[0])
                }
            }
        }
    }
}
*/
/*let nomes = prompt("digite palavras")
let banana = nomes.split(" ")
while(nomes != "parar"){
    nomes = prompt("digite palavras")
}
console.log("suas palavras são: " + banana[0] + " " + banana[2] )*/
/*var list = [];

function adicionarEntrada(){
    let entrada = document.getElementById("campoTexto").value;
    list.push(entrada)
    document.getElementById("campoTexto").value = ''
    let msg = ""
    for (let i = 0;i < list.length; i++ ){
        msg += `<p> ${list[i]}<p>`
    }
    document.getElementById("result").innerHTML = msg;
}

var list2 = [];

function adicionarEntrada2(){
    let entrada = document.getElementById("campoTexto2").value;
    list2.push(entrada)
    document.getElementById("campoTexto2").value = ''
    let msg = ""
    for (let i = 0;i < list2.length; i++ ){
        msg += `<p> ${list2[i]}<p>`
    }
    document.getElementById("result2").innerHTML = msg;
    
}
var msg2 = 0
if(list.length == list2.length){
 
for (let i = 0;i < list2.length; i++ ){
    msg2+= `<p class="result3">${list[i] * list2[i]}<p>`
}
document.getElementById("result3").innerHTML = msg2;
}*/
/*const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const novo = arr.filter(num => num % 2 == 0);
console.log(novo)

var array1 = ['branco',10,20,30,null];
var array2 = ['verde',40,50,60,undefined];
array1 = array1.concat(array2);
console.log(array1)

var array3 = ['branco',10,20,30];
array3 = array3.join('-')
console.log(array3)*/
var primeiroQuartoA = 0;
var segundoQuartoA = 0;
var terceiroQuartoA = 0;
var quartoQuartoA = 0;


var placarA = 0;
var placarB = 0;

function maisUmA() {
    placarA += 1
    document.getElementById("ladoA").innerHTML = placarA
}
function maisDoisA() {
    placarA += 2
    document.getElementById("ladoA").innerHTML = placarA
}
function maisTresA() {
    placarA += 3
    document.getElementById("ladoA").innerHTML = placarA
}
function diminuirA() {
    if (placarA > 0) {
        placarA -= 1
        document.getElementById("ladoA").innerHTML = placarA
    }
}


function maisUmB() {
    placarB += 1
    document.getElementById("ladoB").innerHTML = placarB
}
function maisDoisB() {
    placarB += 2
    document.getElementById("ladoB").innerHTML = placarB
}
function maisTresB() {
    placarB += 3
    document.getElementById("ladoB").innerHTML = placarB
}
function diminuirB() {
    if (placarB > 0) {
        placarB -= 1
        document.getElementById("ladoB").innerHTML = placarB
    }
}