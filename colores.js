document.addEventListener('DOMContentLoaded', () => {
    const generarBtn = document.getElementById('generarPaleta');
    const paletaContenedor = document.getElementById('paletaContenedor');

    // Función para generar un color hexadecimal aleatorio
    const generarColorAleatorio = () => {
        const caracteres = '0123456789ABCDEF';
        let color = '#';
        // Bucle for para construir el código de color de 6 dígitos
        for (let i = 0; i < 6; i++) {
            color += caracteres[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const generarPaleta = () => {
        paletaContenedor.innerHTML = ''; // Limpiamos la paleta anterior

        // Bucle for principal: se ejecuta 5 veces para crear 5 colores
        for (let i = 0; i < 5; i++) {
            const colorAleatorio = generarColorAleatorio();

            // Creamos los elementos HTML para mostrar el color
            const swatch = document.createElement('div');
            swatch.classList.add('color-swatch');
            swatch.style.backgroundColor = colorAleatorio;

            const colorCodigo = document.createElement('span');
            colorCodigo.classList.add('color-code');
            colorCodigo.textContent = colorAleatorio;

            swatch.appendChild(colorCodigo);
            paletaContenedor.appendChild(swatch);
        }
    };

    if (generarBtn) {
        generarBtn.addEventListener('click', generarPaleta);
    }

    // Generamos una paleta inicial al cargar la página
    generarPaleta();
});
