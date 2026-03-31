function calcular() {
    var principal = Number(document.getElementById("principal").value);
    var taxa = Number(document.getElementById("taxa").value);
    var tempo = Number(document.getElementById("tempo").value);

    var montante = principal * (1 + (taxa * tempo) / 100);

    document.getElementById("resultado").innerHTML =
    "Montante: " + montante;
}