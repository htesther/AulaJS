function somar2numero()
{
    let numero1, numero2, soma;

    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;

    soma = Number(numero1) + NUmber(numero2);

    document.getElementById("resultado").innerHTML = "A soma dos número é " + soma;
}