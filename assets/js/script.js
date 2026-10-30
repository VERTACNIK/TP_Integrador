const rutaActual = window.location.pathname;

// fin script general

// script de index

if (rutaActual.endsWith("index.html")) {
    let cindex = 0;
    let chref;
    let ctrans;
    let ctxt;
    let cimg;
    let cimgs = [
        "./assets/img/Carrusel-(El-sistema-solar).png",
        "./assets/img/Carrusel-(Estrellas-y-galaxias).png",
        "./assets/img/Carrusel-(Exploracion-espacial).png",
        "./assets/img/Carrusel-(Misterios-del-universo).png",
        "./assets/img/Carrusel-(Fenomenos-espaciales).png"
    ];

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

    function redirectCategoria(categoria,indx) {
        localStorage.setItem(categoria, indx);
    }

    function carruselChange() {
        ctrans[0].classList.remove("show");
        cimg[0].setAttribute("src", cimgs[cindex]);

        if (cindex == 0) {
            localStorage.setItem("categoria1", 0);
            chref[0].setAttribute("href", "./categoria1.html");
            ctxt[0].innerHTML = `
                    <h2>🪐 El sistema solar</h2>
                    <h3>conocé los planetas, el Sol, las lunas y otros cuerpos celestes que forman nuestro vecindario cósmico.</h3>
                `;
        }

        if (cindex == 1) {
            localStorage.setItem("categoria2", 0);
            chref[0].setAttribute("href", "./categoria2.html");
            ctxt[0].innerHTML = `
                    <h2>⭐ Estrellas y galaxias</h2>
                    <h3>descubrí las enormes estructuras que habitan el universo, cómo nacen las estrellas y qué secretos esconden las galaxias.</h3>
                `;
        }

        if (cindex == 2) {
            localStorage.setItem("categoria3", 0);
            chref[0].setAttribute("href", "./categoria3.html");
            ctxt[0].innerHTML = `
                    <h2>🚀 Exploración espacial</h2>
                    <h3>acompañá a astronautas y sondas espaciales en sus misiones para explorar nuevos mundos y ampliar nuestros conocimientos.</h3>
                `;
        }

        if (cindex == 3) {
            localStorage.setItem("categoria4", 0);
            chref[0].setAttribute("href", "./categoria4.html");
            ctxt[0].innerHTML = `
                    <h2>🕳️ Misterios del universo</h2>
                    <h3>adentrate en los enigmas de los agujeros negros, la materia oscura y los orígenes del cosmos.</h3>
                `;
        }

        if (cindex == 4) {
            localStorage.setItem("categoria5", 0);
            chref[0].setAttribute("href", "./categoria5.html");
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

        if (categoria == "categoria2") {
            if (iCheck == 0) {
                title = "LAS NEBULOSAS";
                createInfo("",null,title,"Las nebulosas son enormes nubes de gas y polvo cósmico que se encuentran dispersas por el universo. Están compuestas principalmente por hidrógeno y helio, y algunas funcionan como regiones donde nacen nuevas estrellas y sistemas planetarios. Otras se forman a partir de los restos de estrellas que han llegado al final de su vida. Pueden presentar diferentes formas y colores, convirtiéndose en algunas de las estructuras más fascinantes del espacio.");
                createInfo("L","./assets/img/C-EG1-1.png","Nebulosa del Águila","La Nebulosa del Águila, también conocida como Messier 16 (M16), se encuentra aproximadamente a 6.500 años luz de la Tierra, en la constelación de Serpens. Es una enorme región de gas y polvo interestelar donde se desarrollan intensos procesos de formación estelar. Su estructura más famosa son los Pilares de la Creación, unas gigantescas columnas de gas y polvo que pueden alcanzar varios años luz de longitud. En su interior se acumula material que, bajo la influencia de la gravedad, puede formar nuevas estrellas. La radiación de las estrellas jóvenes cercanas provoca que el gas se caliente y que las partes exteriores de estas columnas se erosionen lentamente. Esta nebulosa es especialmente importante para los astrónomos porque permite observar cómo nacen las estrellas y cómo la radiación de unas puede influir en la formación de otras. Sus impresionantes estructuras fueron fotografiadas por primera vez con gran detalle por el telescopio espacial Hubble en 1995.");
                createInfo("R","./assets/img/C-EG1-2.png","Nebulosa de Orión","La Nebulosa de Orión, también conocida como Messier 42 (M42), se encuentra aproximadamente a 1.350 años luz de la Tierra, en la constelación de Orión. Es una de las regiones de formación estelar más importantes y estudiadas de nuestra galaxia, ya que contiene enormes cantidades de hidrógeno, helio y polvo cósmico. En su interior nacen estrellas de diferentes tamaños y masas, algunas de las cuales se encuentran rodeadas por discos de gas y polvo que podrían dar origen a nuevos planetas. Una de sus regiones más destacadas es el Cúmulo del Trapecio, un grupo de estrellas jóvenes y muy calientes cuya intensa radiación ilumina gran parte de la nebulosa. Sus colores rojizos, violetas y azulados se producen por la interacción de la luz estelar con los diferentes gases presentes. Debido a su relativa cercanía y a su brillo, puede observarse desde la Tierra incluso con instrumentos sencillos, convirtiéndose en uno de los objetos astronómicos más conocidos del cielo nocturno.");
                createInfo("L","./assets/img/C-EG1-3.png","Nebulosa del Cangrejo","La Nebulosa del Cangrejo, identificada como Messier 1 (M1), se encuentra aproximadamente a 6.500 años luz de la Tierra, en la constelación de Tauro. A diferencia de las nebulosas donde nacen nuevas estrellas, esta estructura se originó a partir de la explosión de una estrella masiva en forma de supernova, un acontecimiento observado por astrónomos en el año 1054. Durante aquella explosión se expulsaron enormes cantidades de material estelar que todavía continúan expandiéndose por el espacio. En el centro de la nebulosa permanece una estrella de neutrones conocida como púlsar, que gira aproximadamente 30 veces por segundo y emite intensos pulsos de radiación. Su energía contribuye a iluminar y modificar el material que la rodea, formando estructuras de filamentos y nubes de diferentes colores. La Nebulosa del Cangrejo es especialmente importante para estudiar cómo evolucionan las estrellas masivas, cómo se producen las supernovas y qué materiales se liberan al espacio cuando una estrella llega al final de su vida.");
                createInfo("R","./assets/img/C-EG1-4.png","Nebulosa de la Hélice","La Nebulosa de la Hélice, conocida también como NGC 7293, se encuentra aproximadamente a 650-700 años luz de la Tierra, en la constelación de Acuario. Es una nebulosa planetaria que se formó cuando una estrella similar al Sol llegó a las últimas etapas de su vida y comenzó a expulsar sus capas exteriores hacia el espacio. En su centro permanece una enana blanca, que es el núcleo caliente y compacto de la antigua estrella, cuya radiación ilumina los gases expulsados y produce sus característicos colores. Su estructura presenta diferentes capas de material que se expanden alrededor del centro, creando una apariencia circular semejante a un enorme ojo. En sus regiones exteriores pueden observarse pequeñas estructuras de gas conocidas como nudos cometarios, formadas por material que interactúa con la radiación de la estrella central. Esta nebulosa resulta especialmente interesante porque permite comprender cómo será el proceso final de evolución del Sol dentro de aproximadamente cinco mil millones de años, cuando también expulse sus capas exteriores y termine convirtiéndose en una enana blanca.");
                createInfo("L","./assets/img/C-EG1-5.png","Nebulosa de Carina","La Nebulosa de Carina, también conocida como NGC 3372, se encuentra aproximadamente a 7.500 años luz de la Tierra, en la constelación de Carina. Es una de las regiones de formación estelar más grandes y activas de nuestra galaxia, ya que contiene enormes concentraciones de gas y polvo donde nacen estrellas de diferentes tamaños. En su interior se encuentran algunas estrellas extremadamente masivas y luminosas, capaces de liberar cantidades gigantescas de energía mediante radiación y fuertes vientos estelares. Estos fenómenos modifican las nubes de gas que las rodean, creando enormes cavidades, columnas y estructuras similares a montañas. Una de sus zonas más conocidas es la región de los Acantilados Cósmicos, fotografiada por el telescopio espacial James Webb en 2022, donde pueden observarse numerosas estrellas jóvenes en formación. Además, esta nebulosa alberga a Eta Carinae, un sistema estelar extremadamente masivo y brillante que ha experimentado enormes erupciones y que podría terminar explotando como supernova en el futuro.");
                createInfo("R","./assets/img/C-EG1-6.png","Nebulosa Cabeza de Caballo","La Nebulosa Cabeza de Caballo, identificada como Barnard 33, se encuentra aproximadamente a 1.375 años luz de la Tierra, en la constelación de Orión. Es una nebulosa oscura formada por una densa concentración de gas y polvo interestelar que bloquea la luz de las estrellas y de las regiones brillantes que se encuentran detrás de ella. Su nombre se debe a su particular silueta, que recuerda a la cabeza de un caballo, convirtiéndola en una de las estructuras más reconocibles del espacio. Forma parte de una región mucho más extensa conocida como la Nube Molecular de Orión, donde existen diferentes concentraciones de material capaces de dar origen a nuevas estrellas. En su interior, el polvo es tan denso que impide que gran parte de la luz visible lo atraviese, aunque los telescopios infrarrojos pueden observar detalles que normalmente permanecen ocultos. La radiación de las estrellas cercanas también modifica lentamente sus bordes, erosionando el material y cambiando su apariencia con el paso del tiempo. Es un ejemplo muy interesante de cómo las nebulosas no siempre brillan por sí mismas, sino que algunas pueden destacar precisamente por ocultar la luz que se encuentra detrás de ellas.");
            }
            if (iCheck == 1) {
                title = "LA VÍA LÁCTEA";
                createInfo("",null,title,"La Vía Láctea es la galaxia en la que se encuentra nuestro sistema solar y millones de millones de estrellas, planetas, nebulosas y otros cuerpos celestes. Tiene una forma espiral con varios brazos que giran alrededor de un centro muy denso, donde se encuentra un agujero negro supermasivo llamado Sagitario A*. Se calcula que posee entre 100.000 y 400.000 millones de estrellas y que su diámetro alcanza aproximadamente los 100.000 años luz. Nuestro Sol se encuentra en uno de sus brazos, llamado Brazo de Orión, a unos 26.000 años luz del centro galáctico.");
                createInfo("L","./assets/img/C-EG2-1.png","Sagitario A*","Sagitario A*, también conocido como Sgr A*, es un agujero negro supermasivo ubicado en el centro de la Vía Láctea, a aproximadamente 26.000 años luz de la Tierra. Su masa equivale a unos cuatro millones de veces la del Sol, lo que genera una enorme fuerza gravitatoria a su alrededor. Aunque los agujeros negros no permiten que la luz escape de su interior, el gas y el polvo que giran cerca de ellos pueden calentarse y emitir radiación. En 2022, el proyecto internacional Event Horizon Telescope consiguió obtener la primera imagen de su entorno, mostrando una región oscura central rodeada por un anillo brillante de material caliente. Su estudio permite comprender mejor el comportamiento de los agujeros negros y su influencia en el centro de nuestra galaxia.");
                createInfo("R","./assets/img/C-EG2-2.png","Brazo de Orión","El Brazo de Orión, también conocido como Espolón de Orión, es una estructura espiral menor de la Vía Láctea en la que se encuentra nuestro sistema solar. Está situado entre los brazos de Perseo y Sagitario y contiene una gran cantidad de estrellas, nubes de gas, polvo interestelar y regiones donde nacen nuevos sistemas estelares. Nuestro Sol se encuentra a unos 26.000 años luz del centro galáctico y tarda aproximadamente 225 a 250 millones de años en completar una vuelta alrededor de él. Esta región también contiene estrellas cercanas, como las que forman parte de la constelación de Orión, además de numerosas nebulosas. Su ubicación nos permite estudiar diferentes componentes de nuestra galaxia y comprender cómo se distribuyen sus estrellas y otros cuerpos celestes.");
                createInfo("L","./assets/img/C-EG2-3.png","Cúmulo de las Pléyades","El cúmulo de las Pléyades, también conocido como Messier 45 (M45), se encuentra aproximadamente a 440 años luz de la Tierra, en la constelación de Tauro. Está formado por cientos de estrellas jóvenes que se originaron a partir de una misma nube de gas y polvo hace aproximadamente 100 millones de años. Sus estrellas más brillantes presentan una tonalidad azulada debido a sus elevadas temperaturas y se encuentran rodeadas por pequeñas cantidades de polvo interestelar que reflejan su luz. Aunque contiene muchas estrellas, desde la Tierra se pueden distinguir principalmente siete a simple vista, razón por la que también recibe el nombre de las Siete Hermanas. Es uno de los cúmulos estelares más conocidos del cielo nocturno y resulta muy importante para estudiar cómo evolucionan las estrellas durante sus primeras etapas.");
                createInfo("R","./assets/img/C-EG2-4.png","Cúmulo de Hércules","El cúmulo de Hércules, identificado como Messier 13 (M13), se encuentra aproximadamente a 25.000 años luz de la Tierra, en la constelación de Hércules. Es un cúmulo globular compuesto por cientos de miles de estrellas que permanecen agrupadas debido a la fuerza de gravedad. A diferencia de los cúmulos abiertos, sus estrellas se distribuyen en una estructura aproximadamente esférica, con una concentración especialmente elevada hacia su centro. Muchas de ellas son extremadamente antiguas y pueden tener más de 11.000 millones de años, por lo que permiten estudiar algunas de las primeras etapas de la evolución de nuestra galaxia. Su región central es tan densa que las estrellas se encuentran relativamente próximas entre sí. Desde la Tierra puede observarse como una pequeña mancha luminosa con binoculares, aunque los telescopios permiten distinguir la enorme cantidad de estrellas que lo forman.");
                createInfo("L","./assets/img/C-EG2-5.png","Nebulosa de la Laguna","La Nebulosa de la Laguna, también conocida como Messier 8 (M8), se encuentra aproximadamente a 4.000-5.000 años luz de la Tierra, en la constelación de Sagitario. Es una extensa región de gas y polvo interestelar donde se desarrollan intensos procesos de formación estelar. Su característico brillo rojizo se produce principalmente por el hidrógeno, que emite luz cuando recibe energía de las estrellas jóvenes y calientes que se encuentran en su interior. También contiene grandes concentraciones de polvo que forman regiones oscuras y ocultan parte de su estructura. Una de sus estrellas más destacadas es Herschel 36, cuya intensa radiación y cuyos vientos estelares modifican las nubes de gas cercanas, creando diferentes columnas y estructuras. Esta nebulosa es especialmente importante porque permite observar cómo nacen las estrellas y cómo su energía transforma el entorno que las rodea.");
                createInfo("R","./assets/img/C-EG2-6.png","Nebulosa de la Trífida","La Nebulosa de la Trífida, identificada como Messier 20 (M20), se encuentra aproximadamente a 5.000 años luz de la Tierra, en la constelación de Sagitario. Es una región muy particular porque combina diferentes tipos de nebulosas en un mismo lugar: una zona rojiza donde el gas emite luz, regiones azuladas que reflejan la luz de las estrellas y grandes concentraciones oscuras de polvo que bloquean la luz que se encuentra detrás de ellas. Su nombre proviene de las tres grandes divisiones oscuras que atraviesan su región más brillante y le dan una apariencia característica. En su interior existen estrellas jóvenes cuya radiación ilumina y modifica el material que las rodea. Además, las nubes de gas y polvo presentes en la región pueden dar origen a nuevas estrellas mediante la acción de la gravedad. Su variedad de colores y estructuras la convierte en uno de los objetos más llamativos de nuestra galaxia.");
            }
            if (iCheck == 2) {
                title = "OTRAS GALAXIAS";
                createInfo("",null,title,"Las galaxias son enormes agrupaciones de estrellas, planetas, gas, polvo cósmico y otros cuerpos celestes que se mantienen unidos por la gravedad. Se encuentran distribuidas por todo el universo y pueden contener desde millones hasta billones de estrellas. Según su estructura, se clasifican principalmente en espirales, elípticas e irregulares. Algunas poseen brazos espirales similares a los de la Vía Láctea, mientras que otras presentan formas ovaladas o estructuras desordenadas. Muchas galaxias también contienen agujeros negros supermasivos en sus regiones centrales y pueden interactuar o incluso fusionarse con otras galaxias. Su estudio permite comprender cómo se originó y evolucionó el universo a lo largo de miles de millones de años.");
                createInfo("L","./assets/img/C-EG3-1.png","Galaxia de Andrómeda","La Galaxia de Andrómeda, también conocida como Messier 31 (M31), se encuentra aproximadamente a 2,5 millones de años luz de la Tierra, en la constelación de Andrómeda. Es una galaxia espiral muy similar a la Vía Láctea y se considera la galaxia grande más cercana a nuestro sistema galáctico. Se estima que contiene alrededor de un billón de estrellas, distribuidas en un enorme disco con brazos espirales, regiones de formación estelar y una zona central muy brillante. En su núcleo se encuentra un agujero negro supermasivo, rodeado por una gran concentración de estrellas. Andrómeda forma parte del Grupo Local, un conjunto de galaxias al que también pertenece la Vía Láctea. Debido a la gravedad, ambas galaxias se están acercando y se espera que comiencen a fusionarse dentro de varios miles de millones de años, formando una galaxia mucho mayor.");
                createInfo("R","./assets/img/C-EG3-2.png","Galaxia del Triángulo","La Galaxia del Triángulo, identificada como Messier 33 (M33), se encuentra aproximadamente a 2,7 millones de años luz de la Tierra, en la constelación del Triángulo. Es una galaxia espiral de tamaño relativamente pequeño en comparación con la Vía Láctea y Andrómeda, pero contiene una enorme cantidad de estrellas, gas y polvo interestelar. Sus brazos espirales presentan numerosas regiones de formación estelar, donde las nubes de gas y polvo se agrupan por efecto de la gravedad y pueden dar origen a nuevas estrellas. Una de sus estructuras más destacadas es NGC 604, una gigantesca región de formación estelar que contiene estrellas jóvenes y muy calientes. Esta galaxia forma parte del Grupo Local y es uno de los objetos más importantes para estudiar cómo se desarrollan las galaxias espirales de menor tamaño.");
                createInfo("L","./assets/img/C-EG3-3.png","Galaxia del Sombrero","La Galaxia del Sombrero, también conocida como Messier 104 (M104), se encuentra aproximadamente a 30 millones de años luz de la Tierra, en la constelación de Virgo. Es una galaxia que presenta características tanto de las galaxias espirales como de las elípticas, y recibe su nombre por su apariencia similar a un sombrero visto de perfil. Su estructura está formada por una región central muy brillante y un amplio disco rodeado por una llamativa franja oscura de polvo cósmico. Esta banda contiene material interestelar que puede participar en la formación de nuevas estrellas. En su centro existe una gran concentración de estrellas y un agujero negro supermasivo con una masa de miles de millones de veces la del Sol. Su particular apariencia la convierte en una de las galaxias más reconocibles y estudiadas por los astrónomos.");
                createInfo("R","./assets/img/C-EG3-4.png","Galaxia del Remolino","La Galaxia del Remolino, identificada como Messier 51 (M51), se encuentra aproximadamente a 27 millones de años luz de la Tierra, en la constelación de Canes Venatici. Es una galaxia espiral que se destaca por sus brazos muy definidos, los cuales forman una estructura semejante a un remolino. Su apariencia se debe en parte a la interacción gravitatoria con una galaxia compañera más pequeña, conocida como NGC 5195. Esta interacción modifica la distribución del gas y del polvo, favoreciendo la formación de nuevas estrellas en distintas regiones de sus brazos. En las fotografías pueden observarse zonas azuladas, correspondientes principalmente a estrellas jóvenes, y regiones rojizas donde abundan el gas y las zonas de formación estelar. Es uno de los ejemplos más conocidos de cómo la interacción entre galaxias puede modificar sus estructuras y favorecer el nacimiento de nuevas estrellas.");
                createInfo("L","./assets/img/C-EG3-5.png","Galaxia del Ojo Negro","La Galaxia del Ojo Negro, también conocida como Messier 64 (M64), se encuentra aproximadamente a 17 millones de años luz de la Tierra, en la constelación de Coma Berenices. Es una galaxia espiral que recibe su nombre por una gran franja oscura de polvo que se encuentra delante de su brillante región central y que le da la apariencia de un ojo oscuro. Esta concentración de polvo y gas oculta parte de la luz de las estrellas que se encuentran detrás, creando un marcado contraste en las imágenes. Una de sus características más particulares es que el gas de sus regiones internas gira en sentido contrario al de gran parte del gas de sus regiones exteriores. Este comportamiento podría estar relacionado con la interacción que tuvo con otra galaxia en el pasado. Su estructura permite estudiar cómo las colisiones y los encuentros entre galaxias pueden modificar el movimiento de sus componentes.");
                createInfo("R","./assets/img/C-EG3-6.png","Galaxias de las Antenas","Las Galaxias de las Antenas, identificadas como NGC 4038 y NGC 4039, se encuentran aproximadamente a 45-65 millones de años luz de la Tierra, en la constelación de Corvus. Son dos galaxias espirales que están interactuando y fusionándose debido a la fuerza de gravedad. Durante este proceso, sus estructuras se deforman y se producen largas extensiones de estrellas, gas y polvo que se asemejan a las antenas de un insecto, de donde proviene su nombre. La colisión provoca que grandes cantidades de gas y polvo se compriman, favoreciendo el nacimiento de numerosas estrellas nuevas y cúmulos estelares. Con el paso de millones de años, ambas galaxias terminarán formando una única estructura mucho mayor. Este sistema es especialmente importante para los astrónomos porque permite observar cómo las galaxias cambian de forma, interactúan y se fusionan a lo largo de su evolución.");
            }
            if (iCheck == 3) {
                title = "EL CICLO DE VIDA DE LAS ESTRELLAS";
                createInfo("",null,title,"Las estrellas atraviesan diferentes etapas a lo largo de su existencia, desde su nacimiento hasta su desaparición o transformación en otros objetos celestes. Todo comienza en enormes nubes de gas y polvo cósmico, donde la gravedad reúne la materia hasta formar una protoestrella. Cuando su núcleo alcanza la temperatura necesaria, comienza la fusión nuclear y nace una estrella. Durante millones o miles de millones de años permanece en una etapa estable, hasta que consume gran parte de su combustible. A partir de ese momento, su evolución depende principalmente de su masa: algunas estrellas se convierten en gigantes rojas y terminan formando enanas blancas, mientras que las más masivas pueden explotar como supernovas y dejar estrellas de neutrones o agujeros negros.");
                createInfo("L","./assets/img/C-EG1-2.png","Nebulosa de Orión","La Nebulosa de Orión, también conocida como Messier 42 (M42), se encuentra aproximadamente a 1.350-1.500 años luz de la Tierra, en la constelación de Orión. Es una enorme concentración de gas y polvo cósmico donde nacen nuevas estrellas. En su interior, la gravedad provoca que distintas regiones de materia se contraigan y aumenten su temperatura y densidad, dando comienzo al proceso de formación estelar. Algunas de estas regiones pueden desarrollar cientos de estrellas de diferentes tamaños y masas. Una de sus zonas más conocidas es el Cúmulo del Trapecio, formado por estrellas jóvenes y muy calientes cuya radiación ilumina la nebulosa y modifica las nubes que las rodean. Esta región es especialmente importante porque permite observar las primeras etapas del nacimiento de las estrellas.");
                createInfo("R","./assets/img/C-EG4-1.png","HH 212","Herbig-Haro 212 (HH 212) es un sistema estelar en formación ubicado aproximadamente a 1.400 años luz de la Tierra, en la constelación de Orión. En su centro se encuentra una protoestrella, es decir, una estrella que todavía está acumulando materia y no ha comenzado a producir energía mediante la fusión nuclear de hidrógeno de manera estable. Durante esta etapa, el gas y el polvo de los alrededores caen hacia el objeto central y forman un disco de material que gira a su alrededor. Parte de esa materia es expulsada en forma de dos enormes chorros de gas que salen en direcciones opuestas y pueden extenderse durante varios años luz. Estos chorros son una característica importante de las estrellas jóvenes y permiten estudiar cómo se forman y evolucionan antes de convertirse en estrellas completamente desarrolladas.");
                createInfo("L","./assets/img/C-EG4-2.png","El Sol","El Sol es la estrella central de nuestro sistema solar y se encuentra a unos 150 millones de kilómetros de la Tierra. Tiene aproximadamente 4.600 millones de años y actualmente atraviesa la etapa conocida como secuencia principal, durante la cual produce energía mediante la fusión nuclear del hidrógeno en su núcleo. En este proceso, una parte de la masa se transforma en energía, que posteriormente llega al espacio en forma de luz y calor. Esta etapa representa la mayor parte de la vida de una estrella y puede durar miles de millones de años, dependiendo de su masa. El Sol se encuentra aproximadamente a mitad de su vida como estrella de secuencia principal y seguirá produciendo energía de esta manera durante otros 5.000 millones de años, aproximadamente. Su energía es fundamental para mantener las condiciones que permiten la vida en la Tierra.");
                createInfo("R","./assets/img/C-EG4-3.png","Aldebarán","Aldebarán es una estrella gigante roja ubicada aproximadamente a 65 años luz de la Tierra, en la constelación de Tauro. Es mucho más grande que el Sol y presenta un característico color anaranjado debido a que su superficie tiene una temperatura menor que la de nuestra estrella. Esta etapa ocurre cuando una estrella consume gran parte del hidrógeno disponible en su núcleo y comienza a experimentar cambios en su estructura interna. Como consecuencia, sus capas exteriores se expanden enormemente y su superficie se enfría, adquiriendo un color rojizo. Aldebarán tiene un radio de aproximadamente 44 veces el del Sol y su luminosidad es cientos de veces mayor. Las estrellas de masa similar a la del Sol también atravesarán una etapa de gigante roja en el futuro, por lo que su estudio permite comprender cómo podría evolucionar nuestra propia estrella.");
                createInfo("L","./assets/img/C-EG4-4.png","Nebulosa del Anillo","La Nebulosa del Anillo, también conocida como Messier 57 (M57), se encuentra aproximadamente a 2.500 años luz de la Tierra, en la constelación de Lyra. Se formó cuando una estrella de masa similar a la del Sol llegó a las últimas etapas de su vida y expulsó sus capas exteriores hacia el espacio. El material expulsado quedó distribuido alrededor de la estrella central y comenzó a brillar debido a la radiación que recibe de su núcleo caliente. En el centro permanece una enana blanca, que es el núcleo compacto que quedó después de que la estrella perdiera sus capas externas. Con el paso del tiempo, los gases de la nebulosa se dispersarán por el espacio, mientras que la enana blanca continuará enfriándose lentamente durante miles de millones de años. Este proceso representa uno de los posibles destinos finales de estrellas como nuestro Sol.");
                createInfo("R","./assets/img/C-EG1-3.png","Nebulosa del Cangrejo","La Nebulosa del Cangrejo, identificada como Messier 1 (M1), se encuentra aproximadamente a 6.500 años luz de la Tierra, en la constelación de Tauro. Se originó a partir de la explosión de una estrella masiva en forma de supernova, un acontecimiento que fue observado por astrónomos en el año 1054. Durante esta explosión, la estrella expulsó enormes cantidades de materia hacia el espacio, formando una nube de gas que continúa expandiéndose. En su centro quedó una estrella de neutrones conocida como púlsar, que gira aproximadamente 30 veces por segundo y emite intensos pulsos de radiación. Este tipo de resultado ocurre cuando una estrella suficientemente masiva llega al final de su vida y su núcleo colapsa bajo su propia gravedad. La Nebulosa del Cangrejo permite estudiar las consecuencias de las supernovas y cómo estos acontecimientos distribuyen elementos químicos por el universo.");
            }
            if (iCheck == 4) {
                title = "LAS ESTRELLAS DE NEUTRONES";
                createInfo("",null,title,"Las estrellas de neutrones son objetos celestes extremadamente densos que se forman cuando una estrella masiva agota su combustible y su núcleo colapsa durante una explosión de supernova. Como resultado, gran parte de su materia queda comprimida en una esfera de apenas unos 20 kilómetros de diámetro, cuya masa puede superar la del Sol. Debido a su enorme densidad, una pequeña cantidad de su materia tendría un peso extraordinario en la Tierra. Algunas giran a velocidades increíbles y emiten haces de radiación que pueden detectarse como pulsos regulares, por lo que reciben el nombre de púlsares. Otras poseen campos magnéticos extremadamente intensos y se conocen como magnetares. Estos objetos permiten estudiar las condiciones físicas más extremas del universo.");
                createInfo("L","./assets/img/C-EG5-1.png","Púlsar del Cangrejo","El Púlsar del Cangrejo se encuentra aproximadamente a 6.500 años luz de la Tierra, en la constelación de Tauro, en el centro de la Nebulosa del Cangrejo. Se originó después de la explosión de una estrella masiva que fue observada por astrónomos en el año 1054. Su núcleo colapsó y dio origen a una estrella de neutrones que gira aproximadamente 30 veces por segundo. Durante su rotación, emite haces de radiación que pueden detectarse desde la Tierra como pulsos regulares. Su enorme velocidad de rotación y su intenso campo magnético hacen que libere grandes cantidades de energía hacia el espacio. Es uno de los púlsares más estudiados por los astrónomos y permite comprender qué sucede con el núcleo de una estrella después de una explosión de supernova.");
                createInfo("R","./assets/img/C-EG5-2.png","Púlsar de Vela","El Púlsar de Vela se encuentra aproximadamente a 950 años luz de la Tierra, en la constelación de Vela. Se formó a partir de una supernova que ocurrió hace aproximadamente 10.000 años y actualmente permanece como el núcleo extremadamente compacto de la antigua estrella. Gira alrededor de 11 veces por segundo y emite radiación en diferentes longitudes de onda, incluyendo ondas de radio, rayos X y rayos gamma. Una de sus características más interesantes es que puede experimentar pequeños aumentos repentinos en su velocidad de rotación, conocidos como glitches. Estos cambios se relacionan con movimientos internos de su materia extremadamente densa y permiten estudiar cómo se comporta el interior de las estrellas de neutrones. Es uno de los objetos más importantes para investigar la estructura y evolución de estos cuerpos celestes.");
                createInfo("L","./assets/img/C-EG5-3.png","PSR B1919+21","PSR B1919+21 es una estrella de neutrones ubicada aproximadamente a 2.300 años luz de la Tierra, en la constelación de Vulpecula. Es especialmente importante para la astronomía porque fue el primer púlsar descubierto, en 1967, por la astrónoma Jocelyn Bell Burnell y su equipo de investigación. Este objeto gira aproximadamente una vez cada 1,3 segundos y emite señales de radio muy regulares que llegan a la Tierra en forma de pulsos. Su descubrimiento permitió confirmar la existencia de las estrellas de neutrones, que hasta ese momento eran principalmente una predicción teórica. También abrió una nueva etapa en el estudio de los objetos compactos y de las señales de radio provenientes del espacio. Gracias a este hallazgo, los astrónomos comenzaron a identificar muchos otros púlsares en nuestra galaxia.");
                createInfo("R","./assets/img/C-EG5-4.png","PSR J0737−3039","PSR J0737−3039 es un sistema ubicado aproximadamente a 2.400 años luz de la Tierra, formado por dos estrellas de neutrones que orbitan alrededor de un centro de gravedad común. Fue descubierto en 2003 y es especialmente importante porque constituye el primer sistema conocido en el que ambas estrellas son púlsares, aunque actualmente las señales de una de ellas ya no se detectan. Las dos estrellas se encuentran extremadamente próximas y completan una vuelta alrededor de sí mismas en aproximadamente 2,4 horas. Debido a su intensa gravedad, pierden energía lentamente mediante la emisión de ondas gravitacionales, por lo que sus órbitas se van acercando con el paso del tiempo. Este sistema permite comprobar algunas predicciones de la teoría de la relatividad general de Albert Einstein y estudiar cómo se comporta la gravedad en condiciones extremas.");
                createInfo("L","./assets/img/C-EG5-5.png","SGR 1806−20","SGR 1806−20 es un magnetar, un tipo especial de estrella de neutrones que posee uno de los campos magnéticos más intensos conocidos en el universo. Se encuentra aproximadamente a 50.000 años luz de la Tierra, en dirección a la constelación de Sagitario. Su campo magnético es tan poderoso que puede provocar cambios violentos en su superficie y liberar enormes cantidades de energía en forma de radiación. En diciembre de 2004 produjo una de las explosiones de rayos gamma más intensas registradas por los astrónomos, cuya radiación llegó hasta nuestro planeta y pudo detectarse mediante instrumentos espaciales. A diferencia de los púlsares comunes, cuya emisión suele estar relacionada con su rotación, los magnetares pueden experimentar estallidos causados por cambios bruscos en su estructura y en su campo magnético. Su estudio permite comprender algunos de los fenómenos más energéticos producidos por las estrellas de neutrones.");
                createInfo("R","./assets/img/C-EG5-6.png","PSR J1748−2446ad","PSR J1748−2446ad es una estrella de neutrones ubicada aproximadamente a 18.000 años luz de la Tierra, dentro del cúmulo globular Terzan 5, en la constelación de Sagitario. Es conocida por ser el púlsar de rotación más rápida confirmado hasta ahora, ya que completa aproximadamente 716 vueltas por segundo. Esto significa que su superficie se mueve a una velocidad extraordinaria, a pesar de que su diámetro es de apenas unas decenas de kilómetros. Su enorme velocidad de rotación se relaciona con la acumulación de materia que pudo recibir de una estrella compañera durante su evolución. Este proceso puede acelerar considerablemente a una estrella de neutrones y convertirla en un púlsar de milisegundos. Su estudio ayuda a comprender cuáles son los límites de velocidad que pueden alcanzar estos objetos sin desintegrarse debido a su propia rotación.");
            }
        }

        if (categoria == "categoria3") {
            if (iCheck == 0) {
                title = "LOS ASTRONAUTAS";
                createInfo("",null,title,"Los astronautas son personas que reciben una preparación física, científica y técnica para viajar al espacio y realizar diferentes misiones. Su trabajo puede incluir la investigación de fenómenos espaciales, el mantenimiento de estaciones orbitales, la exploración de otros cuerpos celestes y la realización de experimentos científicos. A lo largo de la historia, sus viajes permitieron importantes avances en el conocimiento del universo y demostraron hasta dónde puede llegar la exploración humana.");
                createInfo("L","./assets/img/C-EE1-1.png","YURI GAGARIN","Yuri Gagarin fue un cosmonauta soviético que hizo historia al convertirse en el primer ser humano en viajar al espacio. El 12 de abril de 1961 despegó a bordo de la nave Vostok 1 desde el cosmódromo de Baikonur, en una misión que duró aproximadamente 108 minutos. Durante ese tiempo completó una órbita alrededor de la Tierra, alcanzando una altura de unos 327 kilómetros. Su viaje permitió comprobar que una persona podía permanecer en el espacio y regresar de manera segura. Este acontecimiento representó un enorme avance tecnológico y científico, y convirtió a Gagarin en una de las figuras más importantes de la historia de la exploración espacial.");
                createInfo("R","./assets/img/C-EE1-2.png","NEIL ARMSTRONG","Neil Armstrong fue un astronauta estadounidense, ingeniero y piloto que se convirtió en el primer ser humano en caminar sobre la superficie de la Luna. El 20 de julio de 1969 participó en la misión Apolo 11 junto con Buzz Aldrin y Michael Collins. Armstrong y Aldrin descendieron en el módulo lunar Eagle, mientras Collins permaneció en órbita alrededor de la Luna. Durante su caminata lunar recolectaron muestras del suelo, tomaron fotografías y realizaron experimentos científicos. La misión demostró que era posible llevar seres humanos hasta otro cuerpo celeste y regresar a la Tierra, convirtiéndose en uno de los mayores logros de la humanidad.");
                createInfo("L","./assets/img/C-EE1-3.png","VALENTINA TERESHKOVA","Valentina Tereshkova fue una cosmonauta soviética que se convirtió en la primera mujer en viajar al espacio. Antes de ingresar al programa espacial, se dedicaba al paracaidismo, una experiencia que ayudó a que fuera seleccionada para formar parte de las misiones soviéticas. El 16 de junio de 1963 despegó a bordo de la nave Vostok 6 y permaneció aproximadamente 71 horas en el espacio, durante las cuales completó 48 órbitas alrededor de la Tierra. Su misión permitió estudiar cómo reaccionaba el cuerpo humano durante un vuelo espacial prolongado. Su participación abrió un camino importante para las mujeres en la exploración espacial y en las actividades científicas y tecnológicas.");
                createInfo("R","./assets/img/C-EE1-4.png","CHRIS HADFIELD","Chris Hadfield es un astronauta canadiense, ingeniero y expiloto militar que participó en distintas misiones espaciales a lo largo de su carrera. Viajó al espacio por primera vez en 1995 y posteriormente formó parte de varias expediciones a la Estación Espacial Internacional. En 2012 llegó nuevamente a la estación y en 2013 se convirtió en el primer canadiense en ocupar su comandancia. Durante su estadía supervisó experimentos científicos, coordinó las actividades de la tripulación y participó en tareas de mantenimiento. También alcanzó gran popularidad al compartir fotografías, videos y explicaciones sobre la vida cotidiana en el espacio, acercando la exploración espacial a millones de personas.");
                createInfo("L","./assets/img/C-EE1-5.png","BUZZ ALDRIN","Buzz Aldrin es un astronauta estadounidense que participó en la histórica misión Apolo 11 y fue el segundo ser humano en caminar sobre la Luna. El 20 de julio de 1969 descendió junto con Neil Armstrong en el módulo lunar Eagle, donde permaneció aproximadamente dos horas y quince minutos realizando actividades en la superficie. Durante ese tiempo recolectó muestras de rocas y polvo lunar, tomó fotografías y colaboró en la instalación de instrumentos científicos. Antes de participar en esta misión, Aldrin también había viajado al espacio durante la misión Gemini 12, en la que realizó actividades fuera de la nave. Sus experiencias contribuyeron al desarrollo de técnicas fundamentales para futuras caminatas espaciales y exploraciones lunares.");
                createInfo("R","./assets/img/C-EE1-6.png","SALLY RIDE","Sally Ride fue una astronauta estadounidense, física y la primera mujer de su país en viajar al espacio. Su primer vuelo ocurrió el 18 de junio de 1983, cuando participó en la misión STS-7 a bordo del transbordador espacial Challenger. Durante el viaje, que duró aproximadamente seis días, trabajó con experimentos científicos y participó en el despliegue de satélites. En 1984 volvió a viajar al espacio en otra misión del Challenger, acumulando experiencia en diferentes actividades orbitales. Después de retirarse de la NASA, dedicó gran parte de su trabajo a promover la educación científica y a motivar a niñas y jóvenes a interesarse por la ciencia, la tecnología, la ingeniería y las matemáticas.");
            }
            if (iCheck == 1) {
                title = "LOS COHETES ESPACIALES";
                createInfo("",null,title,"Los cohetes espaciales son vehículos diseñados para transportar personas, satélites, sondas y otros equipos fuera de la atmósfera terrestre. Funcionan mediante motores que expulsan gases a gran velocidad, generando una fuerza que los impulsa en dirección contraria. A lo largo de la historia, estos vehículos evolucionaron hasta alcanzar enormes velocidades y transportar cargas cada vez más pesadas. Gracias a ellos, fue posible enviar astronautas a la Luna, construir estaciones espaciales, colocar satélites en órbita y explorar otros planetas. Actualmente, algunos cohetes cuentan con tecnologías reutilizables que permiten recuperar partes del vehículo y utilizarlas en nuevos lanzamientos.");
                createInfo("L","./assets/img/C-EE2-1.png","SATURN V","Fue un cohete estadounidense desarrollado por la NASA para llevar astronautas a la Luna durante el programa Apolo. Realizó su primer vuelo en 1967 y fue utilizado en las misiones Apolo, incluida la histórica Apolo 11. Con aproximadamente 110 metros de altura, fue uno de los cohetes más grandes y potentes jamás construidos. Estaba formado por tres etapas que se encendían sucesivamente para impulsarlo fuera de la atmósfera terrestre y colocarlo en trayectoria hacia la Luna. Su capacidad para transportar grandes cargas permitió realizar algunas de las misiones más importantes de la historia de la exploración espacial.");
                createInfo("R","./assets/img/C-EE2-2.png","FALCON 9","Es un cohete desarrollado por la empresa SpaceX, diseñado para transportar satélites, suministros y astronautas al espacio. Su característica más destacada es que su primera etapa puede regresar a la Tierra y aterrizar de manera controlada para ser reutilizada en otros lanzamientos. Esto permite reducir los costos de las misiones espaciales y realizar lanzamientos con mayor frecuencia. Desde su primer vuelo en 2010, se convirtió en uno de los vehículos espaciales más utilizados para transportar cargas y tripulaciones hacia la órbita terrestre. Su tecnología de recuperación y reutilización representó un importante avance en la industria aeroespacial.");
                createInfo("L","./assets/img/C-EE2-3.png","SPACE LAUNCH SYSTEM (SLS)","Es un cohete de gran potencia desarrollado por la NASA para las misiones del programa Artemis, cuyo objetivo es regresar a los seres humanos a la Luna y preparar futuras exploraciones de Marte. Su primer lanzamiento ocurrió en noviembre de 2022, durante la misión Artemis I, que envió una nave Orión sin tripulación alrededor de la Luna. Tiene una altura aproximada de 98 metros en su configuración inicial y utiliza motores principales y propulsores laterales para generar la fuerza necesaria para abandonar la Tierra. Su enorme capacidad de carga permite transportar naves y equipos destinados a misiones de exploración del espacio profundo.");
                createInfo("R","./assets/img/C-EE2-4.png","SOYUZ","Es una familia de cohetes rusos que comenzó a utilizarse durante la década de 1960 y que cuenta con una de las trayectorias de servicio más extensas de la historia espacial. Ha transportado satélites, naves tripuladas y suministros hacia diferentes destinos orbitales, incluida la Estación Espacial Internacional. Su diseño utiliza varias etapas que se separan durante el ascenso para reducir el peso del vehículo y permitir que continúe acelerando. Gracias a su confiabilidad y a sus numerosas misiones, se convirtió en uno de los sistemas de lanzamiento más importantes del mundo y desempeñó un papel fundamental en los vuelos espaciales tripulados.");
                createInfo("L","./assets/img/C-EE2-5.png","ARIANE 5","Fue un cohete europeo desarrollado por la Agencia Espacial Europea y utilizado principalmente para colocar satélites y otros equipos en órbita. Su primer lanzamiento tuvo lugar en 1996 y, durante más de dos décadas, fue uno de los principales vehículos de lanzamiento de Europa. Podía transportar cargas muy pesadas, como satélites de comunicaciones y sondas científicas destinadas a explorar otros planetas. También fue utilizado para lanzar el telescopio espacial James Webb en diciembre de 2021, una de las misiones científicas más importantes de la astronomía moderna. Su último vuelo se realizó en julio de 2023, después de completar más de cien lanzamientos.");
                createInfo("R","./assets/img/C-EE2-6.png","TRANSBORDADOR ESPACIAL","Fue un sistema de transporte espacial reutilizable desarrollado por la NASA y utilizado entre 1981 y 2011. A diferencia de los cohetes tradicionales, estaba formado por un orbitador con alas, un gran tanque externo de combustible y dos propulsores laterales. Después de alcanzar el espacio, el orbitador podía regresar a la Tierra y aterrizar como un avión. Durante sus misiones transportó astronautas, satélites y componentes para construir la Estación Espacial Internacional, además de realizar importantes tareas de mantenimiento del telescopio espacial Hubble. Aunque su programa terminó en 2011, sus misiones dejaron importantes avances para la exploración espacial.");
            }
            if (iCheck == 2) {
                title = "LA ESTACIÓN ESPACIAL INTERNACIONAL";
                createInfo("",null,title,"La Estación Espacial Internacional (EEI) es una enorme estructura científica que orbita alrededor de la Tierra y funciona como un laboratorio en el espacio. Fue construida mediante la colaboración de diferentes países y agencias espaciales, entre ellas la NASA, Roscosmos, la Agencia Espacial Europea, Japón y Canadá. Se encuentra a unos 400 kilómetros de altura y viaja a una velocidad aproximada de 28.000 kilómetros por hora, completando una vuelta alrededor del planeta cada 90 minutos. En su interior, los astronautas viven y trabajan durante períodos prolongados, realizando experimentos científicos, investigaciones médicas y pruebas tecnológicas que permiten comprender mejor el espacio y preparar futuras misiones de exploración.");
                createInfo("L","./assets/img/C-EE3-1.png","LABORATORIO DESTINY","Es uno de los principales módulos científicos de la Estación Espacial Internacional y fue construido por Estados Unidos. Se incorporó a la estación en febrero de 2001 y permite realizar experimentos en condiciones de microgravedad. Allí los astronautas estudian diferentes fenómenos físicos, químicos y biológicos que serían difíciles de investigar en la Tierra. Sus investigaciones ayudan a comprender cómo se comportan los materiales, los líquidos y los organismos vivos cuando no están sometidos a la gravedad terrestre habitual.");
                createInfo("R","./assets/img/C-EE3-2.png","MÓDULO ZVEZDA","Es un módulo ruso que forma parte de la estructura principal de la estación y fue incorporado en julio de 2000. Proporciona espacios habitables para los astronautas, además de sistemas esenciales para el funcionamiento de la estación, como equipos de soporte vital, comunicaciones y control de temperatura. También cuenta con instalaciones para que la tripulación pueda descansar y realizar sus actividades diarias. Su incorporación permitió ampliar las capacidades de la estación y facilitar la permanencia de seres humanos durante largos períodos en el espacio.");
                createInfo("L","./assets/img/C-EE3-3.png","LABORATORIO COLUMBUS","Es un módulo científico desarrollado por la Agencia Espacial Europea e incorporado a la estación en febrero de 2008. Está equipado con instrumentos que permiten realizar investigaciones sobre biología, física, medicina y tecnología en condiciones de microgravedad. Los experimentos realizados allí ayudan a estudiar cómo reaccionan las células, los microorganismos y distintos materiales cuando se encuentran en el espacio. Sus investigaciones también contribuyen al desarrollo de nuevas tecnologías y al conocimiento necesario para futuras misiones espaciales de larga duración.");
                createInfo("R","./assets/img/C-EE3-4.png","MÓDULO KIBO","Es un laboratorio espacial desarrollado por Japón y uno de los módulos más grandes de la estación. Fue incorporado progresivamente entre 2008 y 2009 y permite realizar experimentos científicos en diferentes áreas, como medicina, biología y física. Una de sus características más destacadas es que posee una plataforma exterior donde pueden colocarse equipos para estudiar el espacio directamente. También cuenta con un brazo robótico que ayuda a manipular instrumentos y cargas fuera de la estación, facilitando investigaciones que necesitan estar expuestas al entorno espacial.");
                createInfo("L","./assets/img/C-EE3-5.png","BRAZO ROBÓTICO CANADARM2","Es un sistema robótico desarrollado por Canadá que se utiliza para realizar tareas de mantenimiento, mover equipos y ayudar a capturar naves espaciales que llegan a la estación. Fue instalado en 2001 y puede desplazarse por diferentes partes de la estructura mediante un sistema de sujeción especial. Gracias a sus movimientos precisos, permite trasladar grandes componentes y asistir a los astronautas durante algunas actividades realizadas en el exterior. Su incorporación redujo la necesidad de que los tripulantes realizaran manualmente numerosas tareas complejas y peligrosas.");
                createInfo("R","./assets/img/C-EE3-6.png","PANELES SOLARES","Son uno de los elementos más importantes de la Estación Espacial Internacional, ya que proporcionan la energía eléctrica necesaria para mantenerla en funcionamiento. Sus grandes estructuras captan la luz del Sol y la convierten en electricidad mediante células fotovoltaicas. Esta energía alimenta los laboratorios, los sistemas de comunicación, los equipos científicos y los dispositivos utilizados por los astronautas. Además, la estación cuenta con baterías que almacenan energía para continuar funcionando cuando pasa por la sombra de la Tierra y no recibe luz solar directa.");
            }
            if (iCheck == 3) {
                title = "LA LLEGADA A LA LUNA";
                createInfo("",null,title,"La llegada del ser humano a la Luna fue uno de los acontecimientos más importantes de la historia de la exploración espacial. El 20 de julio de 1969, la misión Apollo 11 de la NASA consiguió llevar a los primeros astronautas hasta la superficie lunar. La tripulación estaba formada por Neil Armstrong, Edwin 'Buzz' Aldrin y Michael Collins, quienes despegaron desde la Tierra a bordo de un cohete Saturno V. Mientras Collins permaneció en órbita lunar, Armstrong y Aldrin descendieron utilizando el módulo lunar Eagle y lograron aterrizar en el Mar de la Tranquilidad. Durante su estadía realizaron experimentos, recogieron muestras de rocas y tomaron fotografías del entorno. Esta misión demostró que era posible viajar hasta otro cuerpo celeste y regresar de manera segura, abriendo nuevas oportunidades para la exploración del espacio.");
                createInfo("L","./assets/img/C-EE4-1.png","MISIÓN APOLLO 11","Apollo 11 fue la misión espacial estadounidense que consiguió llevar a los primeros seres humanos hasta la superficie de la Luna. Fue lanzada el 16 de julio de 1969 desde el Centro Espacial Kennedy, utilizando el potente cohete Saturno V. Su tripulación estaba compuesta por Neil Armstrong, Edwin 'Buzz' Aldrin y Michael Collins. El objetivo principal era completar el primer aterrizaje tripulado en nuestro satélite natural y demostrar que los seres humanos podían llegar hasta allí y regresar a la Tierra. La misión tuvo una duración total de aproximadamente ocho días y marcó un antes y un después en la historia de la exploración espacial.");
                createInfo("R","./assets/img/C-EE4-2.png","EL COHETE SATURNO V","El Saturno V fue el cohete utilizado para transportar a los astronautas de Apollo 11 desde la Tierra hasta la Luna. Con aproximadamente 110 metros de altura, fue uno de los vehículos espaciales más grandes y potentes construidos por el ser humano. Estaba compuesto por tres etapas principales que se encendían sucesivamente para proporcionar el impulso necesario durante el ascenso y el viaje espacial. Gracias a sus motores, pudo transportar la nave Apollo, sus sistemas y a los tres astronautas fuera de la atmósfera terrestre. Su desarrollo representó uno de los mayores avances de la ingeniería aeroespacial de aquella época.");
                createInfo("L","./assets/img/C-EE4-3.png","EL MÓDULO LUNAR EAGLE","El Eagle fue el módulo lunar utilizado por Neil Armstrong y Buzz Aldrin para descender hasta la superficie de la Luna. Se separó de la nave principal Columbia mientras se encontraba en órbita lunar y comenzó una maniobra de descenso controlado. El 20 de julio de 1969 consiguió aterrizar en el Mar de la Tranquilidad, convirtiéndose en el primer vehículo tripulado en llegar hasta la superficie lunar. Estaba diseñado con dos partes: una etapa inferior que permitía aterrizar y otra superior que posteriormente despegó para llevar a los astronautas nuevamente hasta la órbita lunar, donde los esperaba Michael Collins.");
                createInfo("R","./assets/img/C-EE4-4.png","LOS PRIMEROS PASOS EN LA LUNA","El 20 de julio de 1969, Neil Armstrong descendió por la escalera del módulo Eagle y se convirtió en el primer ser humano en caminar sobre la superficie lunar. Poco después, Buzz Aldrin también salió del vehículo para acompañarlo durante las actividades de exploración. Ambos astronautas utilizaron trajes espaciales especiales que les proporcionaban oxígeno, protección térmica y comunicación con la Tierra. Durante su recorrido observaron el terreno, tomaron fotografías y realizaron diferentes tareas científicas. Este acontecimiento fue transmitido por televisión y seguido por millones de personas en todo el mundo, convirtiéndose en un momento histórico para la humanidad.");
                createInfo("L","./assets/img/C-EE4-5.png","EXPERIMENTOS Y MUESTRAS LUNARES","Durante su estadía en la Luna, Armstrong y Aldrin realizaron diferentes investigaciones para estudiar las características de su superficie. Instalaron instrumentos científicos, fotografiaron el terreno y recogieron aproximadamente 21,5 kilogramos de rocas y muestras de suelo lunar. Estos materiales fueron transportados posteriormente a la Tierra para ser analizados por investigadores y científicos. También realizaron observaciones sobre el polvo lunar, los cráteres y las condiciones ambientales del satélite. Los resultados obtenidos permitieron ampliar considerablemente el conocimiento sobre la composición de la Luna y su formación, además de contribuir al desarrollo de futuras misiones espaciales.");
                createInfo("R","./assets/img/C-EE4-6.png","EL REGRESO A LA TIERRA","Después de completar las actividades en la superficie lunar, Armstrong y Aldrin despegaron utilizando la etapa superior del módulo Eagle para reunirse con Michael Collins, quien permanecía en la nave Columbia orbitando la Luna. Una vez reunidos, los tres astronautas iniciaron el viaje de regreso hacia la Tierra. El 24 de julio de 1969, la cápsula de mando atravesó la atmósfera terrestre y descendió mediante paracaídas hasta aterrizar en el océano Pacífico. Allí fueron recuperados por un equipo de rescate. La misión Apollo 11 finalizó exitosamente, demostrando que era posible realizar viajes tripulados hasta la Luna y regresar de forma segura.");
            }
            if (iCheck == 4) {
                title = "LOS ROBOTS EXPLORADORES";
                createInfo("",null,title,"Los robots exploradores son máquinas diseñadas para investigar planetas, lunas, asteroides y otros cuerpos celestes sin necesidad de transportar seres humanos. Son enviados al espacio mediante cohetes y pueden realizar diferentes tareas, como tomar fotografías, analizar rocas, estudiar la atmósfera y buscar indicios de agua o condiciones que podrían permitir la existencia de vida. A lo largo de la historia, distintas agencias espaciales han desarrollado vehículos capaces de desplazarse por terrenos desconocidos y enviar información científica a la Tierra. Algunos de los más conocidos fueron enviados a Marte, donde recorrieron su superficie y realizaron importantes descubrimientos. Gracias a estos dispositivos, los científicos pueden explorar lugares extremadamente lejanos y peligrosos, ampliar sus conocimientos sobre el universo y preparar futuras misiones tripuladas.");
                createInfo("L","./assets/img/C-EE5-1.png","EL ROVER SOJOURNER","Sojourner fue el primer vehículo robótico con ruedas que consiguió desplazarse exitosamente sobre la superficie de Marte. Llegó al planeta el 4 de julio de 1997 como parte de la misión Mars Pathfinder, desarrollada por la NASA. Tenía un tamaño similar al de un horno microondas y utilizaba seis ruedas para desplazarse por el terreno marciano. Estaba equipado con cámaras e instrumentos científicos que le permitían estudiar las rocas y el suelo de sus alrededores. Durante su misión analizó diferentes formaciones geológicas y envió información e imágenes a la Tierra. Su éxito demostró que era posible utilizar pequeños robots para explorar otros planetas y abrió el camino para vehículos exploradores mucho más avanzados.");
                createInfo("R","./assets/img/C-EE5-2.png","EL ROVER SPIRIT","Spirit fue uno de los dos vehículos exploradores enviados a Marte durante la misión Mars Exploration Rover de la NASA. Aterrizó en el planeta el 4 de enero de 2004 y tenía como objetivo estudiar las características geológicas de su superficie y buscar evidencias de agua en el pasado. Estaba equipado con cámaras, instrumentos para analizar minerales y seis ruedas que le permitían recorrer diferentes terrenos. Durante su funcionamiento encontró indicios de que algunas zonas de Marte habían estado expuestas al agua líquida hace millones de años. Aunque inicialmente estaba diseñado para trabajar durante aproximadamente 90 días marcianos, continuó funcionando durante varios años, superando ampliamente las expectativas de sus creadores.");
                createInfo("L","./assets/img/C-EE5-3.png","EL ROVER OPPORTUNITY","Opportunity fue el vehículo explorador que acompañó a Spirit durante la misión Mars Exploration Rover. Llegó a Marte el 25 de enero de 2004 y fue diseñado para investigar la composición de las rocas y buscar señales de agua que hubiera existido en el pasado. Durante sus recorridos descubrió minerales y formaciones geológicas que demostraron que algunas regiones marcianas habían tenido condiciones húmedas. Su misión estaba prevista para durar aproximadamente 90 días, pero consiguió permanecer activo durante casi 15 años. A lo largo de ese tiempo recorrió más de 45 kilómetros y envió miles de fotografías e importantes datos científicos a la Tierra. Su extraordinaria duración lo convirtió en uno de los robots exploradores más exitosos de la historia.");
                createInfo("R","./assets/img/C-EE5-4.png","EL ROVER CURIOSITY","Curiosity es un vehículo explorador desarrollado por la NASA que aterrizó en Marte el 6 de agosto de 2012 como parte de la misión Mars Science Laboratory. Es considerablemente más grande y avanzado que sus antecesores, ya que posee aproximadamente el tamaño de un automóvil pequeño y cuenta con numerosos instrumentos científicos. Su principal objetivo es estudiar el suelo, las rocas y la atmósfera marciana para determinar si el planeta tuvo condiciones adecuadas para albergar vida microscópica en el pasado. Está equipado con un laboratorio químico, cámaras y un brazo robótico que le permite recoger y analizar muestras. Sus investigaciones han permitido descubrir evidencias de antiguos ambientes con agua y ampliar el conocimiento sobre la historia de Marte.");
                createInfo("L","./assets/img/C-EE5-5.png","EL ROVER PERSEVERANCE","Perseverance es uno de los robots exploradores más avanzados enviados a Marte por la NASA. Aterrizó el 18 de febrero de 2021 en el cráter Jezero, una región que pudo haber contenido un antiguo lago. Su misión consiste en estudiar la geología del planeta, buscar posibles señales de vida microbiana antigua y recolectar muestras de rocas para que puedan ser analizadas en futuras misiones. Cuenta con cámaras de alta resolución, instrumentos científicos y un sistema especial para almacenar muestras en pequeños tubos. También transportó al helicóptero Ingenuity, que consiguió realizar los primeros vuelos controlados en otro planeta. Gracias a sus investigaciones, Perseverance está proporcionando información fundamental para comprender mejor el pasado de Marte.");
                createInfo("R","./assets/img/C-EE5-6.png","EL HELICÓPTERO INGENUITY","Ingenuity fue un pequeño helicóptero experimental desarrollado por la NASA que llegó a Marte junto con el rover Perseverance en febrero de 2021. Su principal objetivo era demostrar que era posible realizar vuelos controlados en la atmósfera extremadamente delgada del planeta rojo. Debido a que el aire marciano es mucho menos denso que el terrestre, necesitaba girar sus aspas a gran velocidad para conseguir elevarse. Su primer vuelo tuvo lugar el 19 de abril de 2021 y representó el primer vuelo motorizado y controlado realizado en otro planeta. Aunque inicialmente estaba diseñado para completar solamente cinco vuelos, terminó realizando 72 antes de finalizar su misión en enero de 2024. Su éxito abrió nuevas posibilidades para utilizar aeronaves en futuras exploraciones espaciales.");
            }
        }

        if (categoria == "categoria4") {
            if (iCheck == 0) {
                title = "LOS AGUJEROS NEGROS";
                createInfo("",null,title,"Los agujeros negros son algunos de los fenómenos más misteriosos y fascinantes del universo. Son regiones del espacio donde la gravedad es tan intensa que nada puede escapar de su atracción, ni siquiera la luz. Se forman principalmente cuando estrellas muy masivas llegan al final de su vida y colapsan bajo su propia gravedad, concentrando una enorme cantidad de materia en una región extremadamente pequeña. Aunque no pueden observarse directamente, los científicos pueden detectar su presencia estudiando cómo afectan a las estrellas, al gas y a la luz que los rodea. Algunos poseen masas equivalentes a varias veces la del Sol, mientras que otros pueden alcanzar millones o incluso miles de millones de masas solares. Su estudio permite comprender mejor la gravedad, el espacio-tiempo y algunos de los procesos más extremos del universo.");
                createInfo("L","./assets/img/C-MU1-1.png","¿QUÉ SON LOS AGUJEROS NEGROS?","Un agujero negro es una región del espacio donde una enorme cantidad de materia se encuentra concentrada en un volumen extremadamente pequeño, generando una fuerza gravitatoria muy intensa. Su atracción es tan poderosa que, una vez atravesado cierto límite, ni siquiera la luz puede escapar. Por esta razón, no es posible observarlos directamente como se observa una estrella o un planeta. Sin embargo, los astrónomos pueden detectar su existencia mediante los efectos que producen sobre los objetos cercanos, como el movimiento de las estrellas y el comportamiento del gas que cae hacia ellos. Estos fenómenos permiten investigar sus características y comprender cómo funcionan.");
                createInfo("R","./assets/img/C-MU1-2.png","¿CÓMO SE FORMAN?","La mayoría de los agujeros negros de origen estelar se forman cuando una estrella muy masiva llega al final de su vida. Durante millones de años, la estrella mantiene un equilibrio entre la energía producida en su interior y la fuerza de gravedad que intenta comprimirla. Cuando agota el combustible necesario para sostener ese equilibrio, su núcleo puede colapsar bajo su propio peso. En determinados casos, este proceso produce una explosión conocida como supernova y deja un objeto extremadamente compacto. Si el núcleo restante posee suficiente masa, continúa contrayéndose hasta formar un agujero negro. Este proceso representa uno de los finales más impresionantes que puede experimentar una estrella.");
                createInfo("L","./assets/img/C-MU1-3.png","EL HORIZONTE DE SUCESOS","El horizonte de sucesos es el límite que rodea a un agujero negro y marca el punto a partir del cual nada puede escapar de su interior. Una vez que un objeto atraviesa esta frontera, no existe ninguna trayectoria conocida que le permita regresar al espacio exterior, ni siquiera desplazándose a la velocidad de la luz. Su tamaño depende directamente de la masa del agujero negro: cuanto mayor sea su masa, más extenso será este límite. Aunque el horizonte de sucesos no puede observarse directamente, los científicos pueden estudiar sus efectos mediante la luz y la materia que se encuentran a su alrededor. Es una de las características fundamentales para comprender el funcionamiento de estos objetos.");
                createInfo("R","./assets/img/C-MU1-4.png","EL DISCO DE ACRECIÓN","Algunos agujeros negros se encuentran rodeados por enormes cantidades de gas, polvo y otros materiales que giran a gran velocidad antes de acercarse a ellos. Esta materia puede formar una estructura conocida como disco de acreción. Debido a la fricción, la compresión y las temperaturas extremadamente elevadas, el material alcanza millones de grados y emite grandes cantidades de radiación. Esta luz puede ser detectada por diferentes telescopios y permite estudiar agujeros negros que de otra manera serían invisibles. El disco de acreción también ayuda a comprender cómo estos objetos atraen materia de su entorno y cómo pueden liberar enormes cantidades de energía al espacio.");
                createInfo("L","./assets/img/C-MU1-5.png","LOS AGUJEROS NEGROS SUPERMASIVOS","Los agujeros negros supermasivos son objetos extraordinariamente grandes que poseen masas equivalentes a millones o incluso miles de millones de veces la del Sol. Se encuentran principalmente en las regiones centrales de muchas galaxias y pueden influir considerablemente en el movimiento de las estrellas y el gas que los rodea. Uno de los ejemplos más conocidos es Sagittarius A*, ubicado en el centro de nuestra galaxia, la Vía Láctea, con una masa aproximada de cuatro millones de soles. Otro ejemplo es M87*, un agujero negro ubicado en la galaxia Messier 87 que posee una masa de aproximadamente 6.500 millones de veces la del Sol. Su origen y crecimiento continúan siendo importantes temas de investigación astronómica.");
                createInfo("R","./assets/img/C-MU1-6.png","LAS PRIMERAS IMÁGENES DE UN AGUJERO NEGRO","Durante mucho tiempo, los agujeros negros fueron estudiados principalmente mediante cálculos matemáticos y observaciones indirectas. Sin embargo, en abril de 2019, el proyecto Event Horizon Telescope presentó la primera imagen de la sombra de un agujero negro, ubicado en el centro de la galaxia M87. Para conseguirlo, se combinaron observaciones de varios radiotelescopios distribuidos por diferentes partes del planeta, funcionando como si fueran un único telescopio del tamaño de la Tierra. En mayo de 2022, el mismo proyecto presentó la primera imagen de Sagittarius A*, el agujero negro situado en el centro de la Vía Láctea. Estos descubrimientos representaron avances históricos para la astronomía y permitieron estudiar directamente las regiones cercanas a estos misteriosos objetos.");
            }
            if (iCheck == 1) {
                title = "EL BIG BANG";
                createInfo("",null,title,"El Big Bang es la teoría científica más aceptada para explicar el origen y la evolución del universo. Según este modelo, hace aproximadamente 13.800 millones de años, el universo comenzó a expandirse desde un estado extremadamente caliente y denso. No se trató de una explosión convencional dentro del espacio, sino de una expansión del propio espacio que continúa hasta la actualidad. Durante sus primeras etapas, el universo experimentó enormes cambios de temperatura y comenzó a formar las partículas y los elementos que conocemos. Con el paso del tiempo, la materia se agrupó y dio origen a las primeras estrellas, galaxias y otros cuerpos celestes. Aunque todavía existen preguntas sin resolver sobre sus primeros instantes, los científicos estudian diferentes evidencias para comprender cómo evolucionó el universo desde sus comienzos hasta su estado actual.");
                createInfo("L","./assets/img/C-MU2-1.png","¿QUÉ ES EL BIG BANG?","El Big Bang es el nombre que recibe el modelo científico que describe el comienzo de la expansión del universo hace aproximadamente 13.800 millones de años. Según esta teoría, toda la materia y la energía que actualmente forman el universo se encontraban en un estado extremadamente caliente y denso. A partir de ese momento, el espacio comenzó a expandirse y las condiciones fueron cambiando progresivamente. Es importante comprender que no fue una explosión que ocurrió en un lugar determinado, sino un proceso que involucró la expansión del propio espacio. Esta teoría constituye la principal explicación científica sobre la evolución temprana del universo y está respaldada por numerosas observaciones astronómicas.");
                createInfo("R","./assets/img/C-MU2-2.png","LOS PRIMEROS INSTANTES DEL UNIVERSO","Durante sus primeros instantes, el universo atravesó una etapa de temperaturas y densidades extraordinariamente elevadas. Las condiciones eran tan extremas que no podían existir átomos, estrellas ni planetas como los conocemos actualmente. La materia y la energía se encontraban en formas muy diferentes a las actuales, mientras el espacio continuaba expandiéndose y enfriándose. En una etapa muy temprana pudo producirse un proceso conocido como inflación cósmica, durante el cual el universo habría experimentado una expansión extremadamente rápida. Aunque todavía se investigan muchos detalles de este período, comprenderlo es fundamental para explicar cómo se originaron las estructuras que actualmente observamos en el cosmos.");
                createInfo("L","./assets/img/C-MU2-3.png","LA FORMACIÓN DE LOS PRIMEROS ÁTOMOS","A medida que el universo se expandía, su temperatura disminuyó y las partículas comenzaron a combinarse para formar estructuras más complejas. Durante los primeros minutos se produjeron principalmente núcleos de hidrógeno y helio, junto con pequeñas cantidades de otros elementos ligeros. Sin embargo, todavía era demasiado caliente para que los electrones permanecieran unidos a esos núcleos. Aproximadamente 380.000 años después del Big Bang, el universo se enfrió lo suficiente para que se formaran los primeros átomos estables. Como consecuencia, la luz pudo desplazarse libremente por el espacio. Esa radiación antigua todavía puede detectarse en la actualidad y constituye una de las evidencias más importantes del modelo del Big Bang.");
                createInfo("R","./assets/img/C-MU2-4.png","LA RADIACIÓN CÓSMICA DE FONDO","La radiación cósmica de fondo es una débil señal electromagnética que se encuentra presente en todas las direcciones del universo y representa un registro de cómo era el cosmos cuando tenía aproximadamente 380.000 años. Se originó cuando el universo se enfrió lo suficiente para permitir que la luz viajara libremente por el espacio. Con el paso de miles de millones de años, la expansión del universo estiró esa radiación hasta convertirla principalmente en microondas. Fue descubierta accidentalmente en 1965 por Arno Penzias y Robert Wilson y posteriormente estudiada mediante diferentes satélites y observatorios. Su análisis permite investigar las condiciones del universo primitivo y comprender mejor su evolución.");
                createInfo("L","./assets/img/C-MU2-5.png","LA FORMACIÓN DE LAS GALAXIAS","Después de la formación de los primeros átomos, el universo atravesó un largo período durante el cual todavía no existían estrellas ni galaxias. La gravedad comenzó a reunir lentamente las regiones donde la materia se encontraba ligeramente más concentrada, formando enormes nubes de gas y materia oscura. Con el tiempo, estas estructuras se comprimieron y dieron origen a las primeras estrellas, que posteriormente se agruparon para formar galaxias. Estos sistemas crecieron durante miles de millones de años mediante la acumulación de materia y las fusiones con otras galaxias. Gracias a este proceso surgieron las enormes estructuras cósmicas que actualmente podemos observar mediante telescopios espaciales y terrestres.");
                createInfo("R","./assets/img/C-MU2-6.png","LA EXPANSIÓN DEL UNIVERSO","Una de las características más importantes del universo es que continúa expandiéndose desde sus primeras etapas. En 1929, el astrónomo Edwin Hubble presentó observaciones que demostraban que muchas galaxias se alejan unas de otras, y que en general las galaxias más distantes presentan mayores velocidades de alejamiento debido a la expansión del espacio. Décadas después, en 1998, diferentes investigaciones descubrieron que esta expansión se está acelerando, un fenómeno que se relaciona con la existencia de una misteriosa forma de energía conocida como energía oscura. Actualmente, los científicos continúan estudiando este proceso para comprender cuál será el futuro del universo y cómo evolucionará a lo largo de miles de millones de años.");
            }
            if (iCheck == 2) {
                title = "LA MATERIA OSCURA";
                createInfo("",null,title,"La materia oscura es uno de los mayores misterios de la ciencia y representa una parte muy importante de la composición del universo. Se trata de una forma de materia que no emite, refleja ni absorbe luz, por lo que no puede observarse directamente mediante telescopios convencionales. Sin embargo, los científicos saben que existe debido a sus efectos gravitatorios sobre las estrellas, las galaxias y otras estructuras cósmicas. Según las estimaciones actuales, constituye aproximadamente el 27 % del contenido total del universo, mientras que la materia ordinaria representa cerca del 5 %. Su presencia ayuda a explicar por qué las galaxias pueden mantener su estructura y cómo se formaron las grandes agrupaciones de materia a lo largo de miles de millones de años. A pesar de los numerosos estudios realizados, todavía no se conoce con exactitud de qué está compuesta, por lo que continúa siendo uno de los grandes desafíos de la física y la astronomía.");
                createInfo("L","./assets/img/C-MU3-1.png","¿QUÉ ES LA MATERIA OSCURA?","La materia oscura es una forma de materia que no puede detectarse directamente mediante la luz ni otras formas conocidas de radiación electromagnética. A diferencia de las estrellas, los planetas y las nubes de gas, no brilla ni refleja la luz que recibe. Sin embargo, posee masa y ejerce gravedad, por lo que puede influir en el movimiento de los cuerpos celestes y en la distribución de las galaxias. Los científicos utilizan diferentes observaciones astronómicas para estudiar sus efectos y calcular aproximadamente cuánta materia oscura existe en el universo. Aunque todavía se desconoce su composición, las investigaciones indican que es fundamental para comprender la estructura y evolución del cosmos.");
                createInfo("R","./assets/img/C-MU3-2.png","¿CÓMO SE DESCUBRIÓ SU EXISTENCIA?","Uno de los primeros científicos que aportó evidencias importantes sobre la materia oscura fue el astrónomo suizo Fritz Zwicky, quien en 1933 estudió el movimiento de las galaxias dentro del cúmulo de Coma. Observó que estas se desplazaban a velocidades demasiado elevadas para permanecer agrupadas únicamente mediante la gravedad de la materia visible. Décadas después, durante la década de 1970, la astrónoma Vera Rubin y otros investigadores encontraron resultados similares al estudiar la velocidad de rotación de diferentes galaxias. Sus observaciones demostraron que existía una cantidad de masa invisible mucho mayor de la que podía detectarse mediante telescopios. Estos descubrimientos ayudaron a establecer la materia oscura como una explicación fundamental para comprender el comportamiento de las estructuras cósmicas.");
                createInfo("L","./assets/img/C-MU3-3.png","SU INFLUENCIA EN LAS GALAXIAS","La materia oscura desempeña un papel fundamental en la estructura y el movimiento de las galaxias. Su gravedad contribuye a mantener unidas enormes cantidades de estrellas, gas y polvo, evitando que muchas de estas estructuras se dispersen debido a sus velocidades de movimiento. Los científicos han descubierto que las estrellas ubicadas en las regiones exteriores de numerosas galaxias se desplazan mucho más rápido de lo que permitiría explicar la materia visible por sí sola. Esto indica que existe una gran cantidad de masa invisible distribuida alrededor de ellas. Se cree que las galaxias se encuentran rodeadas por enormes regiones de materia oscura, conocidas como halos, que influyen en su formación, evolución y comportamiento a lo largo del tiempo.");
                createInfo("R","./assets/img/C-MU3-1.png","LOS HALOS DE MATERIA OSCURA","Los halos de materia oscura son enormes estructuras invisibles que rodean a las galaxias y se extienden mucho más allá de las regiones donde se encuentran sus estrellas y planetas. Aunque no pueden observarse directamente, los científicos pueden estudiar su distribución mediante los efectos gravitatorios que producen sobre la materia visible y la luz procedente de objetos lejanos. Estos halos contienen gran parte de la masa de las galaxias y desempeñan un papel importante en su formación y evolución. Según los modelos cosmológicos actuales, la materia oscura comenzó a agruparse bajo la influencia de la gravedad, creando regiones que posteriormente favorecieron la concentración de gas y la formación de estrellas. De esta manera, contribuyó al desarrollo de las grandes estructuras que observamos en el universo.");
                createInfo("L","./assets/img/C-MU3-4.png","¿CÓMO SE INVESTIGA LA MATERIA OSCURA?","Aunque todavía no se ha conseguido observar directamente una partícula de materia oscura, los científicos utilizan diferentes métodos para investigar sus propiedades. Uno de los más importantes es la observación de las curvas de rotación de las galaxias, que permite estudiar cómo se distribuye la masa en su interior. También se utiliza un fenómeno conocido como lente gravitacional, mediante el cual la gravedad de una concentración de materia desvía la luz procedente de objetos más lejanos. Además, existen experimentos subterráneos diseñados para intentar detectar posibles interacciones entre partículas de materia oscura y la materia ordinaria. Estas investigaciones combinan observaciones astronómicas, experimentos físicos y simulaciones informáticas para intentar resolver uno de los mayores enigmas del universo.");
                createInfo("R","./assets/img/C-MU3-5.png","EL FUTURO DE SU INVESTIGACIÓN","La materia oscura continúa siendo uno de los principales desafíos de la astronomía y la física moderna. Actualmente, diferentes equipos científicos utilizan telescopios espaciales, observatorios terrestres y detectores especializados para intentar descubrir de qué está compuesta. Entre las posibilidades investigadas se encuentran partículas hipotéticas que interactuarían muy débilmente con la materia ordinaria. También se realizan simulaciones informáticas para estudiar cómo habría influido en la formación de las galaxias y en la evolución del universo. Nuevos observatorios, como el telescopio espacial Euclid de la Agencia Espacial Europea, permiten elaborar mapas de la distribución de materia oscura a grandes escalas. Cada nuevo descubrimiento ayuda a comprender mejor la composición del cosmos y podría transformar nuestros conocimientos sobre la naturaleza del universo.");
            }
            if (iCheck == 3) {
                title = "LA VIDA EXTRATERRESTRE";
                createInfo("",null,title,"La posibilidad de que exista vida fuera de la Tierra es uno de los mayores interrogantes de la astronomía y la ciencia moderna. Durante décadas, los científicos han investigado diferentes planetas, lunas y sistemas estelares en busca de organismos que puedan habitar otros lugares del universo. Aunque todavía no se ha encontrado evidencia confirmada de vida extraterrestre, existen numerosos ambientes que podrían reunir algunas de las condiciones necesarias para su desarrollo, como la presencia de agua líquida, sustancias químicas y fuentes de energía. Marte, Europa y Encélado son algunos de los lugares más estudiados dentro de nuestro sistema solar, mientras que los telescopios espaciales permiten analizar planetas que orbitan alrededor de otras estrellas. Estas investigaciones forman parte de la astrobiología, una disciplina que busca comprender cómo surge la vida y si podría existir en otros rincones del cosmos.");
                createInfo("L","./assets/img/C-MU4-1.png","¿QUÉ ES LA VIDA EXTRATERRESTRE?","La vida extraterrestre es cualquier forma de vida que pudiera existir fuera de nuestro planeta, ya sea en otros cuerpos del sistema solar o en mundos que orbitan estrellas lejanas. No necesariamente tendría que parecerse a los animales o plantas que conocemos en la Tierra, ya que podría desarrollarse en condiciones muy diferentes. Los científicos consideran que algunos organismos podrían ser microscópicos y vivir en ambientes extremos, como océanos subterráneos o regiones protegidas bajo superficies heladas. La astrobiología estudia estas posibilidades mediante investigaciones sobre el origen de la vida, los ambientes habitables y las señales que podrían indicar actividad biológica. Hasta el momento no se ha confirmado ningún descubrimiento de vida fuera de la Tierra, pero la búsqueda continúa.");
                createInfo("R","./assets/img/C-MU4-2.png","LA BÚSQUEDA DE VIDA EN MARTE","Marte es uno de los principales objetivos en la búsqueda de vida extraterrestre debido a que, hace miles de millones de años, pudo haber tenido ríos, lagos y condiciones ambientales más favorables que las actuales. Las misiones espaciales han encontrado evidencias de antiguos ambientes acuáticos y minerales que se formaron en presencia de agua. Actualmente, vehículos exploradores como Curiosity y Perseverance analizan rocas, sedimentos y muestras del suelo marciano para investigar si alguna vez existieron microorganismos. También se estudian regiones subterráneas, donde podrían conservarse mejor algunas señales de actividad biológica antigua. Aunque todavía no se ha encontrado una prueba definitiva, Marte continúa siendo uno de los lugares más importantes para investigar si la vida pudo desarrollarse fuera de nuestro planeta.");
                createInfo("L","./assets/img/C-MU4-3.png","EUROPA: UN OCÉANO BAJO EL HIELO","Europa es una de las lunas más interesantes de Júpiter para la investigación astrobiológica. Su superficie está cubierta por una gruesa capa de hielo y diferentes observaciones indican que debajo de ella podría existir un enorme océano de agua líquida. Este ambiente resulta especialmente interesante porque el agua es uno de los ingredientes fundamentales para la vida tal como la conocemos. Además, las interacciones entre el océano y el interior rocoso de la luna podrían proporcionar sustancias químicas y energía aprovechables por posibles microorganismos. La misión Europa Clipper de la NASA estudia esta luna mediante numerosos sobrevuelos y diferentes instrumentos científicos. Su objetivo es investigar si Europa posee condiciones adecuadas para albergar vida, aunque no está diseñada para detectar directamente organismos vivos.");
                createInfo("R","./assets/img/C-MU4-4.png","ENCÉLADO Y SUS GEISERES","Encélado es una pequeña luna de Saturno que despertó un gran interés científico después de que la misión Cassini descubriera enormes chorros de vapor de agua y partículas de hielo que salen expulsados desde su superficie. Estas emisiones indican la posible existencia de un océano de agua líquida debajo de su corteza helada. Los análisis realizados por Cassini también detectaron sustancias químicas y compuestos orgánicos en el material expulsado, además de indicios de actividad hidrotermal en su interior. Estas características hacen que Encélado sea considerado uno de los lugares más prometedores para buscar ambientes habitables fuera de la Tierra. Sin embargo, encontrar agua y compuestos orgánicos no significa que exista vida, por lo que todavía se necesitan nuevas investigaciones para comprobarlo.");
                createInfo("L","./assets/img/C-MU4-5.png","LOS EXOPLANETAS Y LAS ZONAS HABITABLES","Los exoplanetas son planetas que orbitan alrededor de estrellas diferentes al Sol. Desde el descubrimiento de los primeros ejemplares, los astrónomos han identificado miles de estos mundos y algunos presentan características que los convierten en candidatos interesantes para la búsqueda de vida. Uno de los aspectos que se estudia es si se encuentran dentro de la llamada zona habitable, una región alrededor de una estrella donde las temperaturas podrían permitir la existencia de agua líquida sobre la superficie de un planeta, siempre que también se den otras condiciones adecuadas. Los telescopios espaciales pueden analizar la luz que atraviesa las atmósferas de algunos exoplanetas para identificar gases como vapor de agua, dióxido de carbono o metano. Estas observaciones permiten investigar si ciertos mundos podrían reunir condiciones favorables para la vida.");
                createInfo("R","./assets/img/C-MU4-6.png","LA BÚSQUEDA DE SEÑALES EXTRATERRESTRES","Además de buscar microorganismos en planetas y lunas, los científicos también investigan la posibilidad de que existan civilizaciones inteligentes fuera de la Tierra. Una de las principales iniciativas relacionadas con esta búsqueda es SETI, sigla en inglés de Búsqueda de Inteligencia Extraterrestre. Sus investigaciones utilizan radiotelescopios y otros instrumentos para detectar señales que podrían tener un origen tecnológico y proceder de sistemas estelares lejanos. También se estudian posibles tecnofirmas, es decir, indicios de tecnología que podrían observarse a grandes distancias, como determinadas emisiones de radio o cambios inusuales en la luz de una estrella. Hasta el momento no se ha confirmado ninguna señal de origen extraterrestre, pero los avances tecnológicos permiten explorar cada vez más regiones del universo.");
            }
            if (iCheck == 4) {
                title = "EL TAMAÑO DEL UNIVERSO";
                createInfo("",null,title,"El universo es una inmensa extensión de espacio que contiene miles de millones de galaxias, estrellas, planetas y otros cuerpos celestes. Sus dimensiones son tan enormes que resulta difícil comprenderlas utilizando las unidades de medida que empleamos habitualmente en la Tierra. Por este motivo, los astrónomos utilizan medidas especiales, como los años luz, para calcular las distancias entre los objetos más lejanos. Aunque no se conoce el tamaño total del universo, se estima que el universo observable tiene un diámetro de aproximadamente 93.000 millones de años luz. Esta región contiene toda la materia y la luz que hemos podido observar desde nuestro planeta. Su enorme extensión y su constante expansión convierten al universo en uno de los temas más fascinantes de la astronomía.");
                createInfo("L","./assets/img/C-MU5-1.png","¿QUÉ TAN GRANDE ES EL UNIVERSO?","El universo contiene una cantidad extraordinaria de materia y estructuras cósmicas distribuidas a lo largo de distancias inmensas. Dentro de él se encuentran galaxias, cúmulos de galaxias y enormes regiones prácticamente vacías. Los científicos estiman que el universo observable tiene un diámetro cercano a los 93.000 millones de años luz, aunque esta cifra representa solamente la parte que podemos estudiar mediante la luz y otras señales que han llegado hasta nosotros. Su tamaño total podría ser mucho mayor e incluso podría ser infinito, pero todavía no existen observaciones que permitan determinarlo con certeza. Para comprender mejor sus dimensiones, los astrónomos estudian diferentes escalas, desde nuestro sistema solar hasta las estructuras más grandes conocidas.");
                createInfo("R","./assets/img/C-MU5-2.png","LOS AÑOS LUZ: CÓMO SE MIDEN LAS DISTANCIAS","Las distancias entre los cuerpos celestes son tan grandes que utilizar kilómetros puede resultar poco práctico. Por esta razón, los astrónomos emplean el año luz, una unidad que representa la distancia que recorre la luz durante un año en el vacío. Esta equivale aproximadamente a 9,46 billones de kilómetros. Por ejemplo, la luz del Sol tarda alrededor de ocho minutos en llegar a la Tierra, mientras que la luz de la estrella más cercana al sistema solar, Próxima Centauri, necesita poco más de cuatro años para alcanzarnos. Esta unidad permite expresar de una manera más sencilla las enormes distancias que existen entre las estrellas y las galaxias. También nos ayuda a comprender que observar objetos muy lejanos significa verlos tal como eran en el pasado.");
                createInfo("L","./assets/img/C-MU5-3.png","LA VÍA LÁCTEA Y SUS DIMENSIONES","La Vía Láctea es la galaxia en la que se encuentra nuestro sistema solar. Tiene una estructura espiral barrada y está formada por cientos de miles de millones de estrellas, además de planetas, nubes de gas y polvo cósmico. Su diámetro se estima en aproximadamente 100.000 años luz, una distancia tan grande que la luz necesitaría cien mil años para atravesarla de un extremo al otro. Nuestro sistema solar se encuentra en una región de uno de sus brazos espirales, conocida como el brazo de Orión, a una distancia considerable del centro galáctico. Aunque desde la Tierra podemos observar una franja luminosa en el cielo nocturno, solamente mediante telescopios y estudios astronómicos podemos comprender la verdadera extensión y estructura de nuestra galaxia.");
                createInfo("R","./assets/img/C-MU5-4.png","EL GRUPO LOCAL DE GALAXIAS","La Vía Láctea no se encuentra aislada en el espacio, sino que forma parte de una agrupación de galaxias conocida como el Grupo Local. Esta estructura reúne a decenas de galaxias que se mantienen relacionadas principalmente por la fuerza de gravedad. Entre sus integrantes más importantes se encuentran la Vía Láctea, la galaxia de Andrómeda y la galaxia del Triángulo, además de numerosas galaxias más pequeñas. Andrómeda es una de nuestras grandes galaxias vecinas y se encuentra a aproximadamente 2,5 millones de años luz de distancia. Los estudios indican que la Vía Láctea y Andrómeda se están acercando lentamente y que podrían fusionarse dentro de varios miles de millones de años. El Grupo Local forma parte de estructuras todavía mayores que reúnen enormes cantidades de galaxias.");
                createInfo("L","./assets/img/C-MU5-5.png","LOS SUPER CÚMULOS DE GALAXIAS","Las galaxias pueden agruparse en estructuras gigantescas conocidas como cúmulos y supercúmulos. Los cúmulos reúnen numerosas galaxias que permanecen vinculadas por la gravedad, mientras que los supercúmulos están formados por agrupaciones todavía mayores. La Vía Láctea pertenece al supercúmulo de Laniakea, una enorme región que incluye miles de galaxias y se extiende a lo largo de cientos de millones de años luz. Estas estructuras no se distribuyen de manera uniforme, sino que forman grandes concentraciones conectadas por filamentos de materia, dejando entre ellas enormes regiones con muy pocas galaxias. El estudio de estas agrupaciones permite comprender cómo se organiza el universo a gran escala y cómo la gravedad influye en su evolución.");
                createInfo("R","./assets/img/C-MU5-6.png","EL UNIVERSO OBSERVABLE Y SUS LÍMITES","El universo observable es la región del cosmos desde la cual la luz y otras señales han tenido tiempo suficiente para llegar hasta nosotros desde el comienzo de la historia del universo. Su diámetro se estima en unos 93.000 millones de años luz, a pesar de que el universo tiene aproximadamente 13.800 millones de años de antigüedad. Esto ocurre porque el espacio se ha expandido mientras la luz viajaba hacia la Tierra, aumentando la distancia actual de los objetos más lejanos. Los telescopios espaciales, como Hubble y James Webb, permiten observar galaxias extremadamente distantes y estudiar cómo era el universo durante sus primeras etapas. Sin embargo, existe una frontera de observación más allá de la cual no podemos recibir información. Por eso, todavía desconocemos cuánto se extiende el universo completo y qué podría existir más allá de la región observable.");
            }
        }

        if (categoria == "categoria5") {
            if (iCheck == 0) {
                title = "LAS AURORAS POLARES";
                createInfo("",null,title,"Las auroras polares son fenómenos luminosos naturales que se producen en las regiones cercanas a los polos magnéticos de la Tierra. Se manifiestan como enormes cortinas, arcos y bandas de luz que pueden presentar diferentes colores, principalmente verde, rojo, violeta y azul. Se originan cuando partículas cargadas procedentes del Sol interactúan con el campo magnético terrestre y llegan a las capas superiores de la atmósfera, donde chocan con gases como el oxígeno y el nitrógeno. Dependiendo de la energía de estas partículas y de los gases involucrados, se generan distintas tonalidades que iluminan el cielo nocturno. Las auroras pueden observarse principalmente en regiones cercanas al Ártico y la Antártida, aunque durante intensas tormentas solares también pueden aparecer en latitudes menos habituales. Estos espectáculos naturales permiten estudiar la relación entre el Sol, el campo magnético de nuestro planeta y la atmósfera.");
                createInfo("L","./assets/img/C-FE1-1.png","¿QUÉ SON LAS AURORAS POLARES?","Las auroras polares son fenómenos luminosos que aparecen en las regiones cercanas a los polos magnéticos de la Tierra. Se presentan como grandes arcos, cortinas o bandas de luz que parecen moverse y cambiar de forma en el cielo nocturno. Según el hemisferio donde se producen, reciben diferentes nombres: aurora boreal en el norte y aurora austral en el sur. Estos fenómenos se originan por la interacción entre partículas cargadas procedentes del espacio y los gases presentes en las capas superiores de la atmósfera terrestre. Aunque pueden parecer luces lejanas o reflejos, en realidad se producen a grandes alturas sobre la superficie del planeta. Las auroras son uno de los espectáculos naturales más llamativos y también representan una importante oportunidad para estudiar los efectos de la actividad solar sobre la Tierra.");
                createInfo("R","./assets/img/C-FE1-2.png","¿CÓMO SE FORMAN LAS AURORAS?","Las auroras se forman principalmente debido a la interacción entre el viento solar y el campo magnético terrestre. El Sol libera constantemente partículas cargadas eléctricamente que viajan por el espacio a grandes velocidades. Cuando estas partículas llegan a la Tierra, el campo magnético desvía gran parte de ellas, aunque algunas pueden ingresar a la atmósfera siguiendo las líneas del campo magnético hacia las regiones polares. Allí chocan con átomos y moléculas de gases como el oxígeno y el nitrógeno, transfiriéndoles energía. Cuando estos gases liberan esa energía, producen pequeños destellos luminosos que, al combinarse, forman las enormes estructuras brillantes que conocemos como auroras. La intensidad del fenómeno puede aumentar durante las tormentas solares, cuando el Sol libera grandes cantidades de partículas y energía.");
                createInfo("L","./assets/img/C-FE1-3.png","AURORA BOREAL Y AURORA AUSTRAL","Las auroras polares reciben distintos nombres dependiendo del hemisferio en el que aparecen. En el hemisferio norte se conocen como auroras boreales y pueden observarse en regiones como Alaska, Canadá, Islandia, Noruega y Finlandia. En cambio, las que se producen en el hemisferio sur reciben el nombre de auroras australes y son frecuentes en zonas cercanas a la Antártida, además de regiones del sur de Australia y Nueva Zelanda. Ambos fenómenos tienen un origen similar, ya que se producen por la interacción de partículas solares con el campo magnético y la atmósfera terrestre. Aunque suelen presentarse cerca de los polos, durante períodos de intensa actividad solar pueden extenderse hacia regiones más alejadas. Su distribución está relacionada con la forma en que el campo magnético terrestre dirige las partículas hacia las zonas polares.");
                createInfo("R","./assets/img/C-FE1-4.png","LOS COLORES DE LAS AURORAS","Los diferentes colores de las auroras dependen principalmente del tipo de gas presente en la atmósfera y de la altura a la que se producen las colisiones con las partículas solares. El color verde es el más habitual y aparece cuando las partículas energéticas interactúan con átomos de oxígeno a determinadas alturas. El rojo también puede ser producido por el oxígeno, pero generalmente se origina en regiones más elevadas de la atmósfera. Por otro lado, el nitrógeno puede generar tonalidades azules, violetas y rosadas. En ocasiones, estos colores se mezclan y forman combinaciones que hacen que las auroras parezcan tener múltiples tonalidades al mismo tiempo. La intensidad y apariencia de cada color dependen de las condiciones atmosféricas y de la energía de las partículas que llegan desde el espacio.");
                createInfo("L","./assets/img/C-FE1-5.png","¿DÓNDE SE PUEDEN OBSERVAR?","Las auroras pueden observarse principalmente en regiones cercanas a los polos magnéticos de nuestro planeta, donde las partículas cargadas tienen mayores posibilidades de ingresar a las capas superiores de la atmósfera. Para contemplar auroras boreales, algunos de los destinos más conocidos son Noruega, Islandia, Suecia, Finlandia, Canadá y Alaska. En el hemisferio sur, las auroras australes pueden observarse desde la Antártida y, en determinadas ocasiones, desde el sur de Australia, Nueva Zelanda y Tasmania. Su aparición depende de factores como la actividad solar, las condiciones meteorológicas y la oscuridad del cielo. Por esta razón, las noches despejadas y alejadas de la contaminación lumínica ofrecen mejores oportunidades para observarlas. Durante las tormentas geomagnéticas más intensas, las auroras pueden extenderse mucho más allá de sus regiones habituales.");
                createInfo("R","./assets/img/C-FE1-6.png","LAS AURORAS EN OTROS PLANETAS","Las auroras no son un fenómeno exclusivo de la Tierra, ya que también se han observado en otros planetas del sistema solar. Júpiter y Saturno presentan impresionantes emisiones aurorales cerca de sus polos, producidas por la interacción de partículas cargadas con sus campos magnéticos y atmósferas. En el caso de Júpiter, sus auroras son especialmente intensas debido a su poderoso campo magnético y a las partículas procedentes de su entorno espacial. Saturno también presenta grandes emisiones luminosas que han sido estudiadas mediante observaciones del telescopio espacial Hubble y diferentes misiones espaciales. Incluso se han detectado fenómenos aurorales en Marte, aunque su origen y comportamiento son diferentes debido a que el planeta no posee un campo magnético global como el terrestre. Estos descubrimientos demuestran que las auroras pueden producirse en diferentes mundos bajo condiciones físicas particulares.");
            }
            if (iCheck == 1) {
                title = "LOS ECLIPSES SOLARES";
                createInfo("",null,title,"Los eclipses solares son fenómenos astronómicos que ocurren cuando la Luna pasa entre el Sol y la Tierra, bloqueando total o parcialmente la luz solar que llega a determinadas regiones de nuestro planeta. Durante estos acontecimientos, el cielo puede oscurecerse durante algunos minutos y es posible observar cómo la silueta de la Luna cubre progresivamente el disco solar. Dependiendo de la posición y la distancia de la Luna respecto de la Tierra, los eclipses pueden ser totales, parciales, anulares o híbridos. Aunque parecen producirse con frecuencia, no ocurren todos los meses debido a que la órbita lunar está ligeramente inclinada con respecto al plano en el que la Tierra gira alrededor del Sol. Estos fenómenos permiten estudiar diferentes características del Sol y ofrecen algunos de los espectáculos naturales más impresionantes que pueden observarse desde nuestro planeta.");
                createInfo("L","./assets/img/C-FE2-1.png","¿QUÉ ES UN ECLIPSE SOLAR?","Un eclipse solar es un fenómeno astronómico que se produce cuando la Luna se interpone entre el Sol y la Tierra, proyectando su sombra sobre una parte de nuestro planeta. Desde las regiones alcanzadas por esa sombra, el Sol parece quedar cubierto total o parcialmente durante un período determinado. Este acontecimiento solamente puede producirse durante la fase de Luna nueva, cuando nuestro satélite se encuentra entre la Tierra y el Sol. Sin embargo, no todas las lunas nuevas generan un eclipse, ya que la órbita lunar está inclinada y normalmente la Luna pasa por encima o por debajo del disco solar desde nuestra perspectiva. Cuando los tres cuerpos celestes se alinean correctamente, se produce uno de estos fenómenos que pueden transformar temporalmente la apariencia del cielo durante el día.");
                createInfo("R","./assets/img/C-FE2-2.png","¿CÓMO SE PRODUCEN LOS ECLIPSES?","Los eclipses solares se producen gracias a la alineación del Sol, la Luna y la Tierra. Cuando la Luna pasa entre nuestro planeta y el Sol, bloquea parte de la luz solar y proyecta una sombra sobre la superficie terrestre. Esta sombra posee dos regiones principales: la umbra, que es la zona más oscura donde el Sol puede quedar completamente oculto, y la penumbra, una región más extensa donde solamente se cubre una parte del disco solar. A medida que la Luna continúa desplazándose por su órbita, la sombra también se mueve sobre la Tierra, haciendo que el eclipse sea visible desde diferentes lugares durante un tiempo limitado. La distancia entre la Luna y nuestro planeta influye directamente en la apariencia del fenómeno y determina qué tipo de eclipse puede observarse.");
                createInfo("L","./assets/img/C-FE2-3.png","LOS ECLIPSES SOLARES TOTALES","Un eclipse solar total ocurre cuando la Luna cubre completamente el disco visible del Sol desde la perspectiva de los observadores ubicados dentro de la región más oscura de su sombra. Durante unos minutos, el cielo puede oscurecerse considerablemente y la temperatura del ambiente puede disminuir ligeramente. Uno de los aspectos más impresionantes de este fenómeno es la posibilidad de observar la corona solar, una extensa atmósfera exterior que normalmente resulta difícil de distinguir debido al intenso brillo de la superficie del Sol. La totalidad solamente puede contemplarse desde una franja relativamente estrecha de la superficie terrestre, mientras que otras regiones cercanas experimentan un eclipse parcial. La duración de esta fase depende de las distancias y posiciones de los cuerpos involucrados, y en determinadas condiciones puede extenderse durante varios minutos.");
                createInfo("R","./assets/img/C-FE2-4.png","LOS ECLIPSES SOLARES PARCIALES Y ANULARES","Los eclipses solares parciales ocurren cuando la Luna cubre solamente una parte del disco solar, haciendo que el Sol parezca tener una forma de media luna o un sector oscuro. Este tipo de eclipse puede observarse desde regiones mucho más extensas que un eclipse total, ya que se produce dentro de la zona de penumbra lunar. Por otro lado, los eclipses anulares se producen cuando la Luna se encuentra relativamente lejos de la Tierra y parece tener un tamaño menor que el Sol. Como consecuencia, no consigue cubrirlo completamente y deja visible un brillante anillo de luz alrededor de su silueta, conocido popularmente como anillo de fuego. Aunque ambos fenómenos tienen un origen similar, su apariencia depende de la distancia entre la Luna y nuestro planeta, así como de la posición desde la que se observa.");
                createInfo("L","./assets/img/C-FE2-5.png","LOS ECLIPSES HÍBRIDOS Y SU RAREZA","Los eclipses solares híbridos son fenómenos poco frecuentes que combinan características de los eclipses totales y anulares. Durante un mismo acontecimiento, el eclipse puede observarse como anular desde algunas regiones de la Tierra y como total desde otras. Esto ocurre debido a la curvatura de nuestro planeta y a las variaciones en la distancia entre la Luna y la superficie terrestre a lo largo del recorrido de su sombra. Dependiendo de la ubicación del observador, la sombra central de la Luna puede alcanzar la superficie terrestre o quedar ligeramente por encima de ella. Esta particularidad hace que los eclipses híbridos sean especialmente interesantes para los astrónomos, ya que permiten estudiar cómo influyen las posiciones y distancias de los cuerpos celestes en la apariencia de un mismo fenómeno.");
                createInfo("R","./assets/img/C-FE2-6.png","¿CÓMO OBSERVAR UN ECLIPSE DE FORMA SEGURA?","Observar un eclipse solar puede ser una experiencia fascinante, pero es fundamental tomar precauciones para proteger la vista. Mirar directamente al Sol sin protección adecuada puede provocar lesiones oculares graves, incluso cuando se encuentra parcialmente cubierto por la Luna. Para observarlo de manera segura se deben utilizar anteojos especiales para eclipses que cumplan con la norma internacional ISO 12312-2, ya que los anteojos de sol comunes no ofrecen protección suficiente. También pueden utilizarse métodos de observación indirecta, como una cámara oscura o un proyector estenopeico. Durante un eclipse total, solamente es seguro observar directamente la corona durante el breve período en que el disco solar está completamente cubierto. En las fases parciales y anulares siempre se necesita protección solar especializada. Respetar estas recomendaciones permite disfrutar del fenómeno sin poner en riesgo la salud.");
            }
            if (iCheck == 2) {
                title = "LAS LLUVIAS DE METEOROS";
                createInfo("",null,title,"Las lluvias de meteoros son fenómenos astronómicos que ocurren cuando la Tierra atraviesa regiones del espacio que contienen pequeñas partículas de polvo y fragmentos rocosos dejados por cometas o asteroides. Al ingresar en la atmósfera terrestre a velocidades muy elevadas, estas partículas interactúan con los gases del aire y producen destellos luminosos que pueden observarse desde la superficie como estrellas fugaces. Aunque reciben el nombre de lluvias, no se trata de objetos que caen en grandes cantidades sobre el suelo, sino de numerosos meteoros que aparecen en diferentes sectores del cielo durante un período determinado. Algunas lluvias pueden observarse todos los años en fechas similares y llegar a producir decenas o incluso cientos de meteoros por hora bajo condiciones ideales. Entre las más conocidas se encuentran las Perseidas, las Gemínidas y las Leónidas, que ofrecen espectáculos naturales muy llamativos para los observadores del cielo.");
                createInfo("L","./assets/img/C-FE3-1.png","¿QUÉ SON LAS LLUVIAS DE METEOROS?","Una lluvia de meteoros es un fenómeno que se produce cuando numerosos fragmentos de polvo y pequeñas partículas espaciales ingresan en la atmósfera terrestre y generan destellos luminosos. Estos fragmentos suelen proceder de los restos que dejan los cometas y, en algunos casos, los asteroides durante sus recorridos alrededor del Sol. Cuando la Tierra atraviesa una de estas regiones de partículas, muchas de ellas ingresan en la atmósfera y producen las conocidas estrellas fugaces. Aunque parecen originarse en un mismo sector del cielo, en realidad se trata de fragmentos que viajan en trayectorias prácticamente paralelas. Las lluvias de meteoros reciben nombres relacionados con la constelación desde la que parecen provenir y pueden repetirse anualmente cuando nuestro planeta atraviesa nuevamente la misma región del espacio.");
                createInfo("R","./assets/img/C-FE3-2.png","¿CÓMO SE PRODUCEN LAS ESTRELLAS FUGACES?","Las estrellas fugaces se producen cuando pequeñas partículas espaciales ingresan en la atmósfera terrestre a velocidades que pueden superar varias decenas de kilómetros por segundo. Al desplazarse a través del aire, comprimen y calientan los gases que las rodean, generando una intensa emisión de luz que puede observarse desde la superficie. Este proceso recibe el nombre de ablación y provoca que gran parte del material se caliente y se desprenda durante su recorrido. La mayoría de los fragmentos son muy pequeños y se desintegran completamente antes de llegar al suelo. Por este motivo, las estrellas fugaces no son estrellas reales, sino fenómenos luminosos provocados por partículas que atraviesan la atmósfera. Solamente los fragmentos que sobreviven al recorrido y alcanzan la superficie terrestre reciben el nombre de meteoritos.");
                createInfo("L","./assets/img/C-FE3-3.png","EL ORIGEN DE LAS LLUVIAS DE METEOROS","La mayoría de las lluvias de meteoros se origina a partir de los restos de cometas que recorren órbitas alrededor del Sol. A medida que estos cuerpos se acercan a nuestra estrella, el calor provoca que parte de sus hielos se transforme en gas y libere pequeñas partículas de polvo y material rocoso. Con el paso del tiempo, estos fragmentos quedan distribuidos a lo largo de la órbita del cometa y forman una corriente de partículas en el espacio. Cuando la Tierra atraviesa esa región durante su movimiento alrededor del Sol, los fragmentos ingresan en la atmósfera y producen una lluvia de meteoros. Algunas lluvias también están relacionadas con asteroides, como ocurre con las Gemínidas, cuyo origen está asociado al objeto conocido como 3200 Faetón. De esta manera, estos fenómenos permiten estudiar los materiales que forman parte de pequeños cuerpos del sistema solar.");
                createInfo("R","./assets/img/C-FE3-4.png","LAS PERSEIDAS Y LAS GEMÍNIDAS","Entre las lluvias de meteoros más conocidas se encuentran las Perseidas y las Gemínidas, que pueden observarse todos los años en determinadas épocas. Las Perseidas suelen alcanzar su mayor actividad durante agosto y están relacionadas con los restos del cometa 109P/Swift-Tuttle. Se caracterizan por producir numerosos meteoros rápidos y brillantes, algunos de los cuales pueden dejar rastros luminosos durante unos instantes. Las Gemínidas, por su parte, alcanzan su máximo durante diciembre y se originan a partir de partículas asociadas al asteroide 3200 Faetón. En condiciones favorables, ambas lluvias pueden ofrecer una gran cantidad de estrellas fugaces por hora. Su intensidad varía según las condiciones de observación, la posición de la Tierra dentro de la corriente de partículas y la presencia de luz lunar.");
                createInfo("L","./assets/img/C-FE3-5.png","¿POR QUÉ PARECEN VENIR DE UNA CONSTELACIÓN?","Durante una lluvia de meteoros, los destellos luminosos parecen surgir de una misma región del cielo conocida como radiante. Esta apariencia se produce porque las partículas que forman la lluvia viajan por trayectorias prácticamente paralelas y, debido a la perspectiva desde la Tierra, parecen encontrarse en un punto común, de manera similar a las vías de un tren que parecen unirse en el horizonte. El nombre de cada lluvia suele relacionarse con la constelación en la que se encuentra su radiante. Por ejemplo, las Perseidas parecen provenir de la constelación de Perseo, mientras que las Leónidas parecen surgir de Leo. Sin embargo, los meteoros pueden aparecer en diferentes partes del cielo y no es necesario observar directamente el radiante para disfrutar del fenómeno. Esta característica permite a los astrónomos identificar y distinguir las distintas lluvias de meteoros.");
                createInfo("R","./assets/img/C-FE3-6.png","¿CÓMO OBSERVAR UNA LLUVIA DE METEOROS?","Observar una lluvia de meteoros es una actividad que no requiere telescopios ni instrumentos especiales, ya que los destellos pueden apreciarse a simple vista. Para conseguir una mejor experiencia, se recomienda buscar un lugar alejado de las ciudades y de la contaminación lumínica, donde el cielo se encuentre lo más oscuro posible. También es importante elegir una noche despejada y permitir que los ojos se adapten a la oscuridad durante aproximadamente veinte o treinta minutos. Las mejores oportunidades suelen presentarse durante las horas posteriores a la medianoche y antes del amanecer, aunque esto depende de cada lluvia. Conviene observar una región amplia del cielo en lugar de concentrarse en un único punto y tener paciencia, ya que los meteoros pueden aparecer con intervalos variables. Consultar previamente las fechas de máxima actividad permite elegir el momento más adecuado para disfrutar de estos espectáculos astronómicos.");
            }
            if (iCheck == 3) {
                title = "LAS SUPERNOVAS";
                createInfo("",null,title,"Las supernovas son explosiones estelares extremadamente energéticas que ocurren durante las etapas finales de la vida de determinadas estrellas. Estos acontecimientos pueden liberar enormes cantidades de energía y, durante un período breve, alcanzar un brillo capaz de superar al de una galaxia entera. Se producen principalmente cuando una estrella muy masiva agota el combustible de su núcleo y colapsa, o cuando una enana blanca acumula suficiente materia y experimenta una explosión termonuclear. Durante estos procesos se expulsan grandes cantidades de gas y polvo al espacio, incluyendo elementos químicos que contribuyen a la formación de nuevas estrellas y planetas. Las supernovas son fundamentales para comprender la evolución del universo, ya que transforman el material de las estrellas y enriquecen el espacio con los componentes necesarios para formar nuevos sistemas planetarios.");
                createInfo("L","./assets/img/C-FE4-1.png","¿QUÉ SON LAS SUPERNOVAS?","Una supernova es una explosión estelar de enorme intensidad que puede producirse cuando una estrella llega a una etapa final de su evolución. Durante este acontecimiento, grandes cantidades de energía y materia son liberadas al espacio, provocando un aumento extraordinario de su brillo. En algunos casos, la explosión puede llegar a superar temporalmente la luminosidad de toda la galaxia en la que se encuentra. Las supernovas no son fenómenos cotidianos: pueden pasar décadas o incluso siglos entre las explosiones que ocurren dentro de una misma galaxia. Sin embargo, los telescopios modernos permiten detectar estos acontecimientos en galaxias muy lejanas. Su estudio ayuda a los astrónomos a comprender cómo evolucionan las estrellas, cómo se distribuyen los elementos químicos y qué procesos intervienen en la transformación del universo.");
                createInfo("R","./assets/img/C-FE4-2.png","LOS PRINCIPALES TIPOS DE SUPERNOVAS","Las supernovas se clasifican principalmente según el proceso físico que provoca la explosión. Las de tipo Ia se producen cuando una enana blanca, que forma parte de un sistema de dos estrellas, acumula materia de su compañera o participa en una fusión con otra enana blanca. Este proceso desencadena una reacción termonuclear que destruye el objeto. Por otro lado, las supernovas de colapso del núcleo ocurren cuando una estrella muy masiva agota el combustible de su interior y su núcleo se derrumba bajo la fuerza de la gravedad. Dentro de este grupo se encuentran las de tipos II, Ib e Ic, que se diferencian principalmente por los elementos que pueden identificarse en la luz de la explosión. Cada clase permite estudiar distintas etapas y características de la evolución estelar.");
                createInfo("L","./assets/img/C-FE4-3.png","¿CÓMO EXPLOTA UNA ESTRELLA?","En las estrellas muy masivas, la energía se produce mediante reacciones de fusión nuclear que transforman elementos ligeros en otros más pesados. Este proceso continúa durante millones de años, hasta que el núcleo acumula hierro, cuya fusión ya no proporciona la energía necesaria para sostener a la estrella. Al perder ese equilibrio, la gravedad provoca que el núcleo colapse rápidamente. La materia que cae hacia el interior genera condiciones extremas y contribuye a producir una onda de choque que atraviesa las capas externas de la estrella. Esta onda expulsa gran parte del material hacia el espacio y da lugar a la explosión conocida como supernova. El núcleo que permanece puede convertirse en una estrella de neutrones o, si posee suficiente masa, continuar colapsando hasta formar un agujero negro.");
                createInfo("R","./assets/img/C-FE4-4.png","LA FORMACIÓN DE NUEVOS ELEMENTOS","Las supernovas cumplen un papel importante en la formación y distribución de los elementos químicos del universo. Durante la vida de una estrella, las reacciones de fusión nuclear producen elementos como el carbono, el oxígeno y otros materiales necesarios para la formación de planetas y seres vivos. Durante una explosión estelar, las temperaturas y energías alcanzadas permiten que se produzcan nuevas reacciones nucleares y se formen determinados elementos más pesados. Además, la explosión expulsa al espacio los materiales que la estrella había acumulado o creado durante su existencia. Estos elementos se mezclan con el gas y el polvo interestelar, enriqueciendo las regiones donde posteriormente pueden formarse nuevas estrellas y sistemas planetarios. De esta manera, parte de la materia que compone la Tierra y los seres vivos tiene su origen en generaciones anteriores de estrellas.");
                createInfo("L","./assets/img/C-EG1-3.png","¿QUÉ QUEDA DESPUÉS DE UNA SUPERNOVA?","Después de una supernova, gran parte del material de la estrella se expande por el espacio y forma una estructura conocida como remanente de supernova. Estas regiones pueden presentar enormes nubes de gas, polvo y partículas que se desplazan a gran velocidad, interactuando con el material que encuentran a su alrededor. En algunos casos, el núcleo de la estrella sobrevive a la explosión y se transforma en una estrella de neutrones, que puede emitir radiación de manera periódica y recibir el nombre de púlsar. Si el núcleo restante es suficientemente masivo, puede convertirse en un agujero negro. Con el paso del tiempo, los restos de la explosión se enfrían y se mezclan con el medio interestelar. Estos remanentes pueden permanecer visibles durante miles de años y son estudiados para conocer cómo se desarrollan las explosiones estelares.");
                createInfo("R","./assets/img/C-FE4-5.png","LA IMPORTANCIA DE LAS SUPERNOVAS EN EL UNIVERSO","Las supernovas son fundamentales para la evolución del universo porque permiten distribuir por el espacio los elementos químicos que se producen en las estrellas. El gas y el polvo expulsados durante las explosiones pueden incorporarse a grandes nubes interestelares que, con el tiempo, se contraen por efecto de la gravedad y dan origen a nuevas estrellas. Parte de ese material también puede formar discos alrededor de las estrellas jóvenes, donde se desarrollan planetas y otros cuerpos celestes. Además, las ondas de choque de los remanentes pueden comprimir regiones de gas y favorecer el nacimiento de nuevas estrellas en determinadas condiciones. De esta manera, las supernovas participan en un ciclo continuo de transformación de la materia: las estrellas nacen, evolucionan, liberan sus componentes y contribuyen a la formación de nuevas generaciones de sistemas estelares.");
            }
            if (iCheck == 4) {
                title = "LAS TORMENTAS SOLARES";
                createInfo("",null,title,"Las tormentas solares ocurren cuando el Sol libera grandes cantidades de energía, radiación y partículas hacia el espacio debido a su intensa actividad magnética. Estos fenómenos pueden generar llamaradas solares y eyecciones de masa coronal que, al alcanzar la Tierra, interactúan con su campo magnético. Como consecuencia, pueden producir auroras polares más intensas y afectar tecnologías como los satélites, el GPS, las comunicaciones y las redes eléctricas. Por este motivo, los científicos vigilan constantemente la actividad solar para anticipar sus posibles efectos.");
                createInfo("L","./assets/img/C-FE5-1.png","¿QUÉ SON LAS TORMENTAS SOLARES?","Una tormenta solar es un fenómeno que ocurre cuando el Sol libera repentinamente grandes cantidades de energía, partículas cargadas y material en dirección al espacio. Estas emisiones están relacionadas con la actividad magnética de nuestra estrella y pueden presentarse de diferentes maneras, como llamaradas solares, tormentas de radiación y eyecciones de masa coronal. No todas las tormentas solares afectan directamente a la Tierra, ya que sus consecuencias dependen de la dirección, la intensidad y las características de las emisiones. Cuando una de ellas alcanza nuestro planeta, puede alterar temporalmente su entorno magnético y producir una tormenta geomagnética. Estos acontecimientos forman parte del comportamiento natural del Sol y son más frecuentes durante los períodos de mayor actividad solar, que se repiten aproximadamente cada once años.");
                createInfo("R","./assets/img/C-FE5-2.png","¿CÓMO SE ORIGINAN LAS TORMENTAS SOLARES?","Las tormentas solares se originan principalmente por los cambios y las alteraciones que ocurren en los intensos campos magnéticos del Sol. Debido a que nuestra estrella está formada por plasma en constante movimiento, sus campos magnéticos pueden retorcerse, deformarse y acumular grandes cantidades de energía. Cuando estas estructuras se vuelven inestables, pueden reorganizarse mediante un proceso conocido como reconexión magnética, durante el cual se libera energía de manera repentina. Este fenómeno puede provocar llamaradas solares y expulsar grandes cantidades de partículas y material hacia el espacio. Las regiones con manchas solares suelen presentar una intensa actividad magnética y pueden convertirse en zonas donde se originan estas explosiones. La frecuencia de estos acontecimientos cambia a lo largo del ciclo solar, que dura aproximadamente once años.");
                createInfo("L","./assets/img/C-FE5-3.png","LAS LLAMARADAS SOLARES","Las llamaradas solares son explosiones repentinas de radiación electromagnética que se producen en la atmósfera del Sol cuando se libera una gran cantidad de energía magnética acumulada. Durante estos acontecimientos se emiten diferentes formas de radiación, entre ellas luz visible, radiación ultravioleta y rayos X. Algunas llamaradas pueden ser extremadamente intensas y provocar alteraciones en la ionosfera terrestre, una región de la atmósfera superior que influye en la propagación de las señales de radio. Cuando una llamarada está orientada hacia nuestro planeta, su radiación puede llegar aproximadamente en ocho minutos, debido a que viaja a la velocidad de la luz. Aunque la atmósfera terrestre nos protege de sus efectos directos sobre la superficie, las llamaradas más intensas pueden afectar las comunicaciones, los satélites y otros sistemas tecnológicos.");
                createInfo("R","./assets/img/C-FE5-4.png","LAS EYECCIONES DE MASA CORONAL","Las eyecciones de masa coronal son enormes expulsiones de plasma y campos magnéticos que se desprenden de la corona, la capa más externa de la atmósfera solar. Durante estos acontecimientos, el Sol puede liberar miles de millones de toneladas de material cargado eléctricamente que se desplazan por el espacio a velocidades muy elevadas. A diferencia de las llamaradas solares, que consisten principalmente en emisiones de radiación, las eyecciones de masa coronal transportan grandes cantidades de materia y campos magnéticos. Cuando una de estas expulsiones se dirige hacia la Tierra, puede tardar desde varias horas hasta algunos días en llegar, dependiendo de su velocidad. Si interactúa con el campo magnético terrestre en determinadas condiciones, puede desencadenar una intensa tormenta geomagnética y provocar diferentes alteraciones en nuestro planeta.");
                createInfo("L","./assets/img/C-FE5-5.png","¿QUÉ EFECTOS PRODUCEN EN LA TIERRA?","Cuando una tormenta solar intensa alcanza la Tierra, puede alterar su campo magnético y producir diferentes efectos sobre el entorno terrestre. Uno de los resultados más conocidos es la aparición de auroras polares, que pueden volverse más brillantes y extenderse hacia regiones donde normalmente no son visibles. Sin embargo, estos fenómenos también pueden afectar la tecnología moderna. Las tormentas geomagnéticas pueden generar corrientes eléctricas adicionales en las redes de distribución y provocar problemas en transformadores y otros componentes. También pueden alterar la precisión de los sistemas GPS, interferir en las comunicaciones por radio y aumentar la resistencia atmosférica que experimentan algunos satélites. A pesar de estos posibles efectos, la atmósfera y el campo magnético de la Tierra protegen a las personas que se encuentran en la superficie de la mayor parte de la radiación solar.");
                createInfo("R","./assets/img/C-FE5-6.png","¿CÓMO SE DETECTAN Y PREVIENEN SUS EFECTOS?","Los científicos utilizan satélites, telescopios y observatorios especializados para vigilar constantemente la actividad del Sol y detectar posibles tormentas solares. Estos instrumentos permiten observar las manchas solares, las llamaradas y las eyecciones de masa coronal, además de medir la velocidad y las características del viento solar. Organismos como la NASA y la NOAA utilizan esta información para estudiar el comportamiento del Sol y emitir avisos cuando existe la posibilidad de que una tormenta afecte a la Tierra. Aunque no es posible impedir que ocurran estos fenómenos naturales, sí se pueden reducir sus consecuencias mediante sistemas de alerta y medidas de protección. Las empresas eléctricas pueden preparar sus redes, los operadores pueden proteger los satélites y las misiones espaciales pueden tomar precauciones para reducir la exposición de sus equipos y astronautas a las partículas energéticas.");
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