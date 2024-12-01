window.onload = function() {
    const paragraphs = document.querySelectorAll('p'); // Selecciona todos los párrafos en la página
    paragraphs.forEach((p, index) => {
        p.id = 'parrafo' + (index + 1);  // Asigna un id único a cada párrafo, como parrafo1, parrafo2, etc.

        // Crear el botón de copiar con emoji
        const button = document.createElement('button');
        button.innerHTML = '📋'; // Usamos el emoji de portapapeles
        button.onclick = function() {
            copiarAlPortapapeles(p.id); // Llama a la función de copiar usando el id del párrafo
        };

        // Agregar el botón al párrafo
        p.appendChild(button);
    });
}

// Función para copiar el texto al portapapeles
function copiarAlPortapapeles(id) {
    const texto = document.getElementById(id).innerText; // Obtiene el texto del párrafo
    const textarea = document.createElement('textarea'); // Crea un campo de texto temporal
    textarea.value = texto; // Pone el texto en el campo
    document.body.appendChild(textarea); // Añade el campo al cuerpo del documento
    textarea.select(); // Selecciona el contenido del campo
    document.execCommand('copy'); // Ejecuta el comando de copiar
    document.body.removeChild(textarea); // Elimina el campo de texto temporal
    alert('Texto copiado al portapapeles');
}

function copiarAlPortapapeles(id) {
    var texto = document.getElementById(id).innerText;  // Obtener el texto del párrafo
    var areaDeTexto = document.createElement('textarea');  // Crear un área de texto temporal
    areaDeTexto.value = texto;  // Establecer el valor del área de texto como el texto del párrafo
    document.body.appendChild(areaDeTexto);  // Agregar el área de texto al cuerpo del documento
    areaDeTexto.select();  // Seleccionar el texto
    document.execCommand('copy');  // Ejecutar el comando para copiar al portapapeles
    document.body.removeChild(areaDeTexto);  // Eliminar el área de texto temporal
    mostrarAlerta('Texto copiado al portapapeles!');  // Mostrar una alerta indicando que el texto fue copiado
}

function mostrarAlerta(mensaje) {
    const alerta = document.createElement('div');
    alerta.classList.add('alerta');
    alerta.textContent = mensaje;

    document.body.appendChild(alerta);

    // Desaparece automáticamente después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

