function calcular() {
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);

    var imc = peso / (altura * altura);

    document.getElementById("resultado").innerHTML =
    "IMC: " + imc;
}