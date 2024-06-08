import { Link } from "react-router-dom";
import { useTiempo } from "../hooks/useTiempo";
import { useAcertijo3 } from "../hooks/useAcertijo3";

export function Acertijo3Main() {
    const {tiempoFormateado, cerrarAlertaPersonalizada, cerrarAlertaPersonalizadVictoria, cerrarAlertaPersonalizadaIncorrecta, pararTiempo,InputChange, nombre} = useTiempo();

    const {handleInputChange, valor, validarRespuesta, handleSubmit} = useAcertijo3();

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
            <div className="contenedor-cifrado">
                <p><strong>Palabra Cifrada:</strong> <span id="palabraCifrada">Ehqrvbzulr</span></p>
            </div>
            <div className="instrucciones-acertijo-flex">
                <div className="instrucciones-acertijo">
                    <p><span>1. </span>Este término, que se refiere a una clase de animales extintos, fue acuñado por <span>Sir Richard Owen</span> en 1842.</p>
                    <p><span>2. </span>Estos seres dominaban el planeta durante la era <span>Mesozoica</span>, que abarca los periodos Triásico, Jurásico y Cretácico.</p>
                    <p><span>3. </span>Se cree que un evento catastrófico ocurrido hace aproximadamente <span>66 millones</span> de años provocó su extinción masiva.</p>
                    <p><span>4. </span>La palabra oculta se compone de dos raíces <span>griegas</span>: una que significa "terrible" y otra que significa "lagarto".</p>
                </div>
            </div>
            <div className="input">
                <div className="textInputWrapper">
                    <input placeholder="Respuesta" type="text" className="textInput" id="respuestaCifrada" value={valor}
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
  );
}