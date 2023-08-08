function formsClick(){
   let resultForm = ""

   
//person name
let personSimple = document.getElementById("personName").value;
//person name split
const nameSplice = personSimple.split(' ')

//person age
let personAge = document.getElementById("personAge").value;

//person eye color
let personEyeColor = document.getElementById("eyeColor").value;

if (personAge < 0 ){
    alert("que isso idade negativa???")
} else if (personAge > 130){
    alert("que isso é a rainha elizabeth é???")
    }else{
//object of the person
const personObject = {
    //his first name
firstName:nameSplice[0],
//his last name
lastName:nameSplice[1],
//his age
age:personAge,
//his eye color
eyeColor: personEyeColor
};

resultForm = `Olá  ${personObject.firstName}, seu sobrenome é ${personObject.lastName} você tem ${personObject.age} anos e a cor dos seus olhos é ${personObject.eyeColor}`

document.getElementById("resultForm").textContent = resultForm
}
}