function calcular() {
    var valor = Number(document.getElementById("valor").value);
    var taxa = Number(document.getElementById("taxa").value);
    var tempo = Number(document.getElementById("tempo").value);

    var parcela = valor + (valor * taxa * tempo) / 100;

    document.getElementById("resultado").innerHTML =
        "Valor da parcela: " + parcela;
}