// script general
const rutaActual = window.location.pathname;

const homeLink = document.getElementById("home-link");
const nltLink = document.getElementById("newsletter-link");
const newsLink = document.getElementById("noticias-link")

homeLink.addEventListener('click', function (ev) {
    if (rutaActual.endsWith("index.html")) {
        ev.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
})

nltLink.addEventListener('click', function (ev) {
    if (rutaActual.endsWith("newsletter.html")) {
        ev.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});

newsLink.addEventListener('click', function (ev) {
    if (rutaActual.endsWith("noticias.html")) {
        ev.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});

// fin script general

// script de index

if (rutaActual.endsWith("index.html")) {
    let cindex = 0;
    let chref;
    let ctrans;
    let cimg;
    let ctxt;

    ctrans = document.getElementsByClassName("cTransition");
    chref = document.getElementsByClassName("cHref");
    cimg = document.getElementsByClassName("cImg");
    ctxt = document.getElementsByClassName("cTxt");
    carruselChange();

    function carruselIndex() {
        ctrans[0].classList.add("show");
        cindex++;
        if (cindex >= 5) { cindex = 0; }
        setTimeout(carruselChange, 1285);
    }

    function carruselChange() {
        ctrans[0].classList.remove("show");

        if (cindex == 0) {
            chref[0].setAttribute("href", "pagina1.html");
            cimg[0].setAttribute("src", "./assets/img/Carrusel-(El-sistema-solar).png");
            ctxt[0].innerHTML = `
                    <h2>🪐 El sistema solar</h2>
                    <h3>conocé los planetas, el Sol, las lunas y otros cuerpos celestes que forman nuestro vecindario cósmico.</h3>
                `;
        }

        if (cindex == 1) {
            chref[0].setAttribute("href", "pagina2.html");
            cimg[0].setAttribute("src", "./assets/img/Carrusel-(Estrellas-y-galaxias).png");
            ctxt[0].innerHTML = `
                    <h2>⭐ Estrellas y galaxias</h2>
                    <h3>descubrí las enormes estructuras que habitan el universo, cómo nacen las estrellas y qué secretos esconden las galaxias.</h3>
                `;
        }

        if (cindex == 2) {
            chref[0].setAttribute("href", "pagina3.html");
            cimg[0].setAttribute("src", "./assets/img/Carrusel-(Exploracion-espacial).png");
            ctxt[0].innerHTML = `
                    <h2>🚀 Exploración espacial</h2>
                    <h3>acompañá a astronautas y sondas espaciales en sus misiones para explorar nuevos mundos y ampliar nuestros conocimientos.</h3>
                `;
        }

        if (cindex == 3) {
            chref[0].setAttribute("href", "pagina4.html");
            cimg[0].setAttribute("src", "./assets/img/Carrusel-(Misterios-del-universo).png");
            ctxt[0].innerHTML = `
                    <h2>🕳️ Misterios del universo</h2>
                    <h3>adentrate en los enigmas de los agujeros negros, la materia oscura y los orígenes del cosmos.</h3>
                `;
        }

        if (cindex == 4) {
            chref[0].setAttribute("href", "pagina4.html");
            cimg[0].setAttribute("src", "./assets/img/Carrusel-(Fenomenos-espaciales).png");
            ctxt[0].innerHTML = `
                    <h2>🌠 Fenómenos espaciales</h2>
                    <h3>maravillate con las auroras, los eclipses, las supernovas y otros espectáculos naturales que ocurren en el espacio.</h3>
                `;
        }

        setTimeout(carruselIndex, 7000);
    }

}

// fin script de index

// script de newsletter

if (rutaActual.endsWith("newsletter.html")) {
    
    const emailRegistrados = []; // un extra

    const nombreRegEx = /^[^0-9]{2,20}$/;
    const emailRegEx = /[a-zA-Z0-9._]+@(hotmail|gmail)\.com$/;

    const formulario = document.getElementById("newsletter");

    const formNombre = document.querySelector("#fname");
    const formApellido = document.querySelector("#lname");
    const formEmail = document.querySelector("#email");
    const formFecha = document.querySelector("#fnac");

    const emailMsj = document.querySelector(".email-msj");
    const nombreMsj = document.querySelector(".nombre-msj");
    const apellidoMsj = document.querySelector(".apellido-msj");

    let boolEmail = false;
    let boolFecha = false;
    let boolNombre = true; // no son obligatorios
    let boolApellido = true;

    if (formNombre) {
        formNombre.addEventListener("input", function (ev) {
            let valorNombre = formNombre.value.trim();

            if (valorNombre === "") {
                nombreMsj.textContent = "";
                formNombre.style.borderColor = "";
                boolNombre = true;

            } else if (nombreRegEx.test(valorNombre)) {
                nombreMsj.textContent = "";
                formNombre.style.borderColor = "rgb(0, 202, 44)"
                boolNombre = true;
            } else {
                nombreMsj.textContent = "Debe tener entre 2 y 20 carácteres y sin números."
                nombreMsj.style.color = "rgb(255, 0, 0)";
                formNombre.style.borderColor = "rgb(255, 0, 0)";
                boolNombre = false;
            }

        }); // validacion de nombre por longitud
    }

    if (formApellido) {
        formApellido.addEventListener("input", function (ev) {
            let valorApellido = formApellido.value.trim();

            if (valorApellido == "") {
                apellidoMsj.textContent = "";
                formApellido.style.borderColor = "";
                boolApellido = true;

            } else if (nombreRegEx.test(valorApellido)) {
                apellidoMsj.textContent = "";
                formApellido.style.borderColor = "rgb(0, 202, 44)";
                boolApellido = true;

            } else {
                apellidoMsj.textContent = "Debe tener entre 2 y 20 carácteres y sin números."
                apellidoMsj.style.color = "rgb(255, 0, 0)";
                formApellido.style.borderColor = "rgb(255, 0, 0)";
                boolApellido = false;

            }

        }); // validacion de apellido por longitud
    }

    if (formEmail) {
        formEmail.addEventListener("input", function (ev) {
            let valorEmail = formEmail.value.trim();

            if (valorEmail === "") {
                emailMsj.textContent = "";
                formEmail.style.borderColor = "";
                boolEmail = false;

            } else if (emailRegistrados.includes(valorEmail)) {
                emailMsj.textContent = "Ya se registró ese email"
                emailMsj.style.color = "rgb(255, 0, 0)";
                formEmail.style.borderColor = "rgb(255, 0, 0)";
                boolEmail = false;

            } else if (emailRegEx.test(valorEmail)) {
                emailMsj.textContent = "";
                formEmail.style.borderColor = "rgb(0, 202, 44)";
                boolEmail = true;

            } else {
                emailMsj.textContent = "Por favor, ingrese un e-mail válido.";
                emailMsj.style.color = "rgb(255, 0, 0)";
                formEmail.style.borderColor = "rgb(255, 0, 0)";
                boolEmail = false;

            }
        }); // validacion de email por formato
    }


    if (formFecha) {

        formFecha.addEventListener("click", function (ev) {
            this.showPicker();
        }); // abre el calendar al hacer click en cualquier parte del input

        formFecha.addEventListener("change", function (ev) {
            const fechaMsj = document.getElementsByClassName("fecha-msj")[0];

            const fechaRef = new Date();
            const anio = fechaRef.getFullYear();
            const anioMin = anio - 13;
            const mes = String(fechaRef.getMonth() + 1).padStart(2, '0');
            const dia = String(fechaRef.getDate()).padStart(2, '0'); // getDay() da 0 cuando es 25,
            const fechaHoy = `${anio}-${mes}-${dia}`;
            const fechaMin = `${anioMin}-${mes}-${dia}`;

            let fechaSel = formFecha.value;

            if (fechaSel === "") {
                fechaMsj.textContent = "";
                formFecha.style.borderColor = "";
                boolFecha = false;
            }
            else if (fechaSel === fechaHoy || fechaSel > fechaHoy) {
                fechaMsj.textContent = "No puedes introducir una fecha actual o futura.";
                fechaMsj.style.color = "rgb(255, 0, 0)";
                formFecha.style.borderColor = "rgb(255, 0, 0)";
                boolFecha = false;
            }
            else if (fechaSel > fechaMin) {
                fechaMsj.textContent = "Debes ser mayor de 13 años.";
                fechaMsj.style.color = "rgb(255, 0, 0)";
                formFecha.style.borderColor = "rgb(255, 0, 0)";
                boolFecha = false;
            }
            else {
                fechaMsj.textContent = "";
                formFecha.style.borderColor = "rgb(0, 202, 44)";
                boolFecha = true;
            }
        });
    }

    if (formulario) {
        formulario.addEventListener("submit", function (ev) {
            ev.preventDefault();

            const btnMsj = document.getElementsByClassName("submit-msj")[0];

            if (boolEmail === false || boolFecha === false ) {
                btnMsj.textContent = "Por favor, complete los campos obligatorios."
                btnMsj.style.color = "rgb(255, 0, 0)";

            } else if (boolApellido === false || boolNombre === false) {
                btnMsj.textContent = "Complete o limpie los campos opcionales"
                btnMsj.style.color = "rgb(255, 0, 0)";
            } else {
                btnMsj.textContent = "";

                const informeExiste = document.querySelector(".form-informe")
                if (informeExiste) {
                    informeExiste.remove(); // si ya hay un informe lo elimina
                }

                const nombre = document.querySelector("#fname");
                const apellido = document.querySelector("#lname");
                const email = document.querySelector("#email").value;
                const gender = document.querySelector("#gender");
                const fecha = document.querySelector("#fnac").value;

                const informe = document.createElement("div");
                informe.classList.add("form-informe");

                informe.style.backgroundColor = "rgba(17, 20, 33, 0.85)";
                informe.style.padding = "20px";
                informe.style.borderRadius = "10px";
                informe.style.marginTop = "10px";

                const titulo = document.createElement("h3");
                titulo.textContent = "Registro Exitoso";
                titulo.style.color = "rgb(0, 202, 44)";
                titulo.style.marginBottom = "10px";
                informe.appendChild(titulo);

                const lista = document.createElement("ul");
                lista.style.listStyle = "none";

                if (nombre.value != "") {
                    const nombreLi = document.createElement("li");
                    nombreLi.textContent = `Nombre: ${nombre.value}`;
                    nombreLi.style.padding = "6px 0";
                    nombreLi.style.borderBottom = "1px solid rgba(255, 255, 255, 0.5)";
                    lista.appendChild(nombreLi);
                }

                if (apellido.value != "") {
                    const apellidoLi = document.createElement("li");
                    apellidoLi.textContent = `Apellido: ${apellido.value}`;
                    apellidoLi.style.padding = "6px 0";
                    apellidoLi.style.borderBottom = "1px solid rgba(255, 255, 255, 0.5)";
                    lista.appendChild(apellidoLi);
                }

                const emailLi = document.createElement("li");
                emailLi.textContent = `E-mail: ${email}`;
                emailLi.style.padding = "6px 0";
                emailLi.style.borderBottom = "1px solid rgba(255, 255, 255, 0.5)";
                lista.appendChild(emailLi);

                emailRegistrados.push(email);
                
                for (const element of emailRegistrados) {
                    console.log(element);
                }

                if (gender && gender.value !== "") {
                    const generoLi = document.createElement("li");
                    generoLi.textContent = `Género: ${gender.value}`;
                    generoLi.style.padding = "6px 0";
                    generoLi.style.borderBottom = "1px solid rgba(255, 255, 255, 0.5)";
                    lista.appendChild(generoLi);
                }

                const fechaLi = document.createElement("li");
                fechaLi.textContent = `Fecha de nacimiento: ${fecha}`;
                fechaLi.style.padding = "6px 0";

                lista.appendChild(fechaLi);
                informe.appendChild(lista);

                const btnCerrar = document.createElement("button");
                btnCerrar.textContent = "Cerrar";
                btnCerrar.style.padding = "4px";
                btnCerrar.style.border = "2px solid rgb(204, 204, 204)";
                btnCerrar.style.borderRadius = "10px";
                btnCerrar.style.cursor = "pointer";

                btnCerrar.addEventListener("click", function (ev) {
                    informe.remove();
                });

                informe.appendChild(btnCerrar);
                formulario.appendChild(informe);
                formulario.reset();

                formNombre.style.borderColor = "";
                formApellido.style.borderColor = "";
                formEmail.style.borderColor = "";
                formFecha.style.borderColor = "";

                boolNombre = true;
                boolApellido = true;
                boolEmail = false;
                boolFecha = false;
            }

        });
    }





}





