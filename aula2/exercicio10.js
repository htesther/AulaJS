function calcular() {
    var valor = Number(document.getElementById("valor").value);
    var horas = Number(document.getElementById("horas").value);

    var salario = valor * horas * 30;

    document.getElementById("resultado").innerHTML =
    "Salário: " + salario;
}