import { useState } from 'react';

// Hook personalizado para manejar la lógica del acertijo 3
export const useAcertijo3 = () => {

    // Estado para almacenar valor de input
    const [valor, setValor] = useState('');

    // Función para manejar el cambio en el input
    function handleInputChange(input) {
        setValor(input.value);
    }

    // Función para enviar la respuesta del acertijo a la API
    const handleSubmit = async (nombre, tiempo) => {
        console.log(nombre, tiempo);
        const data = { usuario: nombre, tiempo: tiempo };
        
        try {
          const response = await fetch('http://localhost:3000/acertijos/agregar-acertijo3', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const responseData = await response.json();
        } catch (error) {
          console.error('Error:', error);
        }
      };

    // Función para validar la respuesta del acertijo
    function validarRespuesta(pararTiempoFunc) {
        if (valor === 'dinosaurio' || valor === 'Dinosaurio' || valor === 'DINOSAURIO') {
            var fondoDifuminado = document.getElementById("fondoDifuminado");
            var contenidoPrincipal = document.getElementsByTagName("main")[0];
            if (fondoDifuminado) {
                fondoDifuminado.style.display = "block";
            }
            if (contenidoPrincipal) {
                contenidoPrincipal.classList.add("opaco");
            }
            var miAlertaC = document.getElementById("miAlerta-c");
            if (miAlertaC) {
                miAlertaC.style.display = "block";
            }
            if (pararTiempoFunc) {
                pararTiempoFunc();
            }
        } else {
            var fondoDifuminado = document.getElementById("fondoDifuminado");
            var contenidoPrincipal = document.getElementsByTagName("main")[0];
            if (fondoDifuminado) {
                fondoDifuminado.style.display = "block";
            }
            if (contenidoPrincipal) {
                contenidoPrincipal.classList.add("opaco");
            }
            var miAlertaC = document.getElementById("miAlertaIncorrecta");
            if (miAlertaC) {
                miAlertaC.style.display = "block";
            }
        }
    }

    // Retornar valores necesarios
    return {
        handleInputChange,valor, validarRespuesta, handleSubmit
    }
}
