document.addEventListener("DOMContentLoaded", () => {
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");
    const calcularBtn = document.getElementById("calcularIMC");
    const resultadoP = document.getElementById("resultadoIMC");
    
    if (calcularBtn) { // Asegurarnos de que el botón existe antes de añadir el listener
        calcularBtn.addEventListener("click", () => {
            const peso = parseFloat(pesoInput.value);
            const altura = parseFloat(alturaInput.value);

            if (isNaN(peso) || isNaN(altura) || altura <= 0) {
                resultadoP.textContent = "Por favor, introduce valores válidos para peso y altura.";
                resultadoP.style.color = "red";
                return;
            }

            const imc = peso / (altura * altura);
            let categoria;
            let color;

            if (imc < 18.5) {
                categoria = "Bajo peso";
                color = "#3498db"; // Azul
            } else if (imc >= 18.5 && imc < 24.9) {
                categoria = "Peso normal";
                color = "#2ecc71"; // Verde
            } else if (imc >= 25 && imc < 29.9) {
                categoria = "Sobrepeso";
                color = "#f1c40f"; // Amarillo
            } else { // imc >= 30
                categoria = "Obesidad";
                color = "#e74c3c"; // Rojo
            }

            resultadoP.innerHTML = `Tu IMC es <strong>${imc.toFixed(2)}</strong>. Esto se considera <strong>${categoria}</strong>.`;
            resultadoP.style.color = color;
        });
    }
});
