document.write("<h1>Aula 01 - Exercício 10</h1>");

var valorHora = prompt("Digite o valor da hora trabalhada:");
var horasDia = prompt("Digite a quantidade de horas trabalhadas por dia:");

var salario = Number(valorHora) * Number(horasDia) * 30;

document.write("<p>O salário ao final do mês é " + salario + "</p>");