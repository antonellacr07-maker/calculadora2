// funcion SWITCH CASE
const numeroInput = document.getElementById('numeroInput');
const evaluarBtn = document.getElementById('evaluarBtn');
const resultadoSwitch = document.getElementById('resultadoSwitch');

if (evaluarBtn) {
    evaluarBtn.addEventListener('click', () => {
        const numero = parseInt(numeroInput.value);
        let mensaje;

        switch (numero) {
            case 1:
                mensaje = 'Elegiste el número uno.';
                break;
            case 2:
                mensaje = 'Elegiste el número dos.';
                break;
            case 3:
                mensaje = 'Elegiste el número tres.';
                break;
            default:
                mensaje = 'Por favor, elige un número entre 1 y 3.';
        }
        
        resultadoSwitch.textContent = mensaje;
    });
}