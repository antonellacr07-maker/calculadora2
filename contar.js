//Funcion WHILE
const resultado = document.getElementById('resultado');
const numeroInput = document.getElementById('numeroInput');
const numContar = document.getElementById('numContar');

//Flecha para que la funcion sea mas sencilla y corta
numContar.addEventListener('click', () => {
    const numero = parseInt(numeroInput.value);
    let contador = 1;
    let textoWhile = ' ';
    // se ejecutará mientras la variable 'contador'
    // sea menor o igual que el numero que el usuario ingresó.
    // en cada repetición, se añade el número a la cadena de texto
    // y se incrementa el contador en 1.
    while (contador <= numero) {
        textoWhile += contador + ' ';
        contador++; // se aumenta el contador para evitar un bucle infinito.
    }
    // Cuando 'contador' es mayor que 'numero', la condición se vuelve falsa y el bucle termina.
    resultado.textContent = textoWhile;
}) 