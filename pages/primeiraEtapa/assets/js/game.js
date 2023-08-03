
function soma(){
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  if (num1 && num2 != null || num1 && num2 != "" || num1 && num2 != undefined ){
    let resultado = num1 + num2;
    document.getElementById("resultado").innerHTML = `O resultado da soma é: ${resultado}`;
  }
  else {
document.getElementById{"resultado"}.innerHTML = "Digite um valor válido!";
  }
}
