// Referencias a los elementos del DOM
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsContainer = document.getElementById('comments-container');

// Escuchar el evento de envío del formulario
commentForm.addEventListener('submit', function(event) {
    // Evitar que la página se recargue al enviar el formulario
    event.preventDefault();

    // Obtener el texto del comentario y eliminar espacios en blanco al inicio/final
    const text = commentInput.value.trim();

    // Validación básica: no agregar comentarios vacíos
    if (text === '') return;

    // Obtener la fecha y hora actuales
    const now = new Date();
    const dateString = now.toLocaleDateString('es-ES');
    const timeString = now.toLocaleTimeString('es-ES');

    // Crear el contenedor principal del nuevo comentario
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    // Crear la cabecera del comentario (contendrá la fecha y el botón de borrar)
    const headerElement = document.createElement('div');
    headerElement.classList.add('comment-header');

    // Elemento para la fecha
    const timeElement = document.createElement('span');
    timeElement.textContent = `Publicado el ${dateString} a las ${timeString}`;

    // Elemento para el botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Eliminar';
    
    // Agregar la funcionalidad para eliminar el comentario al hacer clic
    deleteButton.addEventListener('click', function() {
        commentElement.remove();
    });

    // Agregar fecha y botón a la cabecera
    headerElement.appendChild(timeElement);
    headerElement.appendChild(deleteButton);

    // Crear el elemento para el texto del comentario
    const textElement = document.createElement('p');
    textElement.classList.add('comment-text');
    textElement.textContent = text;

    // Ensamblar el comentario completo
    commentElement.appendChild(headerElement);
    commentElement.appendChild(textElement);

    // Agregar el nuevo comentario al inicio del contenedor principal
    commentsContainer.prepend(commentElement);

    // Limpiar el área de texto para un nuevo comentario
    commentInput.value = '';
});
