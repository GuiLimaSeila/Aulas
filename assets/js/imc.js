function imc() {
    //value of height and weight
    const imcHeight = document.getElementById("height").value;
    const imcWeight = document.getElementById("weight").value;

    //imc calc
    const imcCalc = (imcWeight / (imcHeight * imcHeight)).toFixed(2);

    //if imc  isn't Not A Number
    if (!isNaN(imcCalc)) {
        //const value
        const value = document.getElementById("value");
        //description
        let description = "";

        //add the class attencion
        value.classList.add("attencion");

        //remove the class hidden
        document.getElementById("infos").classList.remove("hidden")

        //if your imc is < 18.5
        if (imcCalc < 18.5) {

            description = "Cuidado você esta abaixo do peso!!!"

        } else if (imcCalc >= 18.5 && imcCalc < 25) {

            // else if your imc is >= 18.5 and < 25
            description = "Parabéns! Você esta no peso!!!";

            //remove the class attencion
            value.classList.remove("attencion");

            // add the class normal
            value.classList.add("normal");
        } else if (imcCalc >= 25 && imcCalc < 30) {

            // else if your imc is >= 25 and < 30
            description = "Cuidado! Você está acima do peso!!!"
        } else {

            // else
            description = "Cuidado! Você está bem pesado!!!"
        }

        // document description
        document.getElementById("description").textContent = description

        // document value imc
        document.getElementById("value").textContent = imcCalc
    }
}