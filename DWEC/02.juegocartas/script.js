var usuario;
var msgRight;
var msgWrong;
var msgWin;

window.addEventListener('load', function () {
    arrSrc.sort(function () { return Math.random() - 0.5 });
    var nomUsuario = document.getElementById('usu');
    usuario = prompt("Escribe tu nombre de usuario: ");
    nomUsuario.innerHTML = usuario;
});



//Mensajes dinámicos
mensajes = document.getElementById('alerts');


//Ranking
var usuGanador = document.getElementById('winner');
var fallosGanador = document.getElementById('erroresGanador');

//MArcador y errores
let marcador = document.getElementById('marcador');
let errores = document.getElementById('errores');


//Si tenemos info de ganador guardada la mostramos en su respectiva tabla

if (localStorage.getItem('ganador')) {
    let cganador = localStorage.getItem('ganador');
    setGanador(cganador);
}
/*
if (getCookie('ganador')) {
    let cganador = getCookie('ganador');

    setGanador(cganador);
}*/

// Cartas HTML
let carta1 = document.getElementById('carta1');
let carta2 = document.getElementById('carta2');
let carta3 = document.getElementById('carta3');
let carta4 = document.getElementById('carta4');
let carta5 = document.getElementById('carta5');
let carta6 = document.getElementById('carta6');
let carta7 = document.getElementById('carta7');
let carta8 = document.getElementById('carta8');
let carta9 = document.getElementById('carta9');
let carta10 = document.getElementById('carta10');
let carta11 = document.getElementById('carta11');
let carta12 = document.getElementById('carta12');

//Array de las cartas
let arrCartas = [
    carta1, carta2, carta3, carta4, carta5, carta6,
    carta7, carta8, carta9, carta10, carta11, carta12
];

//Array con las url de las cartas 
let arrSrc = [
    "url(img/mtg1.jpg)", "url(img/mtg2.jpg)", "url(img/mtg3.jpg)",
    "url(img/mtg4.jpg)", "url(img/mtg5.jpg)", "url(img/mtg6.jpg)",
    "url(img/mtg1.jpg)", "url(img/mtg2.jpg)", "url(img/mtg3.jpg)",
    "url(img/mtg4.jpg)", "url(img/mtg5.jpg)", "url(img/mtg6.jpg)"
];


//Variables con las que se trabajará las selecciones y puntos
let sel1 = '';
let sel2 = '';
let puntuacion = 0;
let contadorErr = 0;

//Añadir la función de dar la vuelta a la carta
//Se asigna al azar una posición del array de las URL a cada una de las cartas
for (let i = 0; i < arrCartas.length; i++) {
    const carta = arrCartas[i];
    carta.addEventListener('click', function () {
        carta.style.backgroundImage = arrSrc[i];
    })
}

arrCartas.forEach(element => { 

    element.addEventListener('click', function comparar(e) {

        if (sel1 == '') { 
            sel1 = e.target; 

        } else {
            if (sel1 != e.target) { 


                sel2 = e.target;
                if (sel1.style.backgroundImage === sel2.style.backgroundImage) {

                    sel1.style.visibility = 'inherit';
                    sel2.style.visibility = 'inherit';
                  
                    sel1 = '';
                    sel2 = '';

                    puntuacion++;
                    mensajes.innerHTML = msgRight;
                    marcador.value = puntuacion;

                    if (marcador.value == 6) {
                        alert(msgWin + contadorErr);
                       
                        if (fallosGanador.value >= contadorErr) {

                            let usuarioErrores = (usuario + "&" + contadorErr);

                            localStorage.setItem('ganador', usuarioErrores.toString())
                        }

                        location.reload();
                    }
                } else {

                    setTimeout(() => { 

                        if (sel1.style.visibility == 'inherit') {
                            sel2.style.backgroundImage = 'url(img/dorso.jpg)';

                        } else if (sel2.style.visibility == 'inherit') { 

                            sel1.style.backgroundImage = 'url(img/dorso.jpg)';

                        } else { 
                            sel1.style.backgroundImage = 'url(img/dorso.jpg)';
                            sel2.style.backgroundImage = 'url(img/dorso.jpg)';

                        }

                        sel1 = '';
                        sel2 = '';

                        mensajes.innerHTML = msgWrong;
                       

                        contadorErr++;
                        errores.value = contadorErr;


                    }, 500);

                }
            }
        }

    })
});

function setGanador(c) {

    var arrGanador = c.split('&');
    fallosGanador.value = arrGanador[1];
    usuGanador.innerHTML = arrGanador[0];

}


let btnES = document.getElementById('btnES');
let btnEN = document.getElementById('btnEN');


if (!localStorage.getItem('idioma')) {
    idiomaES();
}

if (localStorage.idioma == 'ES') { 
    idiomaES();
}

if (localStorage.idioma == 'EN') {
    idiomaEN();
}


btnES.addEventListener('click', idiomaES);

btnEN.addEventListener('click', idiomaEN);


function idiomaES() {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cargarXMLES(this);
        }
    };
    xhr.open("GET", "idiomas/idiomas.xml", true);
    xhr.send();
}


function idiomaEN() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cargarXMLEN(this);
        }
    };
    xhr.open("GET", "idiomas/idiomas.xml", true);
    xhr.send();

}

function cargarXMLES(xml) {
    var docXML = xml.responseXML;
    var idioma = docXML.getElementsByTagName("ES"); 
    document.getElementById('score').innerHTML = idioma[0].getElementsByTagName("SCORE")[0].textContent;
    document.getElementById('errors').innerHTML = idioma[0].getElementsByTagName("ERRORS")[0].textContent;
    document.getElementById('topPlayer').innerHTML = idioma[0].getElementsByTagName("TOP")[0].textContent;
    document.getElementById('topErr').innerHTML = idioma[0].getElementsByTagName("ERRTOP")[0].textContent;
    document.getElementById('language').innerHTML = idioma[0].getElementsByTagName("LANGUAGE")[0].textContent;
    document.getElementById('alerts').innerHTML = idioma[0].getElementsByTagName("ALERTS")[0].textContent;
    
    msgRight =  idioma[0].getElementsByTagName("RIGHT")[0].textContent;
    msgWrong =  idioma[0].getElementsByTagName("WRONG")[0].textContent;
    msgWin =  idioma[0].getElementsByTagName("WIN")[0].textContent;

    localStorage.setItem('idioma', 'ES');

    cambiaDesc('es');
}

function cargarXMLEN(xml) {
    var docXML = xml.responseXML;
    var idioma = docXML.getElementsByTagName("EN"); 
    document.getElementById('score').innerHTML = idioma[0].getElementsByTagName("SCORE")[0].textContent;
    document.getElementById('errors').innerHTML = idioma[0].getElementsByTagName("ERRORS")[0].textContent;
    document.getElementById('topPlayer').innerHTML = idioma[0].getElementsByTagName("TOP")[0].textContent;
    document.getElementById('topErr').innerHTML = idioma[0].getElementsByTagName("ERRTOP")[0].textContent;
    document.getElementById('language').innerHTML = idioma[0].getElementsByTagName("LANGUAGE")[0].textContent;
    document.getElementById('alerts').innerHTML = idioma[0].getElementsByTagName("ALERTS")[0].textContent;

    msgRight =  idioma[0].getElementsByTagName("RIGHT")[0].textContent;
    msgWrong =  idioma[0].getElementsByTagName("WRONG")[0].textContent;
    msgWin =  idioma[0].getElementsByTagName("WIN")[0].textContent;

    localStorage.setItem('idioma', 'EN');

    cambiaDesc('en');
}


function cambiaDesc(idioma) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("desc").innerHTML = this.responseText;
        }
    };
    /* .open: especifica la solicitud
     - GET/POST.
     - Archivo: txt, php, xml, json, etc.
     - true/false: método de envío. */
    
    xhr.open("GET", 'idiomas/descripcion_'+idioma+'.txt', true);
    /* .send: envía la solicitud al servidor.
        Si utilizamos POST debemos pasar los datos por parámetro */
    xhr.send();
}
