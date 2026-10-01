function calcularNotas() {
    const linhas = document.querySelectorAll("#boletim tr");

    linhas.forEach((linha) => {
        const notas = linha.querySelectorAll(".nota");
        const total = linha.querySelector(".total");
        const situacao = linha.querySelector(".situacao");

        if (!total || !situacao) return;

        let soma = 0;
        let preenchidas = 0;

        notas.forEach((campo) => {
            if (campo.value !== "") {
                soma += Number(campo.value);
                preenchidas++;
            }
        });

        total.textContent = soma;

        if (preenchidas === 3) {
            if (soma >= 180) {
                situacao.textContent = "Passou!";
            } else {
                situacao.textContent = `Faltam ${180 - soma} pontos`;
            }
        } else if (preenchidas === 2) {
            const falta = 180 - soma;

            if (falta <= 0) {
                situacao.textContent = "Já atingiu 180";
            } else if (falta <= 100) {
                situacao.textContent = `Precisa de ${falta} no 3º`;
            } else {
                situacao.textContent = "Precisa de mais de 100";
            }
        } else {
            situacao.textContent = "Digite as notas";
        }
    });
}