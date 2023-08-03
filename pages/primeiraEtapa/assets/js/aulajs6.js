let nome = prompt("Digite uma frase");
let palavras = nome.split(' ');
let i = 0;
let tamanho = 0;

if (nome == "" || nome == " ") {
    console.log("Digite algo 😡")

} else {
    while (i < palavras.length) {
        if (palavras[i] == "") {
            tamanho++;
        }
        i++;
    }
    console.log("Sua frase foi: " + nome);
    console.log("Ela tem: ", i - tamanho, " palavras");
} 