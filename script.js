// Referencias del DOM
const slider = document.getElementById('length-slider');
const lengthDisplay = document.getElementById('length-display');
const btnGenerate = document.getElementById('generate-btn');
const btnCopy = document.getElementById('copy-btn');
const passwordOutput = document.getElementById('password-output');

// Checkboxes
const chkUppercase = document.getElementById('uppercase');
const chkLowercase = document.getElementById('lowercase');
const chkNumbers = document.getElementById('numbers');
const chkSymbols = document.getElementById('symbols');

// Indicador de fuerza
const strengthText = document.getElementById('strength-text');
const bars = document.querySelectorAll('.bar');

// Diccionarios de caracteres
const charSets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

// Actualizar valor del slider dinámicamente y el color de fondo
slider.addEventListener('input', (e) => {
    const value = e.target.value;
    lengthDisplay.textContent = value;
    
    // Calcula el porcentaje para el relleno verde del slider
    const max = slider.max;
    const percentage = (value / max) * 100;
    slider.style.backgroundSize = percentage + '% 100%';
});

// Lógica de copia al portapapeles
btnCopy.addEventListener('click', () => {
    if(!passwordOutput.value) return;
    navigator.clipboard.writeText(passwordOutput.value).then(() => {
        // Podrías mostrar un mensaje de "Copiado" aquí si lo deseas
        alert('¡Contraseña copiada al portapapeles!');
    });
});

// Función Principal: Generar Contraseña
btnGenerate.addEventListener('click', () => {
    let length = +slider.value;
    let allowedChars = '';
    
    if (chkUppercase.checked) allowedChars += charSets.uppercase;
    if (chkLowercase.checked) allowedChars += charSets.lowercase;
    if (chkNumbers.checked) allowedChars += charSets.numbers;
    if (chkSymbols.checked) allowedChars += charSets.symbols;

    if (allowedChars.length === 0 || length === 0) {
        passwordOutput.value = '';
        updateStrength(0);
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    passwordOutput.value = password;
    calculateStrength(length, chkUppercase.checked, chkLowercase.checked, chkNumbers.checked, chkSymbols.checked);
});

// Función para calcular la fuerza de la contraseña
function calculateStrength(length, up, low, num, sym) {
    let score = 0;
    
    if (up) score += 1;
    if (low) score += 1;
    if (num) score += 1;
    if (sym) score += 1;

    // Penalizaciones si la contraseña es muy corta
    if (length < 8) {
        score = Math.min(score, 2); 
    }
    if (length < 4) {
        score = Math.min(score, 1);
    }

    updateStrength(score);
}

// Función para pintar la UI del nivel de fuerza
function updateStrength(score) {
    const labels = ["", "TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
    const colors = ["", "var(--strength-1)", "var(--strength-2)", "var(--strength-3)", "var(--strength-4)"];

    strengthText.textContent = labels[score];

    bars.forEach((bar, index) => {
        if (index < score) {
            bar.style.backgroundColor = colors[score];
            bar.style.borderColor = colors[score];
        } else {
            bar.style.backgroundColor = 'transparent';
            bar.style.borderColor = 'var(--text-main)';
        }
    });
}

// Generar una contraseña inicial por defecto al cargar
btnGenerate.click();
