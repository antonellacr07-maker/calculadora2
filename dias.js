document.addEventListener('DOMContentLoaded', () => {
    const dayInput = document.getElementById('dayInput');
    const checkDayButton = document.getElementById('checkDayButton');
    const resultMessage = document.getElementById('resultMessage');

    checkDayButton.addEventListener('click', () => {
        const dayNumber = parseInt(dayInput.value);

        switch (dayNumber) {
            case 1:
                resultMessage.textContent = "Lunes";
                break;
            case 2:
                resultMessage.textContent = "Martes";
                break;
            case 3:
                resultMessage.textContent = "Miércoles";
                break;
            case 4:
                resultMessage.textContent = "Jueves";
                break;
            case 5:
                resultMessage.textContent = "Viernes";
                break;
            case 6:
                resultMessage.textContent = "Sábado";
                break;
            case 7:
                resultMessage.textContent = "Domingo";
                break;
            default:
                resultMessage.textContent = "Por favor, introduce un número válido del 1 al 7.";
        }
    });
});
