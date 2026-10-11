document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".feed .tarjeta");
    const carrusel = document.querySelector(".carrusel");
    const cantCarrusel = 4;
    
    for (let i = 0; i < Math.min(tarjetas.length, cantCarrusel); i++) {
        let copia = tarjetas[i].cloneNode(true);
        copia.classList.add("tarjeta-carrusel");
        carrusel.appendChild(copia);
    }
});