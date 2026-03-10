document.write("<h1>Aula 01 - Exercício 9</h1>");

var principal = prompt("Digite o valor inicial (principal):");
var taxa = prompt("Digite a taxa de juros (%):");
var tempo = prompt("Digite o tempo em anos:");

var montante = Number(principal) * (1 + ((Number(taxa) / 100) * Number(tempo)));

document.write("<p>O valor do montante é " + montante + "</p>");