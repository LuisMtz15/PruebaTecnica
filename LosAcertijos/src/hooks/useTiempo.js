import { useEffect, useState, useRef } from 'react';

export const useTiempo = () => {

    //Tiempo
    const [tiempoRestante, setTiempoRestante] = useState(60);
    const [tiempoFormateado, setTiempoFormateado] = useState('01:00');
    const [tiempoAgotado, setTiempoAgotado] = useState(false);
    const [nuevoTiempo, setNuevoTiempo] = useState(true);
    const [nombre, setNombre] = useState('');

    //Alertas
    var contenidoPrincipal = document.getElementsByTagName("main")[0];

    const temporizadorRef = useRef(null);

    useEffect(() => {
        if (!nuevoTiempo) return;
        temporizadorRef.current = setInterval(() => {
            setTiempoRestante((prevTiempo) => prevTiempo - 1);
        }, 1000);
      
        return () => clearInterval(temporizadorRef.current);
    }, [nuevoTiempo]);
      
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
      
    useEffect(() => {
        if (tiempoAgotado) {
            setTiempoFormateado('¡Tiempo agotado!');
        }
    }, [tiempoAgotado]);

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
    
    const cerrarAlertaPersonalizadVictoria = () => {
        var fondoDifuminado = document.getElementById("fondoDifuminado");
        var contenidoPrincipal = document.getElementsByTagName("main")[0];
    
        fondoDifuminado.style.display = "none";
        contenidoPrincipal.classList.remove("opaco");
        document.getElementById("miAlerta-c").style.display = "none";
    };
    
    const cerrarAlertaPersonalizadaIncorrecta = () => {
        var fondoDifuminado = document.getElementById("fondoDifuminado");
        var contenidoPrincipal = document.getElementsByTagName("main")[0];
    
        fondoDifuminado.style.display = "none";
        contenidoPrincipal.classList.remove("opaco");
        document.getElementById("miAlertaIncorrecta").style.display = "none";
    };

    const pararTiempo = () => {
        clearInterval(temporizadorRef.current);
    };

    const InputChange = (input) => { 
        setNombre(input.value);
    }

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
