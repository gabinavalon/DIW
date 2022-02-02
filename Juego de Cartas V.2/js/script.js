let msgRight;
let msgWrong;
let msgWin;
let usuario;

$(document).ready(function () {  
    arrSrc.sort(function () { return Math.random() - 0.5 });
    usuario = prompt("Escribe tu nombre de usuario: ");
    $('#usu').html(usuario);
});

if (localStorage.getItem('ganador')) {
    let cookieganador = localStorage.getItem('ganador');   // El local storage lo dejamos igual con Jquery¿?
    setGanador(cookieganador);
}

//Array de las cartas
const arrCartas = [
    $('#carta1')[0], $('#carta2')[0], $('#carta3')[0], $('#carta4')[0], $('#carta5')[0], $('#carta6')[0],
    $('#carta7')[0], $('#carta8')[0], $('#carta9')[0], $('#carta10')[0], $('#carta11')[0], $('#carta12')[0]
];

//Array con las url de las cartas 
const arrSrc = [
    "url(img/mtg1.jpg)", "url(img/mtg2.jpg)", "url(img/mtg3.jpg)",
    "url(img/mtg4.jpg)", "url(img/mtg5.jpg)", "url(img/mtg6.jpg)",
    "url(img/mtg1.jpg)", "url(img/mtg2.jpg)", "url(img/mtg3.jpg)",
    "url(img/mtg4.jpg)", "url(img/mtg5.jpg)", "url(img/mtg6.jpg)"
];


//Variables con las que se trabajará las selecciones y puntos
let seleccion1 = '';
let seleccion2 = '';
let puntuacion = 0;
let contadorErr = 0;

//Añadir la función de dar la vuelta a la carta
//Se asigna al azar una posición del array de las URL a cada una de las cartas
for (let i = 0; i < arrCartas.length; i++) {
    const carta = arrCartas[i];
    $(carta).click(function () {
        $(this).css("background-image", arrSrc[i]);       
    });
}

/*
$.each(arrCartas, function (carta, valor) {
    console.log(carta + ' ' + valor);
});*/

arrCartas.forEach(element => { 

    $(element).click(function comparar(e) {
        if (seleccion1 == '') { 
            seleccion1 = e.target; 

        } else {
            if (seleccion1 != e.target) { 


                seleccion2 = e.target;
                if (seleccion1.style.backgroundImage === seleccion2.style.backgroundImage) {

                    seleccion1.style.visibility = 'inherit';
                    seleccion2.style.visibility = 'inherit';

                    $(seleccion1).addClass('sombreado');
                    $(seleccion2).addClass('sombreado');
                  
                    seleccion1 = '';
                    seleccion2 = '';

                    puntuacion++;

                    $('#alerts').html(msgRight);
                    $('#marcador').val(puntuacion);


                    if ($('#marcador').val() == 6) {
                        alert(msgWin + contadorErr);
                       
                        if ($('#erroresGanador').val() >= contadorErr) {

                            let usuarioErrores = (usuario + "&" + contadorErr);

                            localStorage.setItem('ganador', usuarioErrores.toString())
                        }

                        location.reload();
                    }
                } else {

                    setTimeout(() => { 

                        if (seleccion1.style.visibility == 'inherit') {
                            seleccion2.style.backgroundImage = 'url(img/dorso.jpg)';

                        } else if (seleccion2.style.visibility == 'inherit') { 

                            seleccion1.style.backgroundImage = 'url(img/dorso.jpg)';

                        } else { 
                            seleccion1.style.backgroundImage = 'url(img/dorso.jpg)';
                            seleccion2.style.backgroundImage = 'url(img/dorso.jpg)';

                        }

                        seleccion1 = '';
                        seleccion2 = '';

                        $('#alerts').html(msgWrong);                      

                        contadorErr++;

                        $('errores').val(contadorErr);

                    }, 500);

                }
            }
        }
    });
});

function setGanador(c) {
    let arrGanador = c.split('&');

    $('#erroresGanador').val(arrGanador[1]);
    $('#winner').val(arrGanador[0]);
}

if (!localStorage.getItem('idioma')) {
    idioma('ES');
}

if (localStorage.idioma == 'ES') { 
    idioma('ES');
}

if (localStorage.idioma == 'EN') {
    idioma('EN');
}

$('#btnES').click(function() { idioma('ES') });
$('#btnEN').click(function() { idioma('EN') });

function idioma(idi) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText)
            cargarJSON(myArr, idi);
        }
    };
    xhr.open("GET", "lang/lang.json", true);
    xhr.send();
}

function cargarJSON(json, idi) {
    
    var idioma = json["LANGUAGE"][idi];

    $('#score').html(idioma['SCORE']);
    $('#errors').html(idioma["ERRORS"]);
    $('#topPlayer').html(idioma["TOP"]);
    $('#topErr').html(idioma["ERRTOP"]);
    $('#language').html(idioma["LANG"]);
    $('#alerts').html(idioma['ALERTS']);

    msgRight =  idioma['RIGHT'];
    msgWrong =  idioma['WRONG'];
    msgWin =  idioma['WIN'];

    $('#desc').html(idioma['DESC']);

    localStorage.setItem('idioma', idi); 
}

