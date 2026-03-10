document.write("<h1>Aula 01 - Exercício 8</h1>");

var peso = prompt("Digite o peso em kg:");
var altura = prompt("Digite a altura em metros:");

var imc = Number(peso) / (Number(altura) * Number(altura));

document.write("<p>O IMC é " + imc + "</p>");