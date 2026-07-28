function calcular() {

    let total =
        Number(document.getElementById("total").value);

    let ferias =
        Number(document.getElementById("ferias").value);

    let abs =
        Number(document.getElementById("abs").value);

    let disponiveis = total - ferias;

    if (disponiveis < 0) {
        disponiveis = 0;
    }

    let disponibilidade = 0;

    if (total > 0) {
        disponibilidade =
            (disponiveis / total) * 100;
    }

    let horasDia =
        disponiveis * 4.5;

    let horasMes =
        disponiveis * 108;

    let perdas =
        horasMes * (abs / 100);

    let capacidadeReal =
        horasMes - perdas;

    document.getElementById("disp").innerHTML =
        disponiveis;

    document.getElementById("disponibilidade").innerHTML =
        disponibilidade.toFixed(1);

    document.getElementById("dia").innerHTML =
        horasDia.toFixed(1);

    document.getElementById("mes").innerHTML =
        horasMes.toFixed(1);

    document.getElementById("perdidas").innerHTML =
        perdas.toFixed(1);

    document.getElementById("real").innerHTML =
        capacidadeReal.toFixed(1);
}

calcular();