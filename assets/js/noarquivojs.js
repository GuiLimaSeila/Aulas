 let nome = prompt("bota um numero")
 let tentei=0
 let ale = Math.floor(Math.random()*100)
 for(var i=nome; nome != ale;i++){
    if(nome > ale){
    alert(`diminui ai`) 
   } else if(nome < ale){
    alert(`aumenta ai`)
  }
  tentei++
 nome = prompt("try again!")
 }
 alert(`Parabens vc acertou: ${ale}; levou ${tentei} tentativas para acerta`)
/*let senha = prompt("Senhas");
let correta = "Senai564"
let i = 0
for (senha = 1; senha != correta; i++) {
  alert(`senha errada😡`)
  senha = prompt("tente de novo")
  if (i >= 3) {
    alert(`limite atingido, va embora`)
   
  }
}
for (senha = 1; senha == correta; i++){ 
if (senha == correta) {
  alert(`Ta certo, bem vindo`)
}
} */
