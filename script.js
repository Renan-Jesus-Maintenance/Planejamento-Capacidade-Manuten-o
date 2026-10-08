document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const botaoMenu = document.getElementById("menuBtn");

    const horas = document.querySelectorAll(".hora");
    const minutos = document.querySelectorAll(".minuto");

    const resultado = document.getElementById("resultado");
    const btnLimpar = document.getElementById("btnLimpar");

    botaoMenu.addEventListener("click", function (event) {
        event.stopPropagation();

        const aberto = menu.classList.toggle("active");

        botaoMenu.setAttribute("aria-expanded", aberto);
    });

    document.addEventListener("click", function (event) {
        if (
            !menu.contains(event.target) &&
            !botaoMenu.contains(event.target)
        ) {
            menu.classList.remove("active");
            botaoMenu.setAttribute("aria-expanded", "false");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            menu.classList.remove("active");
            botaoMenu.setAttribute("aria-expanded", "false");
        }
    });

    horas.forEach(function (input) {
        input.addEventListener("input", calcular);
    });

    minutos.forEach(function (input) {
        input.addEventListener("input", calcular);
    });

    function calcular() {
        let totalMinutos = 0;

        for (let i = 0; i < horas.length; i++) {
            const valorHoras = parseInt(horas[i].value, 10) || 0;
            const valorMinutos = parseInt(minutos[i].value, 10) || 0;

            totalMinutos += (valorHoras * 60) + valorMinutos;
        }

        const horasTotal = Math.floor(totalMinutos / 60);
        const minutosTotal = totalMinutos % 60;

        resultado.textContent =
            String(horasTotal).padStart(2, "0") +
            ":" +
            String(minutosTotal).padStart(2, "0");
    }

    btnLimpar.addEventListener("click", function () {
        document.querySelectorAll("input").forEach(function (input) {
            input.value = "";
        });

        resultado.textContent = "00:00";
    });
});
