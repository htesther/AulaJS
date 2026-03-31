function calcular() {
    var base = Number(document.getElementById("base").value);
    var altura = Number(document.getElementById("altura").value);

    var area = (base * altura) / 2;

    document.getElementById("resultado").innerHTML =
    "Área do triângulo: " + area;
}