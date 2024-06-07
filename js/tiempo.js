
var temporizadorElemento = document.getElementById('temporizador');
var tiempoRestante = 60;

var temporizador = setInterval(function() {
    // Formatear los segundos en el formato MM:SS
    var minutos = Math.floor(tiempoRestante / 60);
    var segundos = tiempoRestante % 60;
    var tiempoFormateado = minutos.toString().padStart(2, '0') + ':' + segundos.toString().padStart(2, '0');

    // Mostrar el tiempo restante en el elemento del temporizador
    temporizadorElemento.textContent = tiempoFormateado;

    // Reducir el tiempo restante en 1 segundo
    tiempoRestante--;
    if (tiempoRestante < 0) {
        clearInterval(temporizador);
        temporizadorElemento.textContent = '¡Tiempo agotado!';
    }
}, 1000);