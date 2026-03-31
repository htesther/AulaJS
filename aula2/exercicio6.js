function calcular() {
    var quantidade = Number(document.getElementById("quantidade").value);
    var preco = Number(document.getElementById("preco").value);

    var subtotal = quantidade * preco;
    var desconto = subtotal * 0.10;
    var total = subtotal - desconto;

    document.getElementById("resultado").innerHTML =
    "Subtotal: " + subtotal + "<br>" +
    "Desconto: " + desconto + "<br>" +
    "Total: " + total;
}