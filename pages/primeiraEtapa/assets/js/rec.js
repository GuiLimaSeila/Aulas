function hello() {
    let a = Number(prompt("digite nota 1"))
    let b = Number(prompt("digite nota 2"))
    let soma = a + b
    let media = soma / 2

    if (media < 7) {
        alert("REPROVADO: " + media)
    } else {
        alert("APROVADO: " + media)
    }
}








function horas() {
    let a = prompt("Digite em que horario você esta agora(M = Manhã ; T = Tarde ; N = Noite").toUpperCase()
    if (a == "M") {
        alert("Bom Dia!!!")
    } else if (a == "T") {
        alert("Boa Tarde!!!")
    } else if (a == "N") {
        alert("Boa Noite!!!")
    } else{
        alert("Valor errado 😡")
    }
}







function doar() {
    let a = prompt("Para doar sangue voce precisa ter entre 18 e 67, digite sua idade para verificarmos")
    if (a < 18 || a > 67) {
        alert("Desculpa, sua idade esta fora do permitido")
    } else {
        alert("Idade valida, obrigado por doar sangue!")
    }
}
function maiormenor(){
    let a = prompt("digite o primeiro nomero")
    let b = prompt("digite o segundo numero")
    let c = prompt("digite o terceiro numero")
    let maiorNumero = 0;
    let menorNumero= 0;

    if(a > b && a> c){
        maiorNumero = a
    } else if(b > a && b> c){
        maiorNumero = b
    }else if(c > a && c> b){
        maiorNumero = c
    }
    
    if(a < b && a< c){
        menorNumero = a
    } else if(b < a && b< c){
        menorNumero = b
    }else if(c < a && c< b){
        menorNumero = c
    }
    alert("O maior numero é: " + maiorNumero + " ; e o menor numero é; "+ menorNumero)
    }
