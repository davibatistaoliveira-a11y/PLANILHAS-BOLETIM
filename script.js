javascript
function calcularNotas() {

    let materias = document.querySelectorAll("#boletim tr");

    materias.forEach(function(materia) {

        let notas = materia.querySelectorAll(".nota");

        let nota1 = Number(notas[0].value) || 0;
        let nota2 = Number(notas[1].value) || 0;
        let nota3 = Number(notas[2].value) || 0;

        let total = nota1 + nota2 + nota3;

        let totalElemento = materia.querySelector(".total");
        let situacaoElemento = materia.querySelector(".situacao");

        totalElemento.textContent = total;

        if (total >= 180) {

            situacaoElemento.textContent = "Passou!";

        } else if (notas[2].value === "") {

            let necessario = 180 - nota1 - nota2;

            if (necessario <= 100) {
                situacaoElemento.textContent =
                    "Precisa de " + necessario + " no 3º";
            } else {
                situacaoElemento.textContent =
                    "Não é possível atingir 180";
            }

        } else {

            let falta = 180 - total;

            situacaoElemento.textContent =
                "Faltam " + falta + " pontos";
        }
    });
}

