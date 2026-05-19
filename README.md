# Caja de Comentarios - Seguimiento de Libros

Este proyecto es una aplicación web interactiva que funciona como un sistema de comentarios básico. Su desarrollo tiene como objetivo principal poner en práctica los fundamentos de la manipulación del DOM (Document Object Model) y la gestión de eventos utilizando JavaScript.

## Descripción del proyecto

La aplicación simula la sección de comentarios de una plataforma de seguimiento de libros. Permite a los usuarios redactar un mensaje a través de un formulario y visualizarlo en la pantalla de forma inmediata. Este ejercicio es fundamental para comprender cómo interactúa JavaScript con el HTML para modificar el contenido y la estructura de una página web en tiempo real, sin necesidad de recargar el navegador.

## Características principales

* **Publicación en tiempo real:** Los usuarios pueden escribir y agregar comentarios que se insertan dinámicamente en la interfaz justo debajo del formulario.
* **Registro de tiempo (Timestamps):** Cada comentario generado captura y muestra automáticamente la fecha y la hora exacta en la que fue publicado.
* **Eliminación de elementos:** Cada comentario incluye un botón funcional que permite al usuario borrar ese mensaje específico de la pantalla, modificando el DOM al instante.
* **Prevención de recargas:** El formulario intercepta el evento de envío (submit) por defecto, evitando que la página se actualice y pierda el estado actual de los comentarios.

## Objetivos de aprendizaje aplicados

Durante el desarrollo de este proyecto se aplicaron los siguientes conceptos:
* Captura y manejo de eventos de usuario (clics y envíos de formulario).
* Uso de `event.preventDefault()` para controlar el comportamiento nativo del navegador.
* Creación dinámica de elementos HTML (`document.createElement`).
* Inserción y eliminación de nodos en el DOM (`appendChild`, `prepend`, `remove`).
* Lectura y limpieza de valores de campos de entrada (inputs/textareas).
* Obtención y formateo de fechas usando el objeto `Date` de JavaScript.

## Tecnologías utilizadas

* **HTML5:** Para la estructura del formulario y el contenedor de comentarios.
* **CSS3:** Para aplicar un diseño limpio, legible y amigable para el usuario.
* **JavaScript (Vanilla):** Para toda la lógica de interactividad y manipulación del DOM.

## Instrucciones de uso local

Para probar este proyecto en tu equipo:

1. Clona este repositorio o descarga los archivos fuente (`index.html`, `styles.css`, `script.js`).
2. Guarda los tres archivos en una misma carpeta.
3. Abre el archivo `index.html` haciendo doble clic sobre él o arrastrándolo a tu navegador web favorito. No se requiere la instalación de servidores locales ni dependencias adicionales.
