document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleccionamos todas las tarjetas del feed y el contenedor del carrusel
    const tarjetas = document.querySelectorAll(".feed .tarjeta");
    const carrusel = document.querySelector(".carrusel");

    // Limpiamos el carrusel por si acaso ya tenía contenido estático de prueba
    carrusel.innerHTML = "";

    // 2. Definimos cuántas tarjetas queremos pasar al carrusel (por ejemplo, las primeras 4)
    const cantCarrusel = 4;

    // 3. Recorremos esas primeras tarjetas, las clonamos y las metemos al carrusel
    for (let i = 0; i < Math.min(tarjetas.length, cantCarrusel); i++) {
        let copia = tarjetas[i].cloneNode(true);
        copia.classList.add("tarjeta-carrusel");
        carrusel.appendChild(copia);
    }
});