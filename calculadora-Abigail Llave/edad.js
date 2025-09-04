//Funcion if else
const edadInput = document.getElementById('edadInput');
const verificarEdadBtn = document.getElementById('verificarEdad');
const resultado = document.getElementById('resultado');

verificarEdadBtn.addEventListener('click', verificar)

function verificar (){
    const edad = parseInt(edadInput.value);
    if (edad >= 18) {
        resultado.textContent = 'Eres mayor de edad.';
    } else {
        resultado.textContent = 'Eres menor de edad.';
    }
}