
// Código de prueba para verificar que el script se cargó correctamente
$(document).ready(function () {
    if (Cookies.get("login")) {
        console.log("El usuario está logueado");
        var divLogin = $("#contenedorLogin");
        var divPrincipal = $("#contenedorPrincipal");
        divLogin.hide();
        divPrincipal.show();
    } else {
        console.log("El usuario no está logueado");
        var divLogin = $("#contenedorLogin");
        var divPrincipal = $("#contenedorPrincipal");
        divLogin.show();
        divPrincipal.hide();
    }
});


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

function giftEm(pageGiftNum) {
    var imgGift = $("#imgGiftEm");
    var txtGift = $("#txtGiftEm");
    if (pageGiftNum == 1) {
        //obtener id="contenedorMedia"
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift1.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift1.jpg");
        txtGift.html("¡Ella es una mujer muy linda! y este es su regalo de cumpleaños atrasado haha.");
    }
    else if (pageGiftNum == 2) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift2.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift2.jpg");
        txtGift.html("Cuando la conocí, no esperaba que estas cositas nos terminaran acercando tanto.");
    }
    else if (pageGiftNum == 3) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift3.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift3.jpg");
        txtGift.html("No entendía porque tomaba fotos random, pero al principio no le di importancia.");
    }
    else if (pageGiftNum == 4) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift4.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift4.jpg");
        txtGift.html("Pero me parecía divertido, así que le seguí el juego. Aunque era algo pegada haha.");
    }
    else if (pageGiftNum == 5) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift5.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift5.jpg");
        txtGift.html("Y ahora, bueno... hay barbaridades como estas haha que recuerdos.");
    }
    else if (pageGiftNum == 6) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift6.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift6.jpg");
        txtGift.html("Con el tiempo fui conociendo más de ella, y me gustaba mucho su forma de ser.");
    }
    else if (pageGiftNum == 7) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift7.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift7.jpg");
        txtGift.html("Y también me di cuenta que tenía un lado muy tierno, que me encantaba.");
    }
    else if (pageGiftNum == 8) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift8.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift8.jpg");
        txtGift.html("Y fuera de bromas, mirenla, está guapísima :3 nunca me gustó tomarme fotos, pero ahí está.");
    }
    else if (pageGiftNum == 9) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift9.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift9.jpg");
        txtGift.html("También me robaba mis cosas, en especial mi abrigo, que le quedaba enorme haha.");
    }
    else if (pageGiftNum == 10) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift10.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift10.jpg");
        txtGift.html("y tomaba fotos como estas, que pedo con el filtro, noooo hahaha.");
    }
    else if (pageGiftNum == 11) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift11.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift11.jpg");
        txtGift.html("Me sentía bien protegiéndola, y compartiendo con ella, fueron días muy divertidos.");
    }
    else if (pageGiftNum == 12) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift12.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift12.jpg");
        txtGift.html("Incluso fui a cosas que no habría pensado siquiera en ir, pero el afán era verla feliz.");
    }
    else if (pageGiftNum == 13) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift12.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift12.jpg");
        txtGift.html("Y por eso sé, que esta es la despedida... y aunque me duele, sé que es lo mejor para ella.");
    }
    else if (pageGiftNum == 14) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift12.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        // imgGift.attr("src", "img/imgGift12.jpg");
        txtGift.html("Ya que nuestro tiempo juntos ha terminado, y ya es momento que yo deje de vivir de recuerdos.");
    }
    else if (pageGiftNum == 15) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<img id="imgGiftEm" src="img/imgGift13.jpg" alt="Imagen" style="max-width: 80%; max-height: 80vh; border-radius: 10px;">');
        txtGift.html("Realmente no me arrepiento de haberme enamorado de ti, y te deseo lo mejor, en serio.");
    }
    else if (pageGiftNum == 16) {
        var contenedorMedia = $("#contenedorMedia");
        contenedorMedia.html('<video id="vidGiftEm" controls style="max-width: 80%; max-height: 80vh; border-radius: 10px;"><source src="img/vidGift1.mp4" type="video/mp4"></video>');
        txtGift.html("Y este día, aunque fue el último que fuimos verdaderamente cercanos, fue uno de los mejores, Te amo <3");
    }
}

function changeGift(direccion) {
    var pageGift = $("#pageGiftEm");
    var pageGiftNum = parseInt(pageGift.val());
    if (direccion == "prev") {
        if (pageGiftNum > 1) {
            pageGiftNum = pageGiftNum - 1;
        } else {
            pageGiftNum = 16;
        }
    } else if (direccion == "next") {
        if (pageGiftNum < 16) {
            pageGiftNum = pageGiftNum + 1;
        } else {
            pageGiftNum = 1;
        }
    }
    pageGift.val(pageGiftNum);
    giftEm(pageGiftNum);

}


function changeDisplay(panelHeadingActivado) {
    var panelHeadingMain = $("#panel-headingMain");
    var panelHeadingBook = $("#panel-headingGift");
    if (panelHeadingActivado == "panel-headingMain") {
        // Cambiar el display del panel-headingMain a none y el del panel-headingGift a block
        panelHeadingMain.css("display", "none");
        panelHeadingBook.css("display", "block");
        giftEm(1);
    } else if (panelHeadingActivado == "panel-headingGift") {
        // Cambiar el display del panel-headingMain a block y el del panel-headingGift a none
        panelHeadingMain.css("display", "block");
        panelHeadingBook.css("display", "none");
        giftEm(1);
    }
}





