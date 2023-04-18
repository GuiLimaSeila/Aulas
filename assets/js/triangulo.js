function triangulo(){
    //variavel dos lados do triangulo
    let nm1 = Number(document.getElementById("num1").value);
    let nm2 = Number(document.getElementById("num2").value);
    let nm3 = Number(document.getElementById("num3").value);

    //variavel perimetro
    let p= nm1 + nm2 + nm3 ;

    //variavel semi-perimetro
    let sp= (nm1 + nm2 + nm3)/2 ;

    //variavel calculo da area
    let a2= sp*(sp+nm1)*(sp+nm2)*(sp+nm3);

    //variavel raiz quadrada
    let a1= Math.sqrt(a2);

    //variavel arredondar perimetro
   let pa = Math.ceil(p)

   //resultado perimetro
    if (pa >=0){
    document.getElementById("perimetro").innerHTML = `${pa}`;
    }

    //variavel inpar ou par
    let totalis = pa % 2;

    //resultado inpar ou par
    if (totalis % 2 == 0) {
        document.getElementById("tipo1").innerHTML = `par`;
    }
    else {
        document.getElementById("tipo1").innerHTML = `impar`;
    };

    //variavel arredondar area
    let aa = Math.ceil(a1)

    //resultado area
if (aa >=0){
    document.getElementById("area").innerHTML = `${aa}`;
};
//variavel inpar ou par
    let totalis2 = aa % 2;
    if (totalis2 % 2 == 0) {
        document.getElementById("tipo2").innerHTML = `par`;
    }
    else {
        document.getElementById("tipo2").innerHTML = `impar`;
    };

    //resultado tipos de triangulo
    if (nm1 == nm2 && nm1 == nm3 && nm2 == nm3){
        document.getElementById("triangulo").innerHTML = `Equilátero`;
    }else if (nm1 + nm2 < nm3 || nm3 + nm2 < nm1 || nm3 + nm1 < nm2 ){
        document.getElementById("triangulo").innerHTML = `Triangulo com medidas impossíveis`;
    } else if(nm1 != nm2 && nm1 != nm3 && nm2 != nm3){
        document.getElementById("triangulo").innerHTML = `Escaleno`;
    } else if (nm1 == nm2 != nm3|| nm2 == nm3 != nm1 || nm1 == nm3 != nm2){
        document.getElementById("triangulo").innerHTML = `Isóceles`;
    } 

}