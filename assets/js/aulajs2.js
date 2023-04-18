// Exercicio Saudação
function saudacao() {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) {
        document.getElementById("saudacao").innerHTML = "Bom dia, o sol ja nasceu lá na fazendinha!";
    } else if (hora >= 12 && hora < 18) {
        document.getElementById("saudacao").innerHTML = "Boa tarde, bó toma cafe!";
    } else {
        document.getElementById("saudacao").innerHTML = "Boa noite, agora vai dormi!";
    }
}
// Exercicio positivo e negativo
function numeros() {
    let num1 = Number(document.getElementById("num1").value);
    if (num1 > 0) {
        document.getElementById("resultado").innerHTML = `positivo`;
    }
    else if (num1 < 0) {
        document.getElementById("resultado").innerHTML = `negativo`;
    }
    else {
        document.getElementById("resultado").innerHTML = `zero`;
    }
}
// Exercicio igual ou diferente
function numeros2() {
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    if (num2 == num3) {
        document.getElementById("resultado2").innerHTML = `igual`;
    }
    else {
        document.getElementById("resultado2").innerHTML = `diferente`;
    }
}
// Exercicio media
function media() {
    let num4 = Number(document.getElementById("num4").value);
    let num5 = Number(document.getElementById("num5").value);

    let resultade = (num4 + num5) / 2;

    if (resultade >= 7) {
        document.getElementById("resultado3").innerHTML = `Aprovado: ${resultade}`;
    }
    else if (resultade >= 5) {
        document.getElementById("resultado3").innerHTML = `Recuperação: ${resultade}`;
    }
    else if (resultade <= 4) {
        document.getElementById("resultado3").innerHTML = `Reprovado: ${resultade}`;
    }
}
// Exercicio comparação
function comparacao() {
    let num6 = Number(document.getElementById("num6").value);
    let num7 = Number(document.getElementById("num7").value);
    if (num6 > num7) {
        document.getElementById("resultado4").innerHTML = `${num6} é maior que ${num7}`;
    }
    else if (num6 == num7) {
        document.getElementById("resultado4").innerHTML = `${num6} e ${num6} são iguais`;
    }
    else {
        document.getElementById("resultado4").innerHTML = `${num7} é maior que ${num6}`;
    }
}
// Exercicio par ou impar
function pareinpar() {
    let num8 = Number(document.getElementById("num8").value);
    let totalis = num8 % 2;
    if (totalis % 2 == 0) {
        document.getElementById("resultado5").innerHTML = `${num8} é par`;
    }
    else {
        document.getElementById("resultado5").innerHTML = `${num8} é impar`;
    }
}
// Exercicio trocar
function trocar() {
    let x = Number(document.getElementById("num9").value);
    let y = Number(document.getElementById("num10").value);

    alert(
        `Número 1 é igual a ${x}, Número 2 é igual a ${y}`
    );
    let z = x
    x = y
    y = z
    alert(
        `Número 1 é igual a ${x}, Número 2 é igual a ${y}`
    );
}
// Exercicio dia da semana
function semana() {
    let num11 = Number(document.getElementById("num11").value);
    if (num11 == 1) {
        alert(`Domingo`)
    }
    else if (num11 == 2) {
        alert(`Segunda`)
    }
    else if (num11 == 3) {
        alert(`Terça`)
    }
    else if (num11 == 4) {
        alert(`Quarta`)
    }
    else if (num11 == 5) {
        alert(`Quinta`)
    }
    else if (num11 == 6) {
        alert(`Sexta`)
    }
    else if (num11 == 7) {
        alert(`Sabado`)
    }
    else {
        alert(`Valor invalido`)
    }
}
// Exercicio salario
function salarios(){
    let num12= Number(document.getElementById("num12").value);
    let y= num12 *(20/100)
    let y2= num12 *(15/100)
    let y3= num12 *(10/100)
    let y4= num12 *(5/100)
    if (num12 <= 6280){
        document.getElementById("resultadoss").innerHTML = 
            `Salario original: ${num12}; Percentual de aumento: 20%; Valor do aumento: ${y}; Novo salario: $ ${num12+y}`
        ;
    }
    if (num12 > 6280){
        document.getElementById("resultadoss").innerHTML = 
            `Salario original: ${num12}; Percentual de aumento: 15%; Valor do aumento: ${y2}; Novo salario: $ ${num12+y2}`
        ;
    }
    if (num12 > 8000){
        document.getElementById("resultadoss").innerHTML = 
            `Salario original: ${num12}; Percentual de aumento: 10%; Valor do aumento: ${y3}; Novo salario: $ ${num12+y3}`
        ;
    }
    if (num12 > 15000){
        document.getElementById("resultadoss").innerHTML = 
            `Salario original: ${num12}; Percentual de aumento: 5%; Valor do aumento: ${y4}; Novo salario: $ ${num12+y4}`
        ;
    }
}