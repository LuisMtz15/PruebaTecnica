import { useState } from 'react';

// Hook personalizado para manejar la lógica del acertijo 1
export const useAcertijo1 = () => {

    // Estados para almacenar valores de los inputs
    const [valorA, setValorA] = useState('');
    const [valorB, setValorB] = useState('');
    const [valorC, setValorC] = useState('');
    const [valorD, setValorD] = useState('');

    // Función para manejar el cambio en los inputs
    function handleInputChange(input, setter) {
        let inputValue = input.value;
        const numericValue = inputValue.replace(/\D/g, ''); 
        setter(numericValue);
    }

    // Función para validar la respuesta del acertijo
    function validarRespuesta(pararTiempoFunc) {
        if (valorA === '4' && valorB === '3' && valorC === '1' && valorD === '0') {
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

    // Función para enviar la respuesta del acertijo a la API
    const handleSubmit = async (nombre, tiempo) => {
        console.log(nombre, tiempo);
        const data = { usuario: nombre, tiempo: tiempo };
        
        try {
            const response = await fetch('http://localhost:3000/acertijos/agregar-acertijo1', {
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

    // Retornar funciones y estados necesarios
    return {
        handleInputChange, valorA, valorB, valorC, valorD, setValorA, setValorB, setValorC, setValorD, validarRespuesta, handleSubmit
    }
}
