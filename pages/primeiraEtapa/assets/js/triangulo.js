function triangulo(){
    //variavel dos lados do triangulo
    let nm1 = Number(document.getElementById("num1").value);
    let nm2 = Number(document.getElementById("num2").value);
    let nm3 = Number(document.getElementById("num3").value);

    

    //variavel perimetro
    let p= (nm1 + nm2 + nm3).toFixed(2) ;

    //variavel semi-perimetro
    let sp= (nm1 + nm2 + nm3)/2 ;

    //variavel calculo da area
    let a2= sp*(sp+nm1)*(sp+nm2)*(sp+nm3);

    //variavel raiz quadrada
    let a1= (Math.sqrt(a2)).toFixed(2);

    //variavel arredondar perimetro

   //resultado perimetro
    if (p >=0){
    document.getElementById("perimetro").innerHTML = `${p}`;
    }

    //variavel impar ou par
    let totalis = p % 2;

    //resultado impar ou par
    if (totalis == 0) {
        document.getElementById("tipo1").innerHTML = `par`;
    }
    else {
        document.getElementById("tipo1").innerHTML = `impar`;
    };

    //variavel arredondar area
    let a = Math.ceil(a1) ;

    //resultado area
if (a >=0){
    document.getElementById("area").innerHTML = `${a}`;
};
//variavel inpar ou par
    let totalis2 = a % 2;
    if (totalis2 == 0) {
        document.getElementById("tipo2").innerHTML = `par`;
    }
    else {
        document.getElementById("tipo2").innerHTML = `impar`;
    }

    //resultado tipos de triangulo
    //triangulo Equilátero
    if (nm1 == nm2 && nm1 == nm3 && nm2 == nm3){
        document.getElementById("triangulo").innerHTML = `Equilátero`;
    }
    //Triangulo com medidas impossíveis
    else if (nm1 + nm2 < nm3 || nm3 + nm2 < nm1 || nm3 + nm1 < nm2 ){
        document.getElementById("perimetro").innerHTML = `Triangulo com medidas impossíveis`;
        document.getElementById("tipo2").innerHTML = `Triangulo com medidas impossíveis`;
        document.getElementById("tipo1").innerHTML = `Triangulo com medidas impossíveis`;
        document.getElementById("area").innerHTML = `Triangulo com medidas impossíveis`;
        document.getElementById("triangulo").innerHTML = `Triangulo com medidas impossíveis`;
    } 
    //triangulo Escaleno
    else if(nm1 != nm2 && nm1 != nm3 && nm2 != nm3){
        document.getElementById("triangulo").innerHTML = `Escaleno`;
    } 
    //triangulo Isóceles
    else if (nm1 == nm2 != nm3|| nm2 == nm3 != nm1 || nm1 == nm3 != nm2){
        document.getElementById("triangulo").innerHTML = `Isóceles`;
    } 

}