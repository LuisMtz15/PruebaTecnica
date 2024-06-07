
var temporizadorElemento = document.getElementById('temporizador');
var tiempoRestante = 4;
var contenidoPrincipal = document.getElementsByTagName("main")[0];

var temporizador = setInterval(function() {
    var minutos = Math.floor(tiempoRestante / 60);
    var segundos = tiempoRestante % 60;
    var tiempoFormateado = minutos.toString().padStart(2, '0') + ':' + segundos.toString().padStart(2, '0');

    temporizadorElemento.textContent = tiempoFormateado;

    tiempoRestante--;
    if (tiempoRestante < 0) {
        clearInterval(temporizador);
        temporizadorElemento.textContent = '¡Tiempo agotado!';
        fondoDifuminado.style.display = "block";
        contenidoPrincipal.classList.add("opaco");
        document.getElementById("miAlerta").style.display = "block";
    }
}, 1000);


function cerrarAlertaPersonalizada() {
    var fondoDifuminado = document.getElementById("fondoDifuminado");
    var contenidoPrincipal = document.getElementsByTagName("main")[0];

    fondoDifuminado.style.display = "none";
    contenidoPrincipal.classList.remove("opaco");
    document.getElementById("miAlerta").style.display = "none";
}

function cerrarAlertaPersonalizadVictoria() {
    var fondoDifuminado = document.getElementById("fondoDifuminado");
    var contenidoPrincipal = document.getElementsByTagName("main")[0];

    fondoDifuminado.style.display = "none";
    contenidoPrincipal.classList.remove("opaco");
    document.getElementById("miAlerta-c").style.display = "none";
}