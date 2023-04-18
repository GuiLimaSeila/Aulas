function tamanho() {
    let text = "Abrobrinha";
    let size = text.length;
    if (size >= 2) {
        document.getElementById("text1").innerHTML = `essa palavra tem ${size} letras`;
    }
    else if (size == 1) {
        document.getElementById("text1").innerHTML = `essa palavra tem ${size} letra`;
    }

}
function tamanho2() {
    let text2 = "Abrobrinha";
    let size2 = text2.toUpperCase();
    document.getElementById("text2").innerHTML = size2;
}
function tamanho3() {
    let text2 = "Abrobrinha";
    let size2 = text2.toLowerCase();
    document.getElementById("text3").innerHTML = size2;
}
function conctar() {
    let text3 = "Eu sei";
    let text4 = "Que sei de nada parça :)";
    let msg = text3.concat(",", text4);
    document.getElementById("text4").innerHTML = msg;
}
function arai() {
    let num1 = Number(document.getElementById("um1").value);
    let num2 = Number(document.getElementById("um2").value);
    let num3 = Number(document.getElementById("um3").value);
    let numeros = [];

    if (num1 < num2 && num1 < num3) {
        numeros[0] = num1 ;
    }
    else if (num2 < num1 && num2 < num3) {
        numeros[0] = num2 ;
    }
    else{
        numeros[0] = num3 ;
    }
    if (num1 > num2 && num1 > num3) {
        numeros[2] = num1 ;
    }
    else if (num2 > num1 && num2 > num3) {
        numeros[2] = num2 ;
    }
    else{
        numeros[2] = num3 ;
    }
    if (num1 > num2 && num1 >num3 && num2 > num3 ){
numeros[1]= num2 ;
    }
    else if(num1 > num2 && num1 >num3 && num3 > num2 ){
        numeros[1]= num3 ;
    }
    else{
        numeros[1]= num1
    }
    document.getElementById("resultados").innerHTML = `Sua ordem é: ${numeros}`;
}
function palavras() {
    let text1 = document.getElementById("textos").value;
    let size1 = text1.length;
    if (size1 >= 10) {
        document.getElementById("resultadosss").innerHTML = `Senha aceita`;
    }
    else if (size1 <=9) {
        document.getElementById("resultadosss").innerHTML = `Senha muito curta, pelo menos 10 caracteres`;
    }

}
function arai2(){
    let num1 = Number(document.getElementById("m1").value);
    let num2 = Number(document.getElementById("m2").value);
    let num3 = Number(document.getElementById("m3").value);
    let num4 = Number(document.getElementById("n1").value);
    let num5 = Number(document.getElementById("n2").value);
    let num6 = Number(document.getElementById("n3").value);

    let numeros1 = [];
    numeros1[0]= num1 ;
    numeros1[1]= num2 ;
    numeros1[2]= num3 ;

    let numeros2 = [];
    numeros2[0]= num4 ;
    numeros2[1]= num5 ;
    numeros2[2]= num6 ;

    let soma = numeros1[0] + numeros1[1] + numeros1[2] ;
    let soma2 = numeros2[0] + numeros2[1] + numeros2[2] ;
    
     document.getElementById("resultado1").innerHTML = `O resultado da soma é: ${soma}`;
     document.getElementById("resultado2").innerHTML = `O resultado da soma é: ${soma2}`;
     
     if (soma > soma2){
        document.getElementById("resultado3").innerHTML = `${soma} é maior que ${soma2}`;
     }else {
        document.getElementById("resultado3").innerHTML = `${soma2} é maior que ${soma}`;
     }


}