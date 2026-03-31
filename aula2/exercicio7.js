function calcular() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var n3 = Number(document.getElementById("n3").value);

    var media = (n1 + n2 + n3) / 3;

    document.getElementById("resultado").innerHTML =
    "Média: " + media;
}