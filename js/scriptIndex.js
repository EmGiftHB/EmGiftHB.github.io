
// Código de prueba para verificar que el script se cargó correctamente
// $(document).ready(function () {
//     if (Cookies.get("login")) {
//         console.log("El usuario está logueado");
//         var divLogin = $("#contenedorLogin");
//         var divPrincipal = $("#contenedorPrincipal");
//         divLogin.hide();
//         divPrincipal.show();
//     } else {
//         console.log("El usuario no está logueado");
//         var divLogin = $("#contenedorLogin");
//         var divPrincipal = $("#contenedorPrincipal");
//         divLogin.show();
//         divPrincipal.hide();
//     }
// });


// Función para mostrar un mensaje de error
function mensajeError(mensaje) {
    var mensajeAlerta = $("#alerta");
    mensajeAlerta.html("<strong>¡Error!</strong> " + mensaje);
    mensajeAlerta.show();
    $("#userLog").val("");
    $("#passwordLog").val("");
    $("#userLog").focus();
    setTimeout(function () {
        mensajeAlerta.hide();
    }, 3000);
}


// Función para iniciar sesión
function login() {
    var user = $("#userLog").val();
    var pass = $("#passwordLog").val();

    if (user == "" || pass == "") {
        mensajeError("Debe ingresar un usuario y contraseña")
    } else {
        if (user == "admin" && pass == "admin") {
            console.log("Usuario logueado");
            var divLogin = $("#contenedorLogin");
            var divPrincipal = $("#contenedorPrincipal");
            divLogin.hide();
            divPrincipal.show();
            Cookies.set("login", true, { expires: 30, sameSite: 'None', secure: true });
        } else {
            mensajeError("Usuario o contraseña incorrectos")
        }
    }

}

// Función para cerrar sesión
function logout() {
    console.log("Usuario deslogueado");
    // Tu código de cierre de sesión aquí
    var divLogin = $("#contenedorLogin");
    var divPrincipal = $("#contenedorPrincipal");
    divLogin.show();
    divPrincipal.hide();
    // Borrar la cookie de login
    Cookies.remove("login");
}


// Función para redirigir a contentBook/index.html
function goBook() {
    window.location.href = "contentBook/index.html";
}

function changeDisplay(panelHeadingActivado) {
    var panelHeadingMain = $("#panel-headingMain");
    var panelHeadingBook = $("#panel-headingGift");
    if (panelHeadingActivado == "panel-headingMain") {
        // Cambiar el display del panel-headingMain a none y el del panel-headingGift a block
        panelHeadingMain.css("display", "none");
        panelHeadingBook.css("display", "block");        
    } else if (panelHeadingActivado == "panel-headingGift") {
        // Cambiar el display del panel-headingMain a block y el del panel-headingGift a none
        panelHeadingMain.css("display", "block");
        panelHeadingBook.css("display", "none");
    }
}




