document.write("h2>Entrada de Dados</h2>")

var numero2 = prompt("Digite o número 1");
var numero2 = prompt("Digite o número 2");

document.write("Número 1 = " + numero1 + "<br>");
document.write("Número 2 = " + numero2 + "<br>");

document.write("<h2>Operações Arímétricas</h2>");
var resultado;

resultado = Number (numero1) + Number (numero2); 
document.write("A soma dos números é " + resultado + "<br>"); 

resultado = Number (numero1) - Number (numero2);
document.write("A diferença entre os números é " + resultado + "<br>");

 resultado = Number (numero1) * Number (numero2);
document.write("O produto dos números é " + resultado + "<br>");

resultado = Number (numero1) / Number (numero2);
document.write("A divisão entre os números é" + resultado + "<br>");