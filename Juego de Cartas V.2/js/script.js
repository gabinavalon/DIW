let msgRight;
let msgWrong;
let msgWin;
let usuario;


$(document).ready(function () {
    arrSrc.sort(function () {
        return Math.random() - 0.5;
    });
});

if (localStorage.getItem("ganador")) {
    let cookieganador = localStorage.getItem("ganador"); // El local storage lo dejamos igual con Jquery¿?
    setGanador(cookieganador);
}

//Array de las cartas
const arrCartas = [
    $("#carta1")[0],
    $("#carta2")[0],
    $("#carta3")[0],
    $("#carta4")[0],
    $("#carta5")[0],
    $("#carta6")[0],
    $("#carta7")[0],
    $("#carta8")[0],
    $("#carta9")[0],
    $("#carta10")[0],
    $("#carta11")[0],
    $("#carta12")[0],
    $("#carta13")[0],
    $("#carta14")[0],
    $("#carta15")[0],
];

//Array con las url de las cartas
const arrSrc = [
    "url(img/mtg1.jpg)",
    "url(img/mtg2.jpg)",
    "url(img/mtg3.jpg)",
    "url(img/mtg4.jpg)",
    "url(img/mtg5.jpg)",
    "url(img/mtg6.jpg)",
    "url(img/mtg1.jpg)",
    "url(img/mtg2.jpg)",
    "url(img/mtg3.jpg)",
    "url(img/mtg4.jpg)",
    "url(img/mtg5.jpg)",
    "url(img/mtg6.jpg)",
    "url(img/mtg7.jpg)",
    "url(img/mtg7.jpg)",
    "url(img/bomba.jpg)",
];

const arrProgress = ["0%", "14.27%", "28.57%", "42.85%", "57.14%", "71.43%", "85.71%", "100%"];

let seleccion1 = "";
let seleccion2 = "";
let puntuacion = 0;
let contadorErr = 0;

$('#btnComenzar').click(function startGame() {
    $('#btnStart').css('display', 'none');
    $('#btnReplay').css('display', 'inherit');

    usuario = $('#usuario').val();
    $("#usu").html(usuario);
    //Añadir la función de dar la vuelta a la carta
    //Se asigna al azar una posición del array de las URL a cada una de las cartas

    for (let i = 0; i < arrCartas.length; i++) {
        const carta = arrCartas[i];
        $(carta).click(function () {
            $(this).css("background-image", arrSrc[i]);

            if (arrSrc[i] == "url(img/bomba.jpg)") {
                // Si se añade el fondo de bomba, añadimos el dato bomba a este elemento
                $(this).data("bomba", true); //Añadimos el DATA para que no se pueda ver cual es
            }
        });
    }

    arrCartas.forEach((element) => {
        $(element).click(function comparar(e) {
            if (seleccion1 == "") {
                seleccion1 = e.target;

                if ($(seleccion1).data("bomba")) {
                    $(".audio")[3].play();
                    $(seleccion1).removeData("bomba");
                    setTimeout(() => {
                        $(seleccion1).css("background-image", "url(img/dorso.jpg)");
                        seleccion1 = "";
                        seleccion2 = "";
                        seleccion1;
                        return reinicioBomba();
                    }, 500);
                } else {
                    $(".audio")[0].play();
                }
            } else {
                if (seleccion1 != e.target) {
                    seleccion2 = e.target;

                    if ($(seleccion2).data("bomba")) {
                        $(".audio")[3].play();
                        $(seleccion2).removeData("bomba");

                        setTimeout(() => {
                            $(seleccion1).css("background-image", "url(img/dorso.jpg)");
                            $(seleccion2).css("background-image", "url(img/dorso.jpg)");
                            seleccion1 = "";
                            seleccion2 = "";
                            seleccion1;
                            return reinicioBomba();
                        }, 500);
                    } else {
                        $(".audio")[0].play();

                        if ($(seleccion1).css("background-image") === $(seleccion2).css("background-image")) {

                            $(seleccion1).addClass("sombreado");
                            $(seleccion2).addClass("sombreado");

                            $(".audio")[1].play();

                            seleccion1 = "";
                            seleccion2 = "";

                            puntuacion++;

                            $("#alerts").html(msgRight);
                            $("#marcador").val(puntuacion);

                            cambiarProgreso(puntuacion);

                            if ($("#marcador").val() == 7) {
                                alert(msgWin + $("#errores").val());

                                if ($("#erroresGanador").val() >= $("#errores").val()) {
                                    let usuarioErrores = usuario + "&" + $("#errores").val();
                                    localStorage.setItem("ganador", usuarioErrores.toString());
                                }

                                location.reload();
                            }
                        } else {
                            setTimeout(() => {
                                if ($(seleccion1).hasClass("sombreado")) {
                                    $(seleccion2).css("background-image", "url(img/dorso.jpg)");
                                    $(".audio")[2].play();
                                } else if ($(seleccion2).hasClass("sombreado")) {
                                    $(seleccion1).css("background-image", "url(img/dorso.jpg)");
                                    $(".audio")[2].play();
                                } else {
                                    $(seleccion1).css("background-image", "url(img/dorso.jpg)");
                                    $(seleccion2).css("background-image", "url(img/dorso.jpg)");
                                    $(".audio")[2].play();
                                }

                                seleccion1 = "";
                                seleccion2 = "";

                                $("#alerts").html(msgWrong);

                                contadorErr++;

                                $("#errores").val(contadorErr);
                            }, 500);
                        }
                    }
                }
            }
        });
    });
});

$('#btnReplay').click(reinicio);


function setGanador(c) {
    let arrGanador = c.split("&");

    $("#erroresGanador").val(arrGanador[1]);
    $("#winner").html(arrGanador[0]);
}

function reinicio() {
    arrSrc.sort(function () {
        return Math.random() - 0.5;
    });


    for (let i = 0; i < arrCartas.length; i++) {
        const carta = arrCartas[i];

        $(carta).removeClass("sombredo");
        $(carta).removeClass("sombreado");
        $(carta).css("background-image", "url(img/dorso.jpg)");


        $(carta).click(function () {
            $(this).css("background-image", arrSrc[i]);

            if (arrSrc[i] == "url(img/bomba.jpg)") {
                // Si se añade el fondo de bomba, añadimos la clase bomba a este elemento
                $(this).addClass("bomba"); // Lo malo, es que se vería inspeccionando elementos PROVISIONAL
            }
        });
    } 
        contadorErr = 0;
        $("#errores").val(contadorErr);
     

    puntuacion = 0;
    cambiarProgreso(puntuacion);
    $("#marcador").val(puntuacion);

}

function reinicioBomba(){
    /*arrSrc.sort(function () {
        return Math.random() - 0.5;
    });*/


    for (let i = 0; i < arrCartas.length; i++) {
        const carta = arrCartas[i];

        $(carta).removeClass("sombredo");
        $(carta).removeClass("sombreado");
        $(carta).css("background-image", "url(img/dorso.jpg)");

/* Las cartas se quedan en el mismo sitio pero se reinicia el juego y la puntuación
        $(carta).click(function () {
            $(this).css("background-image", arrSrc[i]);

            if (arrSrc[i] == "url(img/bomba.jpg)") {
                // Si se añade el fondo de bomba, añadimos la clase bomba a este elemento
                $(this).addClass("bomba"); // Lo malo, es que se vería inspeccionando elementos PROVISIONAL
            }
        });*/
    } 

    puntuacion = 0;
    cambiarProgreso(puntuacion);
    $("#marcador").val(puntuacion);

}


function cambiarProgreso(punt) {

    $('#progress').css('width', arrProgress[punt]);
}

if (!localStorage.getItem("idioma")) {
    idioma("ES");
}

if (localStorage.idioma == "ES") {
    idioma("ES");
}

if (localStorage.idioma == "EN") {
    idioma("EN");
}

$("#btnES").click(function () {
    idioma("ES");
});
$("#btnEN").click(function () {
    idioma("EN");
});

function idioma(idi) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            cargarJSON(myArr, idi);
        }
    };
    xhr.open("GET", "lang/lang.json", true);
    xhr.send();
}

function cargarJSON(json, idi) {
    var idioma = json["LANGUAGE"][idi];

    $("#score").html(idioma["SCORE"]);
    $("#errors").html(idioma["ERRORS"]);
    $("#topPlayer").html(idioma["TOP"]);
    $("#topErr").html(idioma["ERRTOP"]);
    $("#language").html(idioma["LANG"]);
    $("#alerts").html(idioma["ALERTS"]);

    msgRight = idioma["RIGHT"];
    msgWrong = idioma["WRONG"];
    msgWin = idioma["WIN"];

    $("#desc").html(idioma["DESC"]);

    localStorage.setItem("idioma", idi);
}
