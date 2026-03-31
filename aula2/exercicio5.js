function calcular() {
    var lado = Number(document.getElementById("lado").value);

    var area = lado * lado;

    document.getElementById("resultado").innerHTML =
    "Área do quadrado: " + area;
}