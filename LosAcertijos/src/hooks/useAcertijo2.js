import { useState } from 'react';

// Hook personalizado para manejar la lógica del acertijo 2
export const useAcertijo2 = () => {
    // Estado para almacenar valor de input
    const [valor, setValor] = useState('');

    // Función para manejar el cambio en el input
    function handleInputChange(input) {
        let inputValue = input.value;
        const numericValue = inputValue.replace(/\D/g, ''); 
        setValor(numericValue);
    }

    // Función para enviar la respuesta del acertijo a la API
    const handleSubmit = async (nombre, tiempo) => {
        console.log(nombre, tiempo);
        const data = { usuario: nombre, tiempo: tiempo };
        
        try {
          const response = await fetch('http://localhost:3000/acertijos/agregar-acertijo2', {
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
        if (valor === '50') {
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

    // Retornar funciones y estados necesarios
    return {
        handleInputChange,valor, validarRespuesta, handleSubmit
    }
}
