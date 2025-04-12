
function calcularJuros() {
    let valIni = document.getElementById("valor-inicial").value;
    let invMen = document.getElementById("inv-mensal").value;
    let juros = document.getElementById("juros-aa").value;
    let qntMes = document.getElementById("qnt-meses").value;
    let mesIni = ducument.getElementById("mes-ini").value;
    let anoIni = document.getElementById("ano-ini").value;

    alert(juros)
    document.getElementById("tabela").innerHTML = ("<thead>" +
        "<tr>" +
        "<td>Evento</td>" +
        "<td class=" + "tb-direito" + ">Valores</td>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "<tr>" +
        "<td>Total investido</td>" +
        "<td class=" + "tb-direito" + ">" + juros + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Total ganho com juros mensal</td>" +
        "<td class=" + "tb-direito" + ">" + juros + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Total</td>" +
        "<td class=" + "tb-direito" + ">" + juros + "</td>" +
        "</tr>" +
        "</tbody>"
    );

}
