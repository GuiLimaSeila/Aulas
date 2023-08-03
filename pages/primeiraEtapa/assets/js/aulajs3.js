function assasino() {
    let num1 = Number(document.getElementById("yes1").value);
    let num2 = Number(document.getElementById("yes2").value);
    let num3 = Number(document.getElementById("yes3").value);
    let num4 = Number(document.getElementById("yes4").value);
    let num5 = Number(document.getElementById("yes5").value);

    //let numeros1=[];
    //numeros1[0]=num1 ;
    //numeros1[1]=num2 ;
    //numeros1[2]=num3 ;
    //numeros1[3]=num4 ;
    //numeros1[4]=num5 ;

    //let soma = numeros1[0] + numeros1[1] + numeros1[2] + numeros1[3] + numeros1[4];
    let soma = num1 + num2 + num3 + num4 + num5;

    if (soma < 2) {
        document.getElementById("resultado").innerHTML = `Seu resultado é: ${soma}, você é inocente 😎`;
    } else if (soma == 2) {
        document.getElementById("resultado").innerHTML = `Seu resultado é: ${soma}, você é Suspeito 🤔`;
    } else if (soma == 3 || soma == 4) {
        document.getElementById("resultado").innerHTML = `Seu resultado é: ${soma}, você é Cúmplice 😕`;
    } else if (soma == 5) {
        document.getElementById("resultado").innerHTML = `Seu resultado é: ${soma}, você é o Assassino 🤯`;
    }
}

function caixa() {
    let num1 = Number(document.getElementById("numeros").value);

    let numeros1=[]
    numeros1[0]=num1 / 100;
    numeros1[1]=(num1 %100) / 50;
    numeros1[2]=(num1 %100) / 20;
    numeros1[3]=(num1 %100) / 10;
    numeros1[4]=((num1 %100)%50);
    numeros1[5]=((num1 %100)%20);
    numeros1[6]=((num1 %100)%10);

    document.getElementById("resultado1").innerHTML = `${numeros1[0]} de 100,${numeros1[1]} de 50,${numeros1[2]} de 20, ${numeros1[3]} de 10,${numeros1[4]} de 5, ${numeros1[5]} de 2, ${numeros1[6]} de 1`;

}