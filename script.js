document.addEventListener('DOMContentLoaded', function() {
    const clickBox = document.getElementById('click-box');
    const heartContainer = document.getElementById('heart-container');
    
    clickBox.addEventListener('click', function() {
        // Ocultar el cuadro de click
        clickBox.classList.add('hidden');
        
        // Mostrar el corazón
        heartContainer.classList.remove('hidden');
    });
});