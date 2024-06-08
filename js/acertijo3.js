function verificarCifrado() {
    const respuesta = document.getElementById('respuestaCifrada').value.toLowerCase();
    const palabraDescifrada = 'dinosaurio';
    const mensaje = document.getElementById('mensaje');
    console.log(palabraDescifrada);
    if (respuesta === palabraDescifrada) {
        fondoDifuminado.style.display = "block";
        contenidoPrincipal.classList.add("opaco");
        document.getElementById("miAlerta-c").style.display = "block";
        
    } else {
        fondoDifuminado.style.display = "block";
        contenidoPrincipal.classList.add("opaco");
        document.getElementById("miAlertaIncorrecta").style.display = "block";
    }
}


function cerrarAlertaPersonalizadaIncorrecta() {
    var fondoDifuminado = document.getElementById("fondoDifuminado");
    var contenidoPrincipal = document.getElementsByTagName("main")[0];

    fondoDifuminado.style.display = "none";
    contenidoPrincipal.classList.remove("opaco");
    document.getElementById("miAlertaIncorrecta").style.display = "none";
}