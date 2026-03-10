document.write("<h1>Aula 01 - Exercício 6</h1>");

var quantidade = prompt("Digite a quantidade do produto:");
var preco = prompt("Digite o preço do produto:");

var subtotal = Number(quantidade) * Number(preco);

var desconto = subtotal * 0.10;

var valorFinal = subtotal - desconto;

document.write("<p>Subtotal: " + subtotal + "</p>");
document.write("<p>Desconto (10%): " + desconto + "</p>");
document.write("<p>Valor final a pagar: " + valorFinal + "</p>");