const input = require ("readline-sync");

var data = input.question("== digite sua data de nascimento== \n aqui") // ( pergunta )

var cpf = input.question("digite seu cpf") // ( pergunta )

valor = 'R$1200' // variavel

nome = "Carlos Jose de Santos" // variavel

if (cpf.length === 11){
    console.log(nome + "\n" + "data de nascimento" + data + "\n" + valor + " depositado " ) // console (tudo que eu defini)
} else [
    console.log("digite um cepf invalido")
];