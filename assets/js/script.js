// script general
const rutaActual = window.location.pathname;

const homeLink = document.getElementById("home-link");
const nltLink = document.getElementById("newsletter-link");
const newsLink = document.getElementById("noticias-link")
const accountLink = document.getElementById("account-link")

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

accountLink.addEventListener('click', function (ev) {
    if (rutaActual.endsWith("cuenta.html")) {
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

    function errText(cont,text) {
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
        for (let text of errTexts) {text.remove();}

        let logins = JSON.parse(localStorage.getItem("account_logins")) || [];

        if (pos == -1) {
            let err = false;

            if (page != "login") {
                if (iUser.value.length < 1) {
                    errText(cUser,"Ingrese un usuario!!");
                } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9_]+$/.test(iUser.value)) {
                    errText(cUser,"Solo se permite letras números y guión!!");
                } else if (iUser.value.length < 4) {
                    errText(cUser,"Mínimo tiene que haber 4 caracteres!!");
                } else if (iUser.value.length > 20) {
                    errText(cUser,"El máximo es solo de 20 caracteres!!");
                } else {
                    let logId = localStorage.getItem("account_selected") || 0;
                    let exist = false;
                    for (let i = 0; i < logins.length; i++) {
                        if (logins[i].user == iUser.value) {
                            exist = true;
                            if (page == "account") {
                                if (i == logId) {exist = false;}
                            }
                        }
                    }
                    if (exist) {
                        errText(cUser,"Ese nombre de usuario ya existe!!");
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
                                if (i == logId) {exist = false;}
                            }
                        }
                    }
                    if (exist) {
                        errText(cEmail,"Ese email ya está en uso!!");
                    }
                }

                if (iPassword.value.length < 1) {
                    errText(cPassword,"Ingrese una contraseña!!");
                } else if (iPassword.value.length < 6) {
                    errText(cPassword,"Mínimo tiene que haber 6 caracteres!!");
                }

                if (iPhone.value.length < 1) {
                    errText(cPhone,"Ingrese un número!!");
                } else if (!/^[0-9]+$/.test(iPhone.value)) {
                    errText(cPhone,"Solo se permiten números!!");
                } else if (iPhone.value.length != 10) {
                    errText(cPhone,"Tienen que ser 10 numeros!!");
                } else {
                    let logId = localStorage.getItem("account_selected") || 0;
                    let exist = false;
                    for (let i = 0; i < logins.length; i++) {
                        if (logins[i].phone == iPhone.value) {
                            exist = true;
                            if (page == "account") {
                                if (i == logId) {exist = false;}
                            }
                        }
                    }
                    if (exist) {
                        errText(cPhone,"Ese número ya está en uso!!");
                    }
                }
            }else{
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
                        errText(cEmail,"Ese correo no ha sido registrado!!");
                    }
                }

                if (iUser.value.length < 1) {
                    errText(cUser,"Ingrese un usuario!!");
                } else {
                    if (log != -1 && logins[log].user != iUser.value) {
                        errText(cUser,"Usuario incorrecto!!");
                    }
                }

                if (iPassword.value.length < 1) {
                    errText(cPassword,"Ingrese una contraseña!!");
                } else {
                    if (log != -1 && logins[log].password != iPassword.value) {
                        errText(cPassword,"Contraseña incorrecta!!");
                    }
                }
            }

            errTexts = document.querySelectorAll(".errText");
            if (errTexts.length > 0) {err = true;}

            if (!err) {
                let log = {user: iUser.value, email: iEmail.value, password: iPassword.value, phone: iPhone.value};
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
            if (page == "login") {page = "register"; change(); return;}
            if (page == "register" || page == "account") {page = "login"; change(); return;}
        }
    }

    function clearData() {
        event.preventDefault();
        localStorage.setItem("account_logins", JSON.stringify([]));
    }
}
