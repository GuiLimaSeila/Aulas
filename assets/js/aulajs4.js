function meses() {
    let nu = Number(document.getElementById("mes").value);
    let mensagem;
    switch (nu) {
        case 1:
            mensagem = "Janeiro";
            break;
        case 2:
            mensagem = "Fevereiro";
            break;
        case 3:
            mensagem = "Março";
            break;
        case 4:
            mensagem = "Abril";
            break;
        case 5:
            mensagem = "Maio";
            break;
        case 6:
            mensagem = "Junho";
            break;
        case 7:
            mensagem = "Julho";
            break;
        case 8:
            mensagem = "Agosto";
            break;
        case 9:
            mensagem = "Setembro";
            break;
        case 10:
            mensagem = "Outubro";
            break;
        case 11:
            mensagem = "Novembro";
            break;
        case 12:
            mensagem = "Dezembro";
            break;
        default:
            mensagem = "Numero Invalido";
            break;

    }
    document.getElementById("resultado").innerHTML = mensagem;
}

function semana() {
    var now = new Date();
    let diasemana = now.getDay()
    let mensagem;
    switch (diasemana) {
        case 0:
            mensagem = "Domingo";
            break;
        case 1:
            mensagem = "Segunda";
            break;
        case 2:
            mensagem = "Terça";
            break;
        case 3:
            mensagem = "Quarta";
            break;
        case 4:
            mensagem = "Quinta";
            break;
        case 5:
            mensagem = "Sexta";
            break;
        case 6:
            mensagem = "Sabado";
            break;
    }
    console.log(mensagem)
}
function parimpar() {
    let nu1 = Number(document.getElementById("par").value);
    let totalis = nu1 % 2;
    let mensagem;
    switch (totalis) {
        case 0:
            mensagem = "Par";
            break;
        default:
            mensagem = "Impar";
            break;
    }
    console.log(mensagem)
}


function mercado() {
    let nu1 = Number(document.getElementById("mercado").value);
    let nomeProdutos;
    let nomePreço;
    let data;

    switch (nu1) {
        case 1:
            nomeProdutos = "Arroz";
            nomePreço = 10.00;
            data = new Date(2023, 05, 30);
            break;

        case 2:
            nomeProdutos = "Feijão";
            nomePreço = 8.50;
            data = new Date(2023, 11, 31);
            break;

        case 3:
            nomeProdutos = "Macarrão";
            nomePreço = 5.20;
            data = new Date(2022, 08, 15);
            break;

        case 4:
            nomeProdutos = "Leite";
            nomePreço = 3.00;
            data = new Date(2023, 03, 25);
            break;

        case 5:
            nomeProdutos = "Café";
            nomePreço = 12.00;
            data = new Date(2024, 11, 31);
            break;

        case 6:
            nomeProdutos = "Açúcar";
            nomePreço = 4.80;
            data = new Date(2022, 05, 30);
            break;

        case 7:
            nomeProdutos = "Óleo";
            nomePreço = 6.00;
            data = new Date(2023, 11, 31)
            break;

        case 8:
            nomeProdutos = "Sal";
            nomePreço = 2.50;
            data = new Date(2024, 05, 30);
            break;

        case 9:
            nomeProdutos = "Vinagre";
            nomePreço = 3.80;
            data = new Date(2022, 05, 30)
            break;

        case 10:
            nomeProdutos = "Farinha";
            nomePreço = 3.00;
            data = new Date(2022, 11, 31);
            break;

        default:
            nomeProdutos = "produto invalido";
            nomePreço = "produto invalido";
            data = "produto invalido";
            document.getElementById("vencimento").innerHTML = "produto invalido";
            break;

    }

    document.getElementById("nome").innerHTML = nomeProdutos;
    document.getElementById("preco").innerHTML = `R$ ${nomePreço}`;
    document.getElementById("data").innerHTML = data.toLocaleDateString();

    let dataAtual = new Date();
    let vencido = dataAtual > data;

    document.getElementById("vencimento").innerHTML = vencido ? 'Vencido' : 'Na Validade';

}
