// Abre e fecha o menu
function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const botaoMenu = document.querySelector(".menu-btn");

    const horas = document.querySelectorAll(".hora");
    const minutos = document.querySelectorAll(".minuto");

    const resultado = document.getElementById("resultado");
    const btnLimpar = document.getElementById("btnLimpar");

    // Fecha o menu ao clicar fora
    document.addEventListener("click", function (event) {
        const clicouNoMenu = menu.contains(event.target);
        const clicouNoBotao = botaoMenu.contains(event.target);

        if (!clicouNoMenu && !clicouNoBotao) {
            menu.classList.remove("active");
        }
    });

    // Calcula automaticamente
    horas.forEach(function (input) {
        input.addEventListener("input", calcular);
    });

    minutos.forEach(function (input) {
        input.addEventListener("input", calcular);
    });

    function calcular() {
        let totalMinutos = 0;

        for (let i = 0; i < horas.length; i++) {
            const h = parseInt(horas[i].value) || 0;
            const m = parseInt(minutos[i].value) || 0;

            totalMinutos += (h * 60) + m;
        }

        const horasTotal = Math.floor(totalMinutos / 60);
        const minutosTotal = totalMinutos % 60;

        resultado.textContent =
            String(horasTotal).padStart(2, "0") +
            ":" +
            String(minutosTotal).padStart(2, "0");
    }

    // Limpa os campos
    function limpar() {
        document.querySelectorAll("input").forEach(function (input) {
            input.value = "";
        });

        resultado.textContent = "00:00";
    }

    btnLimpar.addEventListener("click", limpar);
});
