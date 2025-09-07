document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');

    let secretNumber;
    let attempts;

    // Función para iniciar un nuevo juego
    const newGame = () => {
        // 1. Genera un número secreto entre 1 y 100
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        message.textContent = 'He pensado en un número nuevo. ¡Intenta adivinar!';
        message.style.color = '#333';
        guessInput.value = '';
        guessButton.disabled = false;
        console.log(`Número secreto para depuración: ${secretNumber}`); // Pista para nosotros
    };

    // Función para manejar el intento del usuario
    const checkGuess = () => {
        const userGuess = parseInt(guessInput.value);
        let isFinished = false;

        // Validamos la entrada del usuario
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
            message.style.color = 'red';
            return;
        }

        attempts++;

        // --- BUCLE TIPO "WHILE" ---
        while (true) {
            if (userGuess === secretNumber) {
                message.textContent = `¡Felicidades! Adivinaste el número ${secretNumber} en ${attempts} intentos.`;
                message.style.color = 'green';
                isFinished = true;
                break; // Salimos del bucle porque ya adivinó
            } else if (userGuess < secretNumber) {
                message.textContent = `El número es más ALTO que ${userGuess}. ¡Sigue intentando!`;
                message.style.color = '#e67e22'; // Naranja
                break; // Salimos para esperar el siguiente intento del usuario
            } else { // userGuess > secretNumber
                message.textContent = `El número es más BAJO que ${userGuess}. ¡Sigue intentando!`;
                message.style.color = '#3498db'; // Azul
                break; // Salimos para esperar el siguiente intento del usuario
            }
        }

        // Si el juego ha terminado, preparamos uno nuevo
        if (isFinished) {
            guessButton.disabled = true; // Desactivamos el botón temporalmente
            setTimeout(() => {
                newGame(); // Inicia un nuevo juego después de 3 segundos
            }, 3000);
        }
    };

    // Asignamos el evento al botón
    guessButton.addEventListener('click', checkGuess);

    // Permitimos que el usuario presione "Enter" para adivinar
    guessInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            checkGuess();
        }
    });

    // Iniciamos el primer juego al cargar la página
    newGame();
});
