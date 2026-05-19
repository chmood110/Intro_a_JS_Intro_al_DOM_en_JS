# Generador de Contraseñas Seguras 

Este proyecto es una aplicación web interactiva diseñada para generar contraseñas seguras y aleatorias basadas en las preferencias del usuario. El diseño y los requerimientos funcionales toman como referencia un desafío propuesto por la plataforma Frontend Mentor.

## Descripción y objetivo

El propósito principal de este desarrollo fue poner en práctica y fortalecer conceptos fundamentales del desarrollo frontend. Durante su creación, el enfoque se centró en la manipulación dinámica del DOM, el manejo de eventos a través de JavaScript, y la maquetación estructurada e interactiva utilizando HTML y CSS.

## Características principales

* **Personalización de longitud:** El usuario puede ajustar la cantidad de caracteres de la contraseña (de 1 a 20) utilizando un control deslizante continuo.
* **Filtros de caracteres:** Permite seleccionar combinaciones específicas de letras mayúsculas, minúsculas, números y símbolos para armar la clave.
* **Evaluación de seguridad:** Cuenta con un algoritmo interno e indicador visual que calcula y muestra en tiempo real la fortaleza de la contraseña generada, clasificándola desde muy débil hasta fuerte.
* **Copiado rápido:** Incluye una función nativa para copiar la contraseña resultante directamente al portapapeles del sistema con un solo clic, mejorando la experiencia de uso.

## Tecnologías implementadas

* **HTML5:** Utilizado para construir la estructura semántica de la interfaz y del formulario.
* **CSS3:** Empleado para la maquetación y el diseño visual. Se implementaron variables de entorno, Flexbox para la alineación de componentes y estilos completamente personalizados para alterar el diseño por defecto de elementos nativos, como el control deslizante y las casillas de verificación.
* **JavaScript (Vanilla):** Responsable de toda la lógica de la aplicación. Maneja el algoritmo de generación aleatoria matemática, el cálculo de la fuerza de la contraseña y la actualización de la interfaz en tiempo real según las interacciones del usuario.

## Estructura del repositorio

* `index.html`: Define el esqueleto principal y los elementos visuales de la página.
* `styles.css`: Contiene las reglas de diseño, colores y adaptabilidad del proyecto.
* `script.js`: Archivo encargado de procesar los eventos del usuario y ejecutar la funcionalidad central.

## Instrucciones de uso local

Para visualizar y probar el funcionamiento del proyecto en un entorno local, los pasos son muy sencillos:

1.  Descarga o clona este repositorio en tu equipo.
2.  Navega hasta la carpeta del proyecto.
3.  Abre el archivo `index.html` en tu navegador web de preferencia. No es necesario instalar dependencias ni correr un servidor local.
