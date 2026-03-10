document.write("<h1>Aula 01 - Exercício 3</h1>");

var valor = prompt("Digite o valor da prestação:");
var taxa = prompt("Digite a taxa de juros (%):");
var tempo = prompt("Digite os dias de atraso:");

var parcela = Number(valor) + (Number(valor) * (Number(taxa) / 100) * Number(tempo));

document.write("<p>O valor da parcela é " + parcela + "</p>");