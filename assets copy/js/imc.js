function imc(){
    const imcHeight = document.getElementById("height").value;
    const imcWeight = document.getElementById("weight").value;

    const imcCalc= (imcWeight / (imcHeight * imcHeight)).toFixed(2);
   if(!isNaN(imcCalc)){
    const value = document.getElementById("value");
    let description = "";

    value.classList.add("attencion");

    document.getElementById("infos").classList.remove("hidden")

    if (imcCalc < 18.5){
        description= "Cuidado você esta abaixo do peso!!!"
    } else if(imcCalc >= 18.5 && imcCalc < 25){
        description= "Parabéns! Você esta no peso!!!";
        value.classList.remove("attencion");
        value.classList.add("normal");
    } else if(imcCalc >= 25 && imcCalc <30){
        description = "Cuidado! Você está acima do peso!!!"
    } else{
        description = "Cuidado! Você está bem pesado!!!"
    }
document.getElementById("description").textContent = description
document.getElementById("value").textContent = imcCalc
   }
}