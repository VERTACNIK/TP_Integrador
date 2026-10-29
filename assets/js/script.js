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

    function redirect(categoria,indx) {
        localStorage.setItem(categoria, indx);
    }

    function carruselChange() {
        ctrans[0].classList.remove("show");

        if (cindex == 0) {
            localStorage.setItem("categoria1", 0);
            chref[0].setAttribute("href", "./categoria1.html");
            cimg[0].setAttribute("src", "./assets/img/Carrusel-(El-sistema-solar).png");
            ctxt[0].innerHTML = `
                    <h2>🪐 El sistema solar</h2>
                    <h3>conocé los planetas, el Sol, las lunas y otros cuerpos celestes que forman nuestro vecindario cósmico.</h3>
                `;
        }

        if (cindex == 1) {
            localStorage.setItem("categoria2", 0);
            chref[0].setAttribute("href", "./categoria2.html");
            cimg[0].setAttribute("src", "./assets/img/Carrusel-(Estrellas-y-galaxias).png");
            ctxt[0].innerHTML = `
                    <h2>⭐ Estrellas y galaxias</h2>
                    <h3>descubrí las enormes estructuras que habitan el universo, cómo nacen las estrellas y qué secretos esconden las galaxias.</h3>
                `;
        }

        if (cindex == 2) {
            localStorage.setItem("categoria3", 0);
            chref[0].setAttribute("href", "./categoria3.html");
            cimg[0].setAttribute("src", "./assets/img/Carrusel-(Exploracion-espacial).png");
            ctxt[0].innerHTML = `
                    <h2>🚀 Exploración espacial</h2>
                    <h3>acompañá a astronautas y sondas espaciales en sus misiones para explorar nuevos mundos y ampliar nuestros conocimientos.</h3>
                `;
        }

        if (cindex == 3) {
            localStorage.setItem("categoria4", 0);
            chref[0].setAttribute("href", "./categoria4.html");
            cimg[0].setAttribute("src", "./assets/img/Carrusel-(Misterios-del-universo).png");
            ctxt[0].innerHTML = `
                    <h2>🕳️ Misterios del universo</h2>
                    <h3>adentrate en los enigmas de los agujeros negros, la materia oscura y los orígenes del cosmos.</h3>
                `;
        }

        if (cindex == 4) {
            localStorage.setItem("categoria5", 0);
            chref[0].setAttribute("href", "./categoria5.html");
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

// fin script cuenta

// script de categoria

if (rutaActual.includes("categoria")) {
    let cont;
    let barTitle;
    let check;
    let iCheck = 0;
    let categoria;

    document.addEventListener("DOMContentLoaded", start);

    function start() {
        cont = document.getElementById("categoryCont");
        barTitle = document.getElementById("barTitle");
        check = document.querySelectorAll(".check");
        categoria = rutaActual.split("/").pop().replace(".html","");
        change(localStorage.getItem(categoria) || 1);
    }

    function change(ind) {
        cont.scrollTo({ top: 0, behavior: "smooth" });

        check[iCheck].textContent = "▢";

        if (ind >= 0) {
            iCheck = ind;
        }else{
            if (ind == -1) {iCheck++;}else{iCheck--;}
        }

        if (iCheck < 0) {iCheck = check.length-1;}
        if (iCheck > check.length-1) {iCheck = 0;}

        check[iCheck].textContent = "▣";
        localStorage.setItem(categoria, iCheck);

        cContent = document.querySelectorAll(".categoryCreate");
        cContent.forEach(i => {i.remove();});

        let title;

        if (categoria == "categoria1") {
            if (iCheck == 0) {
                title = "LOS PLANETAS";
                createInfo("",null,title,"En esta sección encontrarás información sobre los ocho planetas de nuestro sistema solar, sus características, tamaños, composición y atmósferas. Descubrirás cómo se diferencian entre sí, qué los hace únicos y cómo orbitan alrededor del Sol, desde el pequeño y rocoso Mercurio hasta el gigantesco y helado Neptuno.");
                createInfo("L","./assets/img/C-SL1-1.png","Mercurio","Mercurio es el planeta más cercano al Sol y el más pequeño de nuestro sistema solar, con un diámetro aproximado de 4.879 kilómetros y una distancia media de 57,9 millones de kilómetros respecto a nuestra estrella. Es un planeta rocoso cuya superficie está cubierta de cráteres producidos por impactos de meteoritos a lo largo de millones de años. Su atmósfera es extremadamente delgada y está formada por pequeñas cantidades de oxígeno, sodio, hidrógeno y otros elementos, por lo que no puede retener el calor de manera eficiente. Esto provoca temperaturas extremas que pueden alcanzar los 430 °C durante el día y descender hasta aproximadamente −180 °C durante la noche. Mercurio tarda unos 88 días terrestres en completar una órbita alrededor del Sol y aproximadamente 59 días terrestres en girar sobre su propio eje, aunque un día solar, desde un amanecer hasta el siguiente, dura unos 176 días terrestres. No posee satélites naturales y, a pesar de ser el planeta más cercano al Sol, no es el más caliente, ya que Venus conserva mucho mejor el calor gracias a su densa atmósfera.");
                createInfo("R","./assets/img/C-SL1-2.png","Venus","Venus es el segundo planeta desde el Sol y tiene un diámetro aproximado de 12.104 kilómetros, por lo que su tamaño es similar al de la Tierra. Se trata de un planeta rocoso cuya característica más destacada es su atmósfera extremadamente densa, compuesta principalmente por dióxido de carbono y cubierta por nubes que contienen ácido sulfúrico. Estas condiciones generan un intenso efecto invernadero que convierte a Venus en el planeta más caliente del sistema solar, con temperaturas superficiales cercanas a los 465 °C. Su distancia media al Sol es de unos 108,2 millones de kilómetros y tarda aproximadamente 225 días terrestres en completar su órbita, mientras que su rotación sobre el eje dura alrededor de 243 días terrestres. Una particularidad de Venus es que gira en sentido contrario al de la mayoría de los planetas, por lo que el Sol saldría por el oeste y se pondría por el este si alguien pudiera observarlo desde su superficie. Además, su presión atmosférica es enorme en comparación con la terrestre y no posee satélites naturales, lo que lo convierte en un mundo muy diferente a nuestro planeta a pesar de sus similitudes en tamaño.");
                createInfo("L","./assets/img/C-SL1-3.png","La Tierra","La Tierra es el tercer planeta desde el Sol y el único lugar del universo en el que se ha confirmado la existencia de vida. Tiene un diámetro aproximado de 12.742 kilómetros y se encuentra a una distancia media de 149,6 millones de kilómetros del Sol. Es un planeta rocoso que posee una superficie formada por continentes, océanos, montañas, desiertos y numerosos ecosistemas, con aproximadamente el 71 % de su superficie cubierta por agua. Su atmósfera está compuesta principalmente por nitrógeno y oxígeno, y ayuda a regular la temperatura, proteger la superficie de parte de la radiación solar y mantener condiciones adecuadas para la vida. La temperatura media global de la superficie es de aproximadamente 15 °C, aunque varía considerablemente según la región y la estación. La Tierra tarda unas 24 horas en completar una rotación y aproximadamente 365,25 días en dar una vuelta alrededor del Sol. Posee un satélite natural, la Luna, cuya gravedad influye en las mareas oceánicas. Además, cuenta con un campo magnético que contribuye a protegerla de las partículas cargadas procedentes del Sol y presenta una actividad geológica que modifica continuamente su superficie mediante el movimiento de las placas tectónicas.");
                createInfo("R","./assets/img/C-SL1-4.png","Marte","Marte es el cuarto planeta desde el Sol y es conocido como el planeta rojo debido al óxido de hierro presente en el polvo y las rocas de su superficie. Tiene un diámetro aproximado de 6.779 kilómetros y se encuentra a una distancia media de 227,9 millones de kilómetros del Sol. Es un planeta rocoso, frío y con una atmósfera muy delgada compuesta principalmente por dióxido de carbono, lo que dificulta la conservación del calor y permite que las temperaturas desciendan considerablemente durante la noche. Su temperatura media ronda los −65 °C, aunque puede variar según la ubicación y la estación. Marte tarda aproximadamente 687 días terrestres en completar su órbita alrededor del Sol y su día dura unas 24 horas y 37 minutos, una duración bastante parecida a la de la Tierra. Posee dos pequeños satélites naturales llamados Fobos y Deimos, además de enormes formaciones geológicas, como el Monte Olimpo, uno de los volcanes más grandes conocidos del sistema solar, y Valles Marineris, un sistema de cañones gigantesco. Las investigaciones espaciales han encontrado evidencias de antiguos ríos, lagos y otros ambientes con agua líquida, por lo que Marte es uno de los principales objetivos científicos en la búsqueda de señales de vida pasada fuera de la Tierra.");
                createInfo("L","./assets/img/C-SL1-5.png","Júpiter","Júpiter es el quinto planeta desde el Sol y el más grande del sistema solar, con un diámetro aproximado de 139.820 kilómetros y una distancia media de 778,6 millones de kilómetros respecto a nuestra estrella. Es un gigante gaseoso compuesto principalmente por hidrógeno y helio, por lo que no posee una superficie sólida como la de los planetas rocosos. Su atmósfera presenta enormes bandas de nubes, tormentas intensas y cambios constantes, entre los que destaca la Gran Mancha Roja, una gigantesca tormenta que lleva observándose desde hace siglos. En las regiones superiores de sus nubes, las temperaturas rondan los −145 °C, aunque las condiciones de presión y temperatura aumentan considerablemente hacia el interior del planeta. Júpiter completa una rotación en aproximadamente 10 horas, lo que lo convierte en el planeta con el día más corto del sistema solar, y tarda casi 11,86 años terrestres en completar una órbita alrededor del Sol. Posee un sistema de anillos tenues y numerosas lunas, entre las que destacan Ío, Europa, Ganímedes y Calisto. Ganímedes es la luna más grande conocida del sistema solar, mientras que Europa despierta especial interés científico porque se cree que bajo su corteza de hielo existe un océano de agua líquida. Debido a su enorme masa y gravedad, Júpiter también ejerce una influencia importante sobre numerosos objetos que se encuentran en sus alrededores.");
                createInfo("R","./assets/img/C-SL1-6.png","Saturno","Saturno es el sexto planeta desde el Sol y el segundo más grande del sistema solar, con un diámetro aproximado de 116.460 kilómetros y una distancia media de 1.434 millones de kilómetros respecto a nuestra estrella. Es un gigante gaseoso compuesto principalmente por hidrógeno y helio, con una atmósfera en la que se forman bandas de nubes, tormentas y fuertes corrientes de viento. Su característica más reconocible es su impresionante sistema de anillos, formado por innumerables fragmentos de hielo, roca y polvo que orbitan alrededor del planeta y se distribuyen en distintas estructuras. Aunque Saturno es enorme, su densidad media es inferior a la del agua, una propiedad que lo diferencia de los planetas rocosos. En las regiones superiores de su atmósfera, las temperaturas rondan los −178 °C, mientras que en su interior las condiciones son mucho más extremas. Saturno tarda aproximadamente 10 horas y media en completar una rotación y unos 29,5 años terrestres en dar una vuelta alrededor del Sol. También posee numerosas lunas, entre las que destacan Titán, que cuenta con una atmósfera densa y lagos de metano y etano líquidos, y Encélado, que expulsa chorros de agua y otros materiales desde su superficie helada. Estas características hacen de Saturno uno de los planetas más interesantes para estudiar la formación de sistemas de anillos y la posible existencia de ambientes favorables para la vida en sus lunas.");
                createInfo("L","./assets/img/C-SL1-7.png","Urano","Urano es el séptimo planeta desde el Sol y uno de los dos gigantes helados del sistema solar, con un diámetro aproximado de 50.724 kilómetros y una distancia media de 2.871 millones de kilómetros respecto a nuestra estrella. Su color azul verdoso se debe principalmente al metano presente en su atmósfera, que absorbe parte de la luz roja y permite que predominen los tonos azulados. Su composición incluye hidrógeno, helio y materiales como agua, amoníaco y metano en su interior, sometidos a condiciones de presión muy elevadas. Es uno de los planetas más fríos del sistema solar, con temperaturas que pueden descender hasta aproximadamente −224 °C en determinadas regiones de su atmósfera. Urano tarda unas 17 horas en completar una rotación y aproximadamente 84 años terrestres en realizar una órbita alrededor del Sol. Una de sus características más particulares es la inclinación extrema de su eje de rotación, de aproximadamente 98 grados, que hace que el planeta parezca girar de costado. Esta orientación provoca estaciones muy prolongadas, durante las cuales algunas regiones pueden pasar décadas con luz solar continua o en oscuridad. Urano también posee un sistema de anillos oscuros y estrechos, además de numerosas lunas conocidas, cuyos nombres proceden principalmente de personajes de obras de William Shakespeare y Alexander Pope.");
                createInfo("R","./assets/img/C-SL1-8.png","Neptuno","Neptuno es el octavo planeta desde el Sol y el más lejano de los ocho planetas del sistema solar, con un diámetro aproximado de 49.244 kilómetros y una distancia media de unos 4.495 millones de kilómetros de nuestra estrella. Es un gigante helado cuya atmósfera está compuesta principalmente por hidrógeno y helio, además de metano, que contribuye a su característico color azulado. Debido a su enorme distancia del Sol, recibe muy poca energía solar y presenta temperaturas cercanas a los −200 °C en las regiones superiores de su atmósfera. A pesar del frío extremo, Neptuno posee una atmósfera muy dinámica, con tormentas gigantescas y vientos que pueden superar los 2.000 kilómetros por hora, entre los más rápidos registrados en el sistema solar. Su día dura aproximadamente 16 horas y tarda cerca de 165 años terrestres en completar una órbita alrededor del Sol. Neptuno posee un sistema de anillos tenues y varias lunas conocidas, entre las que destaca Tritón, un satélite que se desplaza alrededor del planeta en sentido contrario a su rotación y que podría haber sido capturado desde una región distante del sistema solar. Neptuno fue descubierto en 1846 gracias a cálculos matemáticos que permitieron predecir su existencia a partir de las irregularidades observadas en la órbita de Urano. Su lejanía, sus temperaturas extremas y sus intensos vientos lo convierten en uno de los mundos más fascinantes y menos explorados de nuestro sistema solar.");
            }
            if (iCheck == 1) {
                title = "EL SOL";
                createInfo("",null,title,"En esta sección encontrarás información sobre el Sol, la estrella central de nuestro sistema solar, sus características, tamaño, composición y temperatura. Descubrirás cómo produce su propia energía, cómo proporciona luz y calor a los planetas y por qué es fundamental para la vida en la Tierra.");
                createInfo("L","./assets/img/C-SL2-1.png","Características generales del Sol","El Sol es una estrella situada en el centro de nuestro sistema solar y constituye el objeto más grande y masivo de este conjunto de cuerpos celestes. Tiene un diámetro aproximado de 1,39 millones de kilómetros, unas 109 veces el diámetro de la Tierra, y concentra alrededor del 99,86 % de la masa total del sistema solar. Se encuentra a una distancia media de aproximadamente 149,6 millones de kilómetros de nuestro planeta, por lo que su luz tarda unos 8 minutos y 20 segundos en llegar hasta nosotros. Su gravedad mantiene a los ocho planetas, los planetas enanos, los asteroides y otros objetos en órbita a su alrededor. Aunque desde la Tierra parece una esfera amarilla, en realidad emite luz de un amplio espectro y, visto desde el espacio, su luz es esencialmente blanca. El Sol tiene unos 4.600 millones de años y se encuentra aproximadamente en la mitad de su vida como estrella.");
                createInfo("R","./assets/img/C-SL2-2.png","Composición del Sol","El Sol está compuesto principalmente por hidrógeno y helio, los dos elementos más abundantes del universo. Aproximadamente el 74 % de su masa corresponde al hidrógeno y cerca del 24 % al helio, mientras que el porcentaje restante está formado por pequeñas cantidades de elementos más pesados, como oxígeno, carbono, neón y hierro. Debido a las temperaturas extremadamente elevadas, la materia solar se encuentra principalmente en estado de plasma, un gas cuyos átomos han perdido parte o la totalidad de sus electrones. En su núcleo, el hidrógeno se transforma en helio mediante un proceso conocido como fusión nuclear, que libera enormes cantidades de energía. Esta energía se desplaza desde el interior hacia las capas externas y finalmente se emite al espacio en forma de luz y otras formas de radiación. La composición del Sol es fundamental para comprender cómo funcionan las estrellas y cómo obtienen la energía que las mantiene brillando durante miles de millones de años.");
                createInfo("L","./assets/img/C-SL2-3.png","Estructura interna y capas del Sol","El Sol está formado por varias capas que cumplen funciones diferentes en la producción y transmisión de energía. En el centro se encuentra el núcleo, donde las temperaturas alcanzan aproximadamente los 15 millones de grados Celsius y se produce la fusión nuclear. A su alrededor está la zona radiativa, en la que la energía se transporta principalmente mediante radiación a través del plasma, y después la zona convectiva, donde el movimiento de la materia caliente hacia arriba y de la materia más fría hacia abajo ayuda a transportar la energía. La capa visible desde la Tierra se llama fotosfera y tiene una temperatura aproximada de 5.500 °C. Por encima se encuentra la cromosfera, una región de la atmósfera solar que puede observarse especialmente durante ciertos fenómenos solares, y finalmente la corona, la capa más externa, que se extiende millones de kilómetros hacia el espacio y puede alcanzar temperaturas de más de un millón de grados Celsius. Cada una de estas regiones desempeña un papel importante en la actividad y el funcionamiento de nuestra estrella.");
                createInfo("R","./assets/img/C-SL2-4.png","Temperatura y energía solar","El Sol produce una cantidad inmensa de energía mediante la fusión nuclear que ocurre en su núcleo, donde los núcleos de hidrógeno se combinan para formar helio y liberan energía en el proceso. Su temperatura central alcanza aproximadamente los 15 millones de grados Celsius, mientras que la superficie visible tiene unos 5.500 °C. A pesar de estas temperaturas, la corona solar es todavía más caliente y puede superar el millón de grados Celsius, un fenómeno que los científicos continúan investigando. La energía generada en el interior tarda mucho tiempo en atravesar las capas solares antes de llegar a la superficie, desde donde se propaga por el espacio a la velocidad de la luz. Una pequeña parte de esa energía alcanza la Tierra y permite que exista agua líquida en gran parte de su superficie, impulsa el clima y el ciclo del agua y proporciona la energía necesaria para la fotosíntesis de las plantas. Además, la radiación solar puede aprovecharse mediante paneles solares para producir electricidad y mediante sistemas térmicos para generar calor.");
                createInfo("L","./assets/img/C-SL2-5.png","Actividad solar y fenómenos","El Sol no es una esfera completamente tranquila, sino una estrella dinámica en cuya superficie y atmósfera ocurren numerosos fenómenos. Entre ellos se encuentran las manchas solares, regiones que parecen más oscuras porque son más frías que las zonas que las rodean y que están relacionadas con intensos campos magnéticos. También se producen las erupciones solares, explosiones de energía que liberan grandes cantidades de radiación, y las eyecciones de masa coronal, enormes expulsiones de plasma y campos magnéticos hacia el espacio. Estos fenómenos forman parte de la actividad magnética del Sol, que aumenta y disminuye siguiendo un ciclo de aproximadamente once años. Cuando una eyección de masa coronal llega a la Tierra y las condiciones son adecuadas, puede provocar tormentas geomagnéticas, afectar las comunicaciones por radio, alterar el funcionamiento de satélites y generar auroras boreales y australes más intensas de lo habitual. Estudiar la actividad solar permite anticipar algunos de estos efectos y proteger mejor la tecnología que utilizamos diariamente.");
                createInfo("R","./assets/img/C-SL2-6.png","Importancia del Sol para la Tierra","El Sol es indispensable para la existencia de la vida tal como la conocemos, ya que proporciona la mayor parte de la energía que impulsa los procesos naturales de la Tierra. Su luz permite que las plantas realicen la fotosíntesis, mediante la cual producen sustancias orgánicas y liberan oxígeno, mientras que el calor solar ayuda a mantener temperaturas compatibles con la presencia de agua líquida en la superficie. También impulsa el ciclo del agua, la circulación atmosférica y buena parte de los fenómenos meteorológicos. La energía solar ha sido aprovechada por los seres humanos durante miles de años y actualmente se utiliza para generar electricidad, calentar agua y reducir el consumo de combustibles fósiles. Sin embargo, la radiación ultravioleta puede resultar perjudicial para los seres vivos si la exposición es excesiva, por lo que la atmósfera terrestre y la capa de ozono cumplen una función protectora importante. Aunque el Sol parece inmutable desde nuestra perspectiva, evoluciona continuamente y, dentro de unos 5.000 millones de años, se transformará en una gigante roja antes de terminar su evolución como estrella.");
            }
            if (iCheck == 2) {
                title = "LA LUNA";
                createInfo("",null,title,"En esta sección encontrarás información sobre la Luna, el satélite natural de la Tierra, sus características, composición, estructura y movimientos. Descubrirás cómo influye en nuestro planeta, qué fenómenos produce y por qué es tan importante para comprender la historia y la evolución de la Tierra.");
                createInfo("L","./assets/img/C-SL3-1.png","Características generales de la Luna","La Luna es el único satélite natural de la Tierra y el quinto satélite más grande del sistema solar. Tiene un diámetro aproximado de 3.474 kilómetros, lo que equivale a cerca de una cuarta parte del diámetro terrestre. Su distancia media a nuestro planeta es de unos 384.400 kilómetros y tarda aproximadamente 27,3 días en completar una órbita alrededor de la Tierra. A diferencia del Sol, la Luna no produce luz propia, sino que refleja la luz solar que recibe, por eso podemos observarla iluminada durante la noche. Su superficie está cubierta de cráteres, montañas, valles y grandes llanuras oscuras formadas principalmente por antiguas erupciones volcánicas. Además, la Luna posee una gravedad equivalente a aproximadamente una sexta parte de la terrestre, por lo que una persona pesaría allí mucho menos que en la Tierra. Se estima que se formó hace unos 4.500 millones de años, probablemente a partir de los restos de una enorme colisión entre la Tierra primitiva y otro cuerpo celeste.");
                createInfo("R","./assets/img/C-SL3-2.png","Composición de la Luna","La Luna está formada principalmente por rocas y minerales, con una composición rica en oxígeno, silicio, magnesio, hierro, calcio y aluminio. Su superficie está cubierta por una capa de polvo y fragmentos de roca llamada regolito lunar, que se originó debido a millones de años de impactos de meteoritos y partículas procedentes del espacio. Bajo esta capa se encuentra una corteza sólida compuesta por diferentes tipos de rocas, entre las que destacan las anortositas, presentes en muchas de las regiones elevadas, y los basaltos, que forman gran parte de las llanuras oscuras conocidas como mares lunares. Aunque durante mucho tiempo se pensó que la Luna era completamente seca, las investigaciones realizadas mediante satélites y muestras recogidas por misiones espaciales han confirmado la presencia de agua en determinadas zonas, especialmente en forma de hielo dentro de cráteres permanentemente sombreados cerca de los polos. Estos recursos podrían resultar importantes para futuras misiones tripuladas, ya que el agua podría utilizarse para el consumo y, mediante procesos adecuados, para obtener oxígeno e hidrógeno.");
                createInfo("L","./assets/img/C-SL3-3.png","Estructura interna de la Luna","La Luna posee una estructura interna formada por tres regiones principales: la corteza, el manto y el núcleo. La corteza es la capa más externa y tiene un grosor medio de varias decenas de kilómetros, aunque su espesor varía entre las distintas regiones. Debajo se encuentra el manto, una capa mucho más extensa compuesta principalmente por rocas ricas en silicatos y minerales que contienen hierro y magnesio. En el centro se encuentra un núcleo relativamente pequeño, formado principalmente por hierro y otros elementos, que incluye una parte externa líquida o parcialmente líquida y una región interna sólida, según los modelos científicos actuales. A diferencia de la Tierra, la Luna presenta una actividad geológica mucho más reducida, ya que ha perdido gran parte del calor de su interior a lo largo de miles de millones de años. Aunque ya no posee una actividad volcánica importante como la que tuvo en el pasado, todavía puede experimentar pequeños terremotos lunares, conocidos como sismos lunares. El estudio de su estructura interna permite conocer mejor cómo se formaron los cuerpos rocosos y cómo evolucionaron durante los primeros períodos del sistema solar.");
                createInfo("R","./assets/img/C-SL3-4.png","Movimientos y fases de la Luna","La Luna realiza dos movimientos principales: la rotación sobre su propio eje y la traslación alrededor de la Tierra. Ambos movimientos duran aproximadamente 27,3 días, lo que provoca que siempre observemos prácticamente la misma cara de la Luna desde nuestro planeta. Sin embargo, durante su recorrido alrededor de la Tierra cambia la porción de su superficie iluminada por el Sol que podemos ver, dando lugar a las distintas fases lunares. Estas fases son la luna nueva, el cuarto creciente, la luna llena y el cuarto menguante, junto con las etapas intermedias conocidas como fases gibosas y crecientes o menguantes. El ciclo completo, desde una luna nueva hasta la siguiente, dura aproximadamente 29,5 días y se conoce como mes sinódico. Es importante destacar que las fases lunares no se producen porque la sombra de la Tierra cubra la Luna, sino por la posición relativa entre el Sol, la Tierra y nuestro satélite. La sombra terrestre sobre la Luna ocurre únicamente durante los eclipses lunares, cuando los tres cuerpos celestes se alinean de una manera determinada.");
                createInfo("L","./assets/img/C-SL3-5.png","Influencia de la Luna en la Tierra","La Luna tiene una influencia importante sobre la Tierra, especialmente debido a su fuerza gravitatoria, que es una de las principales responsables de las mareas oceánicas. La atracción gravitatoria lunar provoca que el nivel de los océanos suba y baje periódicamente, junto con la influencia del Sol, afectando a los ecosistemas costeros y a numerosos organismos marinos. Además, la interacción gravitatoria entre la Tierra y la Luna contribuye a estabilizar la inclinación del eje terrestre durante largos períodos, lo que influye en la estabilidad del clima a lo largo de escalas geológicas. La Luna también se aleja lentamente de nuestro planeta a un ritmo de aproximadamente 3,8 centímetros por año, debido a la transferencia de energía asociada a las mareas. Este proceso modifica gradualmente la duración de los días terrestres y la órbita lunar. Por otra parte, su presencia ilumina parcialmente las noches y ha servido como referencia para medir el tiempo, elaborar calendarios y orientar la navegación desde las civilizaciones antiguas. Aunque su influencia no determina por sí sola todos los fenómenos naturales, constituye una parte fundamental del funcionamiento del sistema Tierra-Luna.");
                createInfo("R","./assets/img/C-SL3-6.png","La Luna y su exploración","La Luna ha sido objeto de observación y estudio durante miles de años, pero su exploración directa comenzó durante la era espacial del siglo XX. En 1959, la sonda soviética Luna 2 se convirtió en el primer objeto construido por seres humanos en alcanzar la superficie lunar, mientras que distintas misiones posteriores permitieron fotografiar regiones que no podían observarse directamente desde la Tierra. El acontecimiento más importante ocurrió el 20 de julio de 1969, cuando la misión Apolo 11 llevó a los primeros seres humanos a la superficie lunar, con Neil Armstrong y Buzz Aldrin descendiendo mientras Michael Collins permanecía en órbita. Durante las misiones Apolo se recogieron muestras de rocas y suelo que ayudaron a comprender la formación y evolución de nuestro satélite. En las décadas siguientes, sondas y vehículos robóticos continuaron investigando su superficie, su composición y la presencia de agua congelada. Actualmente, diferentes programas espaciales buscan desarrollar nuevas tecnologías para regresar con astronautas a la Luna, establecer estancias más prolongadas y utilizarla como lugar de investigación. Estos proyectos podrían contribuir a mejorar nuestro conocimiento del sistema solar y preparar futuras misiones tripuladas hacia destinos más lejanos, como Marte.");
            }
            if (iCheck == 3) {
                title = "LOS ASTEROIDES";
                createInfo("",null,title,"Los asteroides son cuerpos celestes compuestos principalmente por roca y metal que orbitan alrededor del Sol y que se formaron hace aproximadamente 4.600 millones de años. Sus tamaños varían desde pequeños fragmentos hasta objetos de cientos de kilómetros, y suelen tener formas irregulares y superficies llenas de cráteres. A diferencia de los planetas, no suelen ser esféricos ni poseen una atmósfera importante. Tampoco emiten luz propia, sino que reflejan la luz solar. Su estudio permite comprender mejor el origen y la evolución de nuestro sistema solar.");
                createInfo("L","./assets/img/C-SL4-1.png","Características generales de los asteroides","Los asteroides son cuerpos celestes compuestos principalmente por roca y metal que orbitan alrededor del Sol y que se consideran restos de la formación de nuestro sistema solar, ocurrida hace aproximadamente 4.600 millones de años. Sus tamaños varían enormemente, desde pequeños fragmentos de pocos metros hasta objetos que superan los 500 kilómetros de diámetro. La mayoría tiene formas irregulares, con superficies llenas de cráteres, rocas y desniveles producidos por antiguos impactos. A diferencia de los planetas, los asteroides no suelen tener suficiente gravedad para adquirir una forma esférica y no poseen una atmósfera importante. Además, no emiten luz propia, sino que reflejan parte de la luz del Sol. Algunos giran rápidamente sobre su propio eje, mientras que otros presentan rotaciones lentas o movimientos complejos. Aunque existen millones de asteroides, la masa total de todos ellos es inferior a la de la Luna. Su estudio permite conocer mejor los materiales que existían cuando se formaron los planetas y comprender cómo evolucionó nuestro sistema solar.");
                createInfo("R","./assets/img/C-SL4-2.png","Composición de los asteroides","Los asteroides presentan diferentes composiciones químicas y minerales, dependiendo de las condiciones en las que se formaron y de los cambios que experimentaron durante miles de millones de años. Los más comunes son los de tipo C, que contienen abundante carbono y materiales ricos en silicatos, por lo que suelen presentar superficies oscuras y pueden conservar sustancias primitivas del sistema solar. Los de tipo S están formados principalmente por minerales rocosos, silicatos y cantidades variables de hierro y níquel. Por otro lado, los de tipo M contienen una mayor proporción de metales, especialmente hierro y níquel. Algunos asteroides también pueden contener compuestos orgánicos y minerales hidratados que conservan rastros de agua incorporada en su estructura. Debido a estas diferencias, no todos los asteroides tienen el mismo aspecto ni la misma densidad. Analizar su composición ayuda a los científicos a reconstruir las condiciones existentes durante el nacimiento del sistema solar y a investigar si estos cuerpos pudieron transportar parte del agua y de los compuestos químicos que contribuyeron a la aparición de la vida en la Tierra.");
                createInfo("L","./assets/img/C-SL4-3.png","El cinturón de asteroides","El cinturón principal de asteroides es una región del sistema solar situada entre las órbitas de Marte y Júpiter, donde se concentra una gran cantidad de estos cuerpos rocosos. Se calcula que contiene entre 1,1 y 1,9 millones de asteroides de más de un kilómetro de diámetro, además de millones de objetos más pequeños. A pesar de la gran cantidad de cuerpos que lo componen, el cinturón está muy disperso, por lo que las distancias entre los asteroides suelen ser enormes. Esta región se formó durante las primeras etapas del sistema solar, cuando los materiales que podrían haber dado origen a un planeta fueron afectados por la intensa gravedad de Júpiter, que dificultó su agrupación en un único cuerpo. Entre los objetos más destacados se encuentran Vesta, uno de los asteroides más grandes, y Ceres, que actualmente está clasificado como planeta enano. Sin embargo, no todos los asteroides se encuentran en este cinturón: algunos comparten órbitas con planetas gigantes, mientras que otros recorren trayectorias que los acercan a la Tierra.");
                createInfo("R","./assets/img/C-SL4-4.png","Órbitas y movimientos de los asteroides","Los asteroides se desplazan alrededor del Sol siguiendo órbitas que generalmente tienen forma elíptica, aunque sus trayectorias pueden variar considerablemente según su ubicación y la influencia gravitatoria de otros cuerpos celestes. Al mismo tiempo, giran sobre su propio eje, y algunos incluso presentan movimientos de rotación complejos debido a su forma irregular. La duración de una vuelta completa alrededor del Sol depende principalmente de la distancia a la que se encuentre cada asteroide: los que orbitan más cerca del Sol suelen completar sus recorridos en menos tiempo que los que están más alejados. La gravedad de planetas como Júpiter y Marte puede modificar sus trayectorias, y las colisiones entre asteroides también pueden producir fragmentos que sigan nuevas órbitas. Algunos de estos cuerpos terminan acercándose a la órbita terrestre y reciben el nombre de asteroides cercanos a la Tierra. Otros, conocidos como troyanos, comparten la órbita de un planeta y se agrupan en regiones donde las fuerzas gravitatorias permiten mantener trayectorias relativamente estables. Comprender estos movimientos resulta fundamental para estudiar la evolución del sistema solar y predecir posibles acercamientos a nuestro planeta.");
                createInfo("L","./assets/img/C-SL4-5.png","Los asteroides y su influencia en la Tierra","Los asteroides han influido en la historia de la Tierra mediante impactos que, a lo largo de millones de años, han modificado su superficie y afectado a los seres vivos. Cuando un objeto de gran tamaño choca contra un planeta, libera una enorme cantidad de energía y puede producir cráteres, ondas de choque, incendios y cambios ambientales importantes. Uno de los acontecimientos más conocidos ocurrió hace aproximadamente 66 millones de años, cuando el impacto de un gran asteroide en la región de la actual península de Yucatán contribuyó a la extinción de los dinosaurios no avianos y de numerosas otras especies. Sin embargo, no todos los asteroides representan un peligro: la mayoría de los objetos pequeños que llegan a la atmósfera terrestre se desintegran antes de alcanzar el suelo, y los impactos de cuerpos suficientemente grandes como para provocar daños generalizados son mucho menos frecuentes. Por esta razón, los científicos utilizan telescopios, radares y sistemas de seguimiento para calcular las órbitas de los asteroides cercanos a la Tierra y evaluar sus posibles riesgos. Estas investigaciones también han permitido desarrollar estrategias para desviar objetos peligrosos, como demostró la misión DART de la NASA al modificar la órbita de un pequeño cuerpo que acompañaba al asteroide Didymos.");
                createInfo("R","./assets/img/C-SL4-6.png","La exploración y el estudio de los asteroides","La exploración de los asteroides ha avanzado considerablemente gracias al desarrollo de sondas espaciales capaces de acercarse a estos cuerpos, fotografiar sus superficies y analizar sus características. Una de las misiones más importantes fue NEAR Shoemaker, que estudió el asteroide Eros y llegó a posarse sobre su superficie en 2001. Más adelante, la misión japonesa Hayabusa consiguió traer pequeñas muestras del asteroide Itokawa, mientras que Hayabusa2 recogió material de Ryugu y lo devolvió a la Tierra en 2020. Por su parte, la misión OSIRIS-REx de la NASA recolectó muestras del asteroide Bennu, que llegaron a nuestro planeta en septiembre de 2023 para ser analizadas por científicos. Estas muestras permiten estudiar directamente minerales, compuestos orgánicos y materiales que pueden conservar información sobre los primeros tiempos del sistema solar. Además, la misión DART demostró que es posible alterar la trayectoria de un pequeño cuerpo celeste mediante un impacto controlado, un avance importante para la defensa planetaria. En el futuro, nuevas misiones buscarán investigar otros asteroides, conocer mejor sus recursos y descubrir más detalles sobre el origen de los planetas y los materiales que hicieron posible la vida en la Tierra.");
            }
            if (iCheck == 4) {
                title = "LOS COMETAS";
                createInfo("",null,title,"En esta sección encontrarás información sobre los cometas, cuerpos celestes formados principalmente por hielo, polvo y roca que orbitan alrededor del Sol. Descubrirás cómo se forman sus características colas luminosas, de dónde provienen, cómo se desplazan por el sistema solar y qué importancia tienen para comprender su origen y evolución.");
                createInfo("L","./assets/img/C-SL5-1.png","Características generales de los cometas","Los cometas son cuerpos celestes formados principalmente por hielo, polvo y roca que orbitan alrededor del Sol y conservan materiales de hace unos 4.600 millones de años. Cuando se acercan al Sol, el calor transforma parte de sus hielos en gas y libera polvo, formando una nube llamada coma y, en ocasiones, una larga cola luminosa. Sus tamaños varían, y sus núcleos suelen medir unos pocos kilómetros de diámetro. A diferencia de los asteroides, contienen grandes cantidades de materiales congelados, por lo que su estudio permite conocer mejor los orígenes del sistema solar.");
                createInfo("R","./assets/img/C-SL5-2.png","Composición de los cometas","Los cometas están compuestos por una mezcla de hielo, polvo, roca y gases congelados, como dióxido de carbono y monóxido de carbono. También pueden contener compuestos orgánicos y minerales que permanecieron conservados desde las primeras etapas del sistema solar. Su núcleo suele ser oscuro y presenta una superficie irregular, cubierta de grietas, depresiones y fragmentos rocosos. Cuando se acercan al Sol, algunos de sus materiales congelados pasan directamente a estado gaseoso, liberando partículas de polvo que forman la coma y las colas. La composición de cada cometa puede variar según su origen y su historia. El análisis de estos materiales ayuda a los científicos a comprender las condiciones en las que se formó nuestro sistema solar y a investigar el posible aporte de agua y compuestos orgánicos a la Tierra primitiva.");
                createInfo("L","./assets/img/C-SL5-3.png","La estructura de los cometas","Los cometas poseen tres componentes principales: el núcleo, la coma y las colas. El núcleo es la parte sólida central, formada por hielo, polvo y roca, y suele medir unos pocos kilómetros. Cuando el cometa se acerca al Sol, el calor provoca que parte de sus hielos se conviertan en gas, formando a su alrededor una nube llamada coma, que puede alcanzar cientos de miles de kilómetros de extensión. Además, el material liberado puede formar dos colas diferentes: una de polvo, que suele ser más ancha y curvada, y otra de gas ionizado, que generalmente presenta un aspecto azulado y apunta en dirección opuesta al Sol. Ambas pueden extenderse millones de kilómetros por el espacio. Sin embargo, las colas no siempre son visibles, ya que dependen de la actividad del cometa y de su distancia al Sol.");
                createInfo("R","./assets/img/C-SL5-4.png","Órbitas y movimientos de los cometas","Los cometas orbitan alrededor del Sol siguiendo trayectorias generalmente elípticas, muchas de ellas muy alargadas. Esto significa que pueden pasar gran parte de su recorrido en las regiones más lejanas del sistema solar y acercarse al Sol solamente durante una pequeña parte de su órbita. Algunos completan una vuelta en pocos años, mientras que otros pueden tardar miles o incluso millones de años. Los cometas de período corto suelen estar relacionados con regiones como el cinturón de Kuiper, situado más allá de Neptuno, mientras que muchos de período largo proceden de la nube de Oort, una región distante que rodea el sistema solar. La gravedad de los planetas gigantes, especialmente Júpiter, puede modificar sus trayectorias y alterar sus períodos orbitales. Cuando un cometa se aproxima al Sol, su actividad aumenta y puede desarrollar una coma y colas mucho más visibles. Estos movimientos permiten predecir cuándo algunos cometas volverán a ser observables desde la Tierra.");
                createInfo("L","./assets/img/C-SL5-5.png","Los cometas y su importancia para la Tierra","Los cometas son importantes para estudiar la historia de nuestro planeta porque conservan materiales primitivos de la formación del sistema solar. Los científicos investigan si estos cuerpos contribuyeron a transportar parte del agua y los compuestos orgánicos que llegaron a la Tierra durante sus primeras etapas, aunque el origen del agua terrestre es complejo y no se explica únicamente por los cometas. En ocasiones, sus trayectorias pueden acercarse a la órbita terrestre, y los fragmentos de material que dejan a su paso pueden entrar en nuestra atmósfera y producir lluvias de meteoros. Un ejemplo son las Perseidas, relacionadas con los restos del cometa Swift-Tuttle. Aunque los cometas pueden fragmentarse o chocar con otros cuerpos celestes, los impactos peligrosos contra la Tierra son poco frecuentes. Su observación también permite comprender cómo interactúan el hielo, el polvo y la radiación solar en el espacio, además de aportar información sobre los procesos que participaron en la evolución de los planetas.");
                createInfo("R","./assets/img/C-SL5-6.png","La exploración y el estudio de los cometas","La exploración de los cometas ha permitido descubrir detalles que no pueden observarse únicamente con telescopios desde la Tierra. En 1986, varias sondas espaciales estudiaron el cometa Halley y obtuvieron algunas de las primeras imágenes detalladas de su núcleo. Posteriormente, la misión Stardust de la NASA recogió partículas de la coma del cometa Wild 2 y las devolvió a la Tierra en 2006 para su análisis. Uno de los mayores avances ocurrió con la misión Rosetta de la Agencia Espacial Europea, que acompañó al cometa 67P/Churyumov-Gerasimenko durante un largo período y desplegó el módulo Philae sobre su superficie en 2014. Estas investigaciones permitieron estudiar su composición, su actividad y los cambios que experimenta al acercarse al Sol. Gracias a las misiones espaciales, los científicos han descubierto que los cometas son mucho más complejos de lo que se pensaba y que contienen información valiosa sobre el origen del sistema solar. Las futuras misiones continuarán investigando estos cuerpos para comprender mejor su evolución y su posible relación con el origen de los ingredientes necesarios para la vida.");
            }
        }

        barTitle.textContent = title;
    }

    function createInfo(imgPlace, imgSRC, titleText, contText) {
        let nDiv1 = document.createElement("div");
        nDiv1.className = "categoryCreate";
        cont.appendChild(nDiv1);
        let nSImg = document.createElement("section");
        nSImg.className = "categoryCreate";
        let nImg = document.createElement("img");
        if (imgSRC != null) {nImg.src = imgSRC; nImg.className = "categoryCreate";}
        if (imgPlace == "L") {nDiv1.appendChild(nSImg); nSImg.appendChild(nImg);}
        let nDiv2 = document.createElement("div");
        nDiv2.className = "categoryCreate";
        nDiv1.appendChild(nDiv2);
        let nTP = document.createElement("p");
        nTP.id = "Tp"; nTP.className = "categoryCreate"; nTP.textContent = titleText;
        nDiv2.appendChild(nTP);
        let nP = document.createElement("p");
        nP.className = "categoryCreate"; nP.textContent = contText;
        nDiv2.appendChild(nP);
        if (imgPlace == "R") {nDiv1.appendChild(nSImg); nSImg.appendChild(nImg);}
    }
}