var nome = window.prompt('digite seu nome:');


function passagem(nome) {
    var mensagem = `Sr ${nome}, está confirmado a sua viagem.`;

    document.write(`<h1> ${mensagem} </h1>`);
}
passagem(nome);
