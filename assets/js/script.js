const tarjetas = document.querySelectorAll(".feed .tarjeta");
const carrusel = document.querySelector(".carrusel");
const cantCarrusel = 4;

for (let i = 0; i < Math.min(tarjetas.length, cantCarrusel); i++) {
    let copia = tarjetas[i].cloneNode(true);
    copia.classList.add("tarjeta-carrusel");
    carrusel.appendChild(copia);
}

const btnHome = document.getElementById("btnInicio");
// Quiero intentar hacer que si está en la página, haga un scroll suave hacia arriba
if (btnHome) {
    btnHome.addEventListener("click", (ev) => {
        const rutaPag = window.location.pathname;
        const esPagActual = rutaPag === "/";

        if (esPagActual) {
            ev.preventDefault;
            window.scrollTo({top: 0, behavior: "smooth"})
        }
    });
}
