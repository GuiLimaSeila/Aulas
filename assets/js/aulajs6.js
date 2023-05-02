let nome= prompt("Digite uma frase");
let palavras = nome.split(' ')
let letrinhas= nome.length;
let i= 0;
if(nome == "" || nome == " "){
    console.log("Digite algo 😡")

} else{
while(i < palavras.length){
i++
}

console.log("Sua frase foi: " + nome + "\n" + "Ela tem: " + i + " palavras" + "\n");
}