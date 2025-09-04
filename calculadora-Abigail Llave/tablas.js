// FUNCION FOR para mostrar la tabla del numero ingresado
const resultado = document.getElementById('resultado');
const tablaboton = document.getElementById('tablanum');
const numInput = document.getElementById('numinput');
const numerosConsultadosDiv = document.getElementById('numerosConsultados');

tablaboton.addEventListener("click", mostrarTabla);
// SET para guardar números consultados sin duplicados
const numerosConsultados = new Set();

//se pone como array para guardar los nros con ', '
function actualizarNumerosConsultados() {
    const numerosComoArray = Array.from(numerosConsultados);
    numerosConsultadosDiv.textContent = [${numerosComoArray.join(', ')}];
}

function mostrarTabla(){
    const num = parseInt(numInput.value);
    // Limpiar el resultado anterior
    resultado.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const item = document.createElement('li');
        item.textContent = ${num} x ${i} = ${num * i};
        resultado.appendChild(item);
    }
    // Añadir el número al SET y actualizar la vista
    numerosConsultados.add(num);
    actualizarNumerosConsultados();
}