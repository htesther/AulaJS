function calcular() {
    var numero = Number(document.getElementById("numero").value);

    var quadrado = numero * numero;
    var cubo = numero * numero * numero;

    document.getElementById("resultado").innerHTML =
        "Quadrado: " + quadrado + "<br>Cubo: " + cubo;
}