document.addEventListener('DOMContentLoaded', () => {
    const bolas = document.querySelectorAll('.bola');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    bolas.forEach((bola) => {
        const randomX = Math.random() * (screenWidth - 40); // Resta el tamaño de la bola
        const randomY = Math.random() * (screenHeight - 40); // Resta el tamaño de la bola
        bola.style.left = `${randomX}px`;
        bola.style.top = `${randomY}px`;
        bola.style.animationDelay = `${Math.random() * 2}s`; // Añadir retraso aleatorio
    });
});
