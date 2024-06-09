import { useEffect, useState, useRef } from 'react';

// Hook personalizado para manejar la lógica del tiempo
export const useTiempo = () => {

    // Estado para almacenar el tiempo restante
    const [tiempoRestante, setTiempoRestante] = useState(60);
    const [tiempoFormateado, setTiempoFormateado] = useState('01:00');
    const [tiempoAgotado, setTiempoAgotado] = useState(false);
    const [nuevoTiempo, setNuevoTiempo] = useState(true);
    const [nombre, setNombre] = useState('');

    // Contenido para Alertas
    var contenidoPrincipal = document.getElementsByTagName("main")[0];

    // Referencia para el temporizador
    const temporizadorRef = useRef(null);

    // Efecto para iniciar el temporizador
    useEffect(() => {
        if (!nuevoTiempo) return;
        temporizadorRef.current = setInterval(() => {
            setTiempoRestante((prevTiempo) => prevTiempo - 1);
        }, 1000);
      
        return () => clearInterval(temporizadorRef.current);
    }, [nuevoTiempo]);
    
    // Efecto para actualizar el tiempo formateado
    useEffect(() => {
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;
        const tiempoFormateado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        setTiempoFormateado(tiempoFormateado);
      
        if (tiempoRestante < 0) {
            var fondoDifuminado = document.getElementById("fondoDifuminado");
            clearInterval(temporizadorRef.current);
            setTiempoAgotado(true);
            setNuevoTiempo(false);
            fondoDifuminado.style.display = "block";
            contenidoPrincipal.classList.add("opaco");
            document.getElementById("miAlerta").style.display = "block";
        }
    }, [tiempoRestante]);
    // Efecto para actualizar el tiempo formateado cuando el tiempo se agota
    useEffect(() => {
        if (tiempoAgotado) {
            setTiempoFormateado('¡Tiempo agotado!');
        }
    }, [tiempoAgotado]);

    // Función para cerrar la alerta personalizada
    const cerrarAlertaPersonalizada = () => {
        var fondoDifuminado = document.getElementById("fondoDifuminado");
        var contenidoPrincipal = document.getElementsByTagName("main")[0];
        fondoDifuminado.style.display = "none";
        contenidoPrincipal.classList.remove("opaco");
        document.getElementById("miAlerta").style.display = "none";

        //Reiniciar el tiempo
        setNuevoTiempo(true);
        clearInterval(temporizadorRef.current);
        temporizadorRef.current = null;
        setTiempoRestante(60);
        setTiempoAgotado(false);
    };
    
    // Función para cerrar la alerta personalizada de victoria
    const cerrarAlertaPersonalizadVictoria = () => {
        var fondoDifuminado = document.getElementById("fondoDifuminado");
        var contenidoPrincipal = document.getElementsByTagName("main")[0];
    
        fondoDifuminado.style.display = "none";
        contenidoPrincipal.classList.remove("opaco");
        document.getElementById("miAlerta-c").style.display = "none";
    };
    
    // Función para cerrar la alerta personalizada de respuesta incorrecta
    const cerrarAlertaPersonalizadaIncorrecta = () => {
        var fondoDifuminado = document.getElementById("fondoDifuminado");
        var contenidoPrincipal = document.getElementsByTagName("main")[0];
    
        fondoDifuminado.style.display = "none";
        contenidoPrincipal.classList.remove("opaco");
        document.getElementById("miAlertaIncorrecta").style.display = "none";
    };

    // Función para parar el tiempo
    const pararTiempo = () => {
        clearInterval(temporizadorRef.current);
    };

    // Función para manejar el cambio en el input
    const InputChange = (input) => { 
        setNombre(input.value);
    }

    // Retornar funciones y estados necesarios
    return { 
        tiempoFormateado, 
        cerrarAlertaPersonalizada, 
        cerrarAlertaPersonalizadVictoria, 
        cerrarAlertaPersonalizadaIncorrecta,
        pararTiempo,
        InputChange,
        nombre
    };
}
