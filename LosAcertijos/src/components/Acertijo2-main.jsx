import { Link } from "react-router-dom";
import { useTiempo } from "../hooks/useTiempo";
import { useAcertijo2 } from "../hooks/useAcertijo2";


// Componente funcional que renderiza la vista del acertijo 2 en juego
export function Acertijo2Main() {
    // Extraer funciones y estados del hook useTiempo
    const {tiempoFormateado, cerrarAlertaPersonalizada, cerrarAlertaPersonalizadVictoria, cerrarAlertaPersonalizadaIncorrecta, pararTiempo,InputChange, nombre} = useTiempo();
    // Extraer funciones y estados del hook useAcertijo2
    const {handleInputChange, valor, validarRespuesta, handleSubmit} = useAcertijo2();

    // Función para manejar el click en el botón de la alerta personalizada
    function handleButtonClick() {
        handleSubmit(nombre, tiempoFormateado);
        cerrarAlertaPersonalizadVictoria();
    }
    return (
        <>
            <div id="fondoDifuminado" className="fondo-difuminado"></div>
    <div id="miAlerta" className="alerta-oculta">
        <div className="contenido">
            <p>El tiempo se te ha agotado<br/>¿Quieres volver a intentarlo?</p>
        <div className="cent">
            <button onClick={cerrarAlertaPersonalizada} className="bot-a">SI</button>
            <Link to="/">
                <button className="bot-a">Salir</button>
            </Link>
        </div>
        </div>
    </div>

    <div id="miAlertaIncorrecta" className="alerta-oculta">
        <div className="contenido">
            <p>El dato no es correcto</p>
            <p>Intenta de nuevo</p>
        <div className="cent">
            <button onClick={cerrarAlertaPersonalizadaIncorrecta} className="bot-a">OK</button>
        </div>
        </div>
    </div>

    <div id="miAlerta-c" className="alerta-oculta">
        <div className="contenido">
            <p>Felicidades, ¡Lo has conseguido!</p>
            <p>Danos tu nombre para ponerlo en el mural</p>
        <div className="cent-conseguido">
            <div className="textInputWrapper">
                <input placeholder="Nombre" type="text" className="textInput" value={nombre}
                    onChange={(e) => InputChange(e.target)}/>
            </div>
            <Link to="/">
                <button onClick={handleButtonClick} className="bot-a" type="submit">Enviar</button>
            </Link>
        </div>
        </div>
    </div>

    <header>
        <div className="contenido-temporizador contenedor">
            <h1 className="titulo-temporizador">Tiempo restante</h1>
            <div id="temporizador" className="temporizador">{tiempoFormateado}</div>
        </div>
    </header>

    <main>
        <div className="contenedor-acertijo contenedor">
            <div className="luna">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
            </div>
            <div className="instrucciones-acertijo-flex">
                <div className="instrucciones-acertijo ">
                    <p><span>1. </span>Piensa en el año en que el hombre llegó a la luna.</p>
                    <p><span>2. </span>Suma todos los dígitos de ese año.</p>
                    <p><span>3. </span>Multiplica el resultado por 2.</p>
                </div>
            </div>
            <div className="input">
                <div className="textInputWrapper">
                    <input placeholder="Respuesta" type="text" className="textInput" id="respuestaCodigo" value={valor}
                    onChange={(e) => handleInputChange(e.target)}/>
                </div>
            </div>
        </div>

        <div className="boton-datos contenedor">
            <button className="boton-regresar" onClick={() => validarRespuesta(pararTiempo)}>
                Enviar
            </button>
        </div>
    </main>
        </>
    )
}