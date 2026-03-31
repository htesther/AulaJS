function calcular() {
    var fah = Number(document.getElementById("fah").value);

    var celsius = (fah - 32) * 5 / 9;

    document.getElementById("resultado").innerHTML =
        "Celsius: " + celsius;
}