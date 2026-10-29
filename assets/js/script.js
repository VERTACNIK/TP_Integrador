const rutaActual = window.location.pathname;

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

    const homeLink = document.getElementById("home-link");
    homeLink.addEventListener('click', function (ev) {
        if (rutaActual.endsWith("index.html")) {
            ev.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    })


}

// fin script de index

// script de newsletter

if (rutaActual.endsWith("newsletter.html") || rutaActual.endsWith("contacto.html")) {

    const emailRegistrados = []; // un extra

    const nombreRegEx = /^[^0-9]{2,50}$/;
    const emailRegEx = /[a-zA-Z0-9._]+@(hotmail|gmail)\.com$/;
    const noNumerosRegEx = /[^0-9]/; // por negación
    const asuntoRegEx = /^.{4,50}$/;
    const mensajeRegEx = /^.{4,500}$/;

    const formulario = document.querySelector("#form");

    const formNombre = document.querySelector("#fname");
    const formApellido = document.querySelector("#lname");
    const formEmail = document.querySelector("#email");
    const formFecha = document.querySelector("#fnac");
    const formTelefono = document.querySelector("#telefono");
    const formAsunto = document.querySelector("#titulo");
    const formMensaje = document.querySelector("#text");

    const nombreMsj = document.querySelector(".nombre-msj");
    const apellidoMsj = document.querySelector(".apellido-msj");
    const emailMsj = document.querySelector(".email-msj");
    const fechaMsj = document.querySelector(".fecha-msj");
    const telefonoMsj = document.querySelector(".telefono-msj");
    const asuntoMsj = document.querySelector(".asunto-msj");
    const textoMsj = document.querySelector(".text-msj");
    const btnMensaje = document.querySelector(".submit-msj");

    let valorFecha;
    let boolEmail = false;
    let boolFecha = false;
    let boolTelefono = false;
    let boolMsj = false;
    let boolAsunto = true;
    let boolNombre = true;
    let boolApellido = true;

    if (formNombre) {
        formNombre.addEventListener("input", function () {
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
                nombreMsj.textContent = "Debe tener entre 2 y 50 carácteres y sin números."
                nombreMsj.style.color = "rgb(255, 0, 0)";
                formNombre.style.borderColor = "rgb(255, 0, 0)";
                boolNombre = false;
            }
        }); // Validación de nombre por RegEx.
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
                apellidoMsj.textContent = "Debe tener entre 2 y 50 carácteres y sin números."
                apellidoMsj.style.color = "rgb(255, 0, 0)";
                formApellido.style.borderColor = "rgb(255, 0, 0)";
                boolApellido = false;

            }
        }); // Validación de apellido por RegEx.
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
        }); // Validación de E-mail por Reg-Ex.
    }

    if (formFecha) {
        formFecha.addEventListener("click", function (ev) {
            this.showPicker();
        }); // Abre el calendario al clickear cualquier parte del input de fecha.

        formFecha.addEventListener("change", function (ev) {
            const fechaRef = new Date();
            const anio = fechaRef.getFullYear();
            const anioMin = anio - 13;
            const mes = String(fechaRef.getMonth() + 1).padStart(2, '0');
            const dia = String(fechaRef.getDate()).padStart(2, '0'); // .getDay() devuelve 0??
            const fechaHoy = `${anio}-${mes}-${dia}`;
            const fechaMin = `${anioMin}-${mes}-${dia}`;

            valorFecha = formFecha.value;

            if (valorFecha === "") {
                fechaMsj.textContent = "";
                formFecha.style.borderColor = "";
                boolFecha = false;

            } else if (valorFecha === fechaHoy || valorFecha > fechaHoy) {
                fechaMsj.textContent = "No puedes introducir una fecha actual o futura.";
                fechaMsj.style.color = "rgb(255, 0, 0)";
                formFecha.style.borderColor = "rgb(255, 0, 0)";
                boolFecha = false;

            } else if (valorFecha > fechaMin) {
                fechaMsj.textContent = "Debes ser mayor de 13 años.";
                fechaMsj.style.color = "rgb(255, 0, 0)";
                formFecha.style.borderColor = "rgb(255, 0, 0)";
                boolFecha = false;

            } else {
                fechaMsj.textContent = "";
                formFecha.style.borderColor = "rgb(0, 202, 44)";
                boolFecha = true;
                const [anioF, mesF, diaF] = valorFecha.split("-");
                valorFecha = `${diaF}-${mesF}-${anioF}`;

            } // Validación por una ensalada de funciones y variables.
        });
    }

    if (formTelefono) {
        formTelefono.addEventListener("input", function (ev) {
            let valorTelefono = formTelefono.value.trim();

            if (valorTelefono == "") {
                telefonoMsj.textContent = "Debes introducir un número de télefono."
                telefonoMsj.style.color = "rgb(255, 0, 0)";
                formTelefono.style.borderColor = "rgb(255, 0, 0)";
                boolTelefono = false;

            } else if (noNumerosRegEx.test(valorTelefono)) {
                telefonoMsj.textContent = "Solo se admiten números.";
                telefonoMsj.style.color = "rgb(255, 0, 0)";
                formTelefono.style.borderColor = "rgb(255, 0, 0)";
                boolTelefono = false;

            } else if (valorTelefono.length < 8 || valorTelefono.length > 15) {
                telefonoMsj.textContent = "Debes ingresar entre 7 y 15 dígitos";
                telefonoMsj.style.color = "rgb(255, 0, 0)";
                formTelefono.style.borderColor = "rgb(255, 0, 0)";
                boolTelefono = false;

            } else {
                telefonoMsj.textContent = "";
                formTelefono.style.borderColor = "rgb(0, 202, 44)";
                boolTelefono = true;

            }
        }); // Validación del teléfono por RegEx y .length.
    }

    if (formAsunto) {
        formAsunto.addEventListener("input", function (ev) {
            let valorAsunto = formAsunto.value.trim();

            if (valorAsunto == "") {
                asuntoMsj.textContent = "";
                formAsunto.style.borderColor = "";
                boolAsunto = true;

            } else if (asuntoRegEx.test(valorAsunto)) {
                asuntoMsj.textContent = "";
                formAsunto.style.borderColor = "rgb(0, 202, 44)";
                boolAsunto = true;

            } else {
                asuntoMsj.textContent = "Debe tener entre 2 y 50 carácteres."
                asuntoMsj.style.color = "rgb(255, 0, 0)";
                formAsunto.style.borderColor = "rgb(255, 0, 0)";
                boolAsunto = false;

            }
        }); // Validación del asunto por RegEx.
    }

    if (formMensaje) {
        formMensaje.addEventListener("input", function (ev) {
            let valorMensaje = formMensaje.value.trim();

            if (valorMensaje === "") {
                textoMsj.textContent = "";
                formMensaje.style.borderColor = "";
                boolMsj = false;

            } else if (mensajeRegEx.test(valorMensaje)) {
                textoMsj.textContent = "";
                formMensaje.style.borderColor = "rgb(0, 202, 44)"
                boolMsj = true;

            } else {
                textoMsj.textContent = "El mensaje debe contener entre 4 y 500 carácteres."
                textoMsj.style.color = "rgb(255, 0, 0)";
                formMensaje.style.borderColor = "rgb(255, 0, 0)";
                boolMsj = false;

            }
        }); // Validación del asunto por RegEx.
    }

    if (formulario) {

        function crearInforme() {
            const informe = document.createElement("div");
            informe.classList.add("form-informe");
            informe.style.backgroundColor = "rgba(17, 20, 33, 0.85)";
            informe.style.padding = "20px";
            informe.style.borderRadius = "10px";
            informe.style.marginTop = "10px";
            return informe;
        }

        function crearTitulo(texto) {
            const titulo = document.createElement("h3");
            titulo.textContent = `${texto}`;
            titulo.style.color = "rgb(0, 202, 44)";
            titulo.style.marginBottom = "10px";
            return titulo;
        }

        function crearFila(texto, variable) {
            const fila = document.createElement("li");
            fila.textContent = `${texto}: ${variable.value}`;
            fila.style.padding = "6px 0";
            fila.style.borderBottom = "1px solid rgba(255, 255, 255, 0.5)";
            return fila;
        }

        function crearBtnCerrar(informe) {
            const boton = document.createElement("button");
            boton.textContent = "Cerrar";
            boton.style.padding = "4px";
            boton.style.border = "2px solid rgb(204, 204, 204)";
            boton.style.borderRadius = "10px";
            boton.style.cursor = "pointer";
            boton.addEventListener("click", function () { informe.remove(); });
            return boton;
        }

        function resetear() {
            formulario.reset();
            valorFecha = "";
            boolEmail = false;
            boolFecha = false;
            boolTelefono = false;
            boolMsj = false;
            boolAsunto = true;
            boolNombre = true;
            boolApellido = true;
            const forms = [formNombre, formApellido, formEmail, formFecha, formTelefono, formMensaje, formAsunto]
            forms.forEach(forms => {
                if (forms) forms.style.borderColor = "";
            });
        }

        if (rutaActual.endsWith("newsletter.html")) { // Botón del newsletter

            formulario.addEventListener("submit", function (ev) {
                ev.preventDefault();

                if (boolEmail === false || boolFecha === false) {
                    btnMensaje.textContent = "Por favor, complete los campos obligatorios."
                    formEmail.style.borderColor = "rgb(255, 0, 0)";
                    btnMensaje.style.color = "rgb(255, 0, 0)";

                } else if (boolApellido === false || boolNombre === false) {
                    btnMensaje.textContent = "Complete o limpie los campos opcionales."
                    btnMensaje.style.color = "rgb(255, 0, 0)";

                } else {
                    btnMensaje.textContent = "";

                    const informeExiste = document.querySelector(".form-informe")
                    if (informeExiste) {
                        informeExiste.remove(); // Si ya hay un informe, lo elimina.
                    }

                    const formGenero = document.querySelector("#gender");

                    const informe = crearInforme();

                    informe.appendChild(crearTitulo("Registro Exitoso"));

                    const lista = document.createElement("ul");
                    lista.style.listStyle = "none";

                    if (formNombre.value != "") {
                        lista.appendChild(crearFila("Nombre", formNombre));
                    }

                    if (formApellido.value != "") {
                        lista.appendChild(crearFila("Apellido", formApellido));
                    }

                    lista.appendChild(crearFila("E-mail", formEmail));

                    emailRegistrados.push(formEmail.value);

                    if (formGenero && formGenero.value !== "") {
                        lista.appendChild(crearFila("Género", formGenero));
                    }

                    const fecha = document.createElement("li");
                    fecha.textContent = `Fecha de nacimiento: ${valorFecha}`;
                    fecha.style.padding = "6px 0";
                    lista.appendChild(fecha);

                    informe.appendChild(lista);

                    const btnCerrar = crearBtnCerrar(informe);

                    informe.appendChild(btnCerrar);
                    formulario.appendChild(informe);
                    resetear();
                }

            });
        }

        if (rutaActual.endsWith("contacto.html")) {

            formulario.addEventListener("submit", function (ev) {

                ev.preventDefault();

                if (boolEmail === false || boolTelefono === false || boolMsj === false) {
                    btnMensaje.textContent = "Por favor, complete los campos obligatorios."
                    btnMensaje.style.color = "rgb(255, 0, 0)";

                } else if (boolNombre === false || boolAsunto === false) {
                    btnMensaje.textContent = "Complete o limpie los campos opcionales."
                    btnMensaje.style.color = "rgb(255, 0, 0)";

                } else {
                    btnMensaje.textContent = "";

                    const informeExiste = document.querySelector(".form-informe")
                    if (informeExiste) {
                        informeExiste.remove();
                    }

                    const informe = crearInforme();

                    informe.appendChild(crearTitulo("Envío exitoso"));

                    const lista = document.createElement("ul");
                    lista.style.listStyle = "none";

                    if (formNombre) {
                        lista.appendChild(crearFila("Nombre", formNombre));
                    }

                    lista.appendChild(crearFila("E-mail", formEmail));
                    lista.appendChild(crearFila("Teléfono", formTelefono));

                    if (formAsunto) {
                        lista.appendChild(crearFila("Asunto", formAsunto));
                    }

                    const msjResumen = document.createElement("li");
                    msjResumen.textContent = `Tu mensaje con ${formMensaje.value.length} carácteres se envió con éxito.`;
                    lista.appendChild(msjResumen)

                    const btnCerrar = crearBtnCerrar(informe);

                    informe.appendChild(lista);
                    informe.appendChild(btnCerrar);
                    formulario.appendChild(informe);
                    resetear();

                }
            })
        }
    }


    const nltLink = document.getElementById("newsletter-link");
    nltLink.addEventListener('click', function (ev) {
        if (rutaActual.endsWith("newsletter.html")) {
            ev.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

}

// fin script newsletter

// script de cuenta

if (rutaActual.endsWith("cuenta.html")) {
    let page = "register";
    let title;
    let cUser;
    let iUser;
    let cEmail;
    let iEmail;
    let cPassword;
    let iPassword;
    let cPhone;
    let iPhone;
    let txtBtnLeft;
    let txtBtnRight;

    window.addEventListener("beforeunload", end);

    function end() {
        localStorage.setItem("account_page", page);
    }

    document.addEventListener("DOMContentLoaded", start);

    function start() {
        title = document.getElementById("accountTitle");
        cUser = document.getElementById("contUser");
        iUser = document.getElementById("inputUser");
        cEmail = document.getElementById("contEmail");
        iEmail = document.getElementById("inputEmail");
        cPassword = document.getElementById("contPassword");
        iPassword = document.getElementById("inputPassword");
        cPhone = document.getElementById("contPhone");
        iPhone = document.getElementById("inputPhone");
        txtBtnLeft = document.getElementById("txtBtnLeft");
        txtBtnRight = document.getElementById("txtBtnRight");
        page = localStorage.getItem("account_page") || "register";
        change();
    }

    function errText(cont, text) {
        let p = document.createElement("p");
        p.textContent = text;
        p.classList.add("errText");
        cont.appendChild(p);
    }

    function change() {
        iUser.value = "";
        iEmail.value = "";
        iPassword.value = "";
        iPhone.value = "";

        if (page == "login") {
            title.textContent = "Iniciar Sesion";
            txtBtnLeft.textContent = "Confirmar";
            txtBtnRight.textContent = "Registrarse";
            cPhone.hidden = true;
        }
        if (page == "register") {
            title.textContent = "Registrarse";
            txtBtnLeft.textContent = "Confirmar";
            txtBtnRight.textContent = "Iniciar Sesión";
            cPhone.hidden = false;
        }
        if (page == "account") {
            title.textContent = "Tu Cuenta";
            txtBtnLeft.textContent = "Editar";
            txtBtnRight.textContent = "Cerrar Sesión";
            cPhone.hidden = false;
            let logins = JSON.parse(localStorage.getItem("account_logins")) || [];
            let log_index = localStorage.getItem("account_selected") || 0;
            let log = logins[log_index];
            iUser.value = log.user;
            iEmail.value = log.email;
            iPassword.value = log.password;
            iPhone.value = log.phone;
        }
    }

    function clickButton(pos) {
        event.preventDefault();

        let errTexts = document.querySelectorAll(".errText");
        for (let text of errTexts) { text.remove(); }

        let logins = JSON.parse(localStorage.getItem("account_logins")) || [];

        if (pos == -1) {
            let err = false;

            if (page != "login") {
                if (iUser.value.length < 1) {
                    errText(cUser, "Ingrese un usuario!!");
                } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9_]+$/.test(iUser.value)) {
                    errText(cUser, "Solo se permite letras números y guión!!");
                } else if (iUser.value.length < 4) {
                    errText(cUser, "Mínimo tiene que haber 4 caracteres!!");
                } else if (iUser.value.length > 20) {
                    errText(cUser, "El máximo es solo de 20 caracteres!!");
                } else {
                    let logId = localStorage.getItem("account_selected") || 0;
                    let exist = false;
                    for (let i = 0; i < logins.length; i++) {
                        if (logins[i].user == iUser.value) {
                            exist = true;
                            if (page == "account") {
                                if (i == logId) { exist = false; }
                            }
                        }
                    }
                    if (exist) {
                        errText(cUser, "Ese nombre de usuario ya existe!!");
                    }
                }

                if (iEmail.value.length < 1) {
                    errText(cEmail, "Ingrese un correo electrónico!!");
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(iEmail.value)) {
                    errText(cEmail, "Ingrese un email válido!!");
                } else {
                    let logId = localStorage.getItem("account_selected") || 0;
                    let exist = false;
                    for (let i = 0; i < logins.length; i++) {
                        if (logins[i].email == iEmail.value) {
                            exist = true;
                            if (page == "account") {
                                if (i == logId) { exist = false; }
                            }
                        }
                    }
                    if (exist) {
                        errText(cEmail, "Ese email ya está en uso!!");
                    }
                }

                if (iPassword.value.length < 1) {
                    errText(cPassword, "Ingrese una contraseña!!");
                } else if (iPassword.value.length < 6) {
                    errText(cPassword, "Mínimo tiene que haber 6 caracteres!!");
                }

                if (iPhone.value.length < 1) {
                    errText(cPhone, "Ingrese un número!!");
                } else if (!/^[0-9]+$/.test(iPhone.value)) {
                    errText(cPhone, "Solo se permiten números!!");
                } else if (iPhone.value.length != 10) {
                    errText(cPhone, "Tienen que ser 10 numeros!!");
                } else {
                    let logId = localStorage.getItem("account_selected") || 0;
                    let exist = false;
                    for (let i = 0; i < logins.length; i++) {
                        if (logins[i].phone == iPhone.value) {
                            exist = true;
                            if (page == "account") {
                                if (i == logId) { exist = false; }
                            }
                        }
                    }
                    if (exist) {
                        errText(cPhone, "Ese número ya está en uso!!");
                    }
                }
            } else {
                let log = -1;

                if (iEmail.value.length < 1) {
                    errText(cEmail, "Ingrese un correo electrónico!!");
                } else {
                    for (let i = 0; i < logins.length; i++) {
                        if (logins[i].email == iEmail.value) {
                            log = i;
                        }
                    }
                    if (log == -1) {
                        errText(cEmail, "Ese correo no ha sido registrado!!");
                    }
                }

                if (iUser.value.length < 1) {
                    errText(cUser, "Ingrese un usuario!!");
                } else {
                    if (log != -1 && logins[log].user != iUser.value) {
                        errText(cUser, "Usuario incorrecto!!");
                    }
                }

                if (iPassword.value.length < 1) {
                    errText(cPassword, "Ingrese una contraseña!!");
                } else {
                    if (log != -1 && logins[log].password != iPassword.value) {
                        errText(cPassword, "Contraseña incorrecta!!");
                    }
                }
            }

            errTexts = document.querySelectorAll(".errText");
            if (errTexts.length > 0) { err = true; }

            if (!err) {
                let log = { user: iUser.value, email: iEmail.value, password: iPassword.value, phone: iPhone.value };
                let nLogins = logins;

                if (page == "login") {
                    page = "account";
                    change(); return;
                }
                if (page == "register") {
                    nLogins.push(log);
                    localStorage.setItem("account_logins", JSON.stringify(nLogins));
                    localStorage.setItem("account_selected", nLogins.length - 1);
                    page = "login";
                    change(); return;
                }
                if (page == "account") {
                    let logId = localStorage.getItem("account_selected");
                    nLogins[logId] = log;
                    localStorage.setItem("account_logins", JSON.stringify(nLogins));
                    change(); return;
                }
            }
        } else {
            if (page == "login") { page = "register"; change(); return; }
            if (page == "register" || page == "account") { page = "login"; change(); return; }
        }
    }

    function clearData() {
        event.preventDefault();
        localStorage.setItem("account_logins", JSON.stringify([]));
    }

    const accountLink = document.getElementById("account-link");
    accountLink.addEventListener('click', function (ev) {
        if (rutaActual.endsWith("cuenta.html")) {
            ev.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

}

if (rutaActual.endsWith("noticias.html")) {

    const newsLink = document.getElementById("noticias-link");
    newsLink.addEventListener('click', function (ev) {
        if (rutaActual.endsWith("noticias.html")) {
            ev.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

}
