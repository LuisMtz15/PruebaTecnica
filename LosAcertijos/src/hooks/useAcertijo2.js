import { useState } from 'react';

export const useAcertijo2 = () => {
    const [valor, setValor] = useState('');

    function handleInputChange(input) {
        let inputValue = input.value;
        const numericValue = inputValue.replace(/\D/g, ''); 
        setValor(numericValue);
    }

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

    function validarRespuesta(pararTiempoFunc) {
        if (valor === '40') {
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

    return {
        handleInputChange,valor, validarRespuesta, handleSubmit
    }
}
