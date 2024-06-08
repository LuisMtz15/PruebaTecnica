import {useTiempo} from '../hooks/useTiempo';
import { Link } from 'react-router-dom';
import {useAcertijo1} from '../hooks/useAcertijo1';


export function AcertijoMain() {
    const {tiempoFormateado, cerrarAlertaPersonalizada, cerrarAlertaPersonalizadVictoria, cerrarAlertaPersonalizadaIncorrecta, pararTiempo,InputChange, nombre} = useTiempo();
    const {handleInputChange, valorA, valorB, valorC, valorD, setValorA, setValorB, setValorC, setValorD,validarRespuesta, handleSubmit} = useAcertijo1();

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

    <div id="miAlertaIncorrecta" className="alerta-oculta">
        <div className="contenido">
            <p>El dato no es correcto</p>
            <p>Intenta de nuevo</p>
        <div className="cent">
            <button onClick={cerrarAlertaPersonalizadaIncorrecta} className="bot-a">OK</button>
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
        <div className="operacion-principal contenedor-operacion">
            <div className="contexto-operacion">
                ¿Si A es menor a 5...¿Cuál es el valor de A,B,C y D?
            </div>
            <div className="operacion">
                <div className="columna">
                    <div className="valor-blanco"></div>
                    <div className="valor-letra">A</div>
                    <div className="valor">5</div>
                    <div className="valor">7</div>
                </div>
                <div className="columna">
                    <div className="valor">+</div>
                    <div className="valor">2</div>
                    <div className="valor-letra">B</div>
                    <div className="valor">4</div>
                </div>
                <div className="columna">
                    <div className="valor-blanco"></div>
                    <div className="valor-letra">B</div>
                    <div className="valor">6</div>
                    <div className="valor-letra">C</div>
                </div>
                <div className="linea-operacion"></div>
                <div className="columna">
                    <div className="valor-letra">C</div>
                    <div className="valor-letra">D</div>
                    <div className="valor">5</div>
                    <div className="valor">2</div>
                </div>
            </div>
        </div>

        <div className="inputs_principal contenedor">
            <div className="input">
                <h4>Valor de A:</h4>
                <div className="textInputWrapper">
                    <input placeholder="Valor A" type="text" className="textInput" value={valorA}
                    onChange={(e) => handleInputChange(e.target, setValorA)} />
                </div>
            </div>
    
            <div className="input">
                <h4>Valor de B:</h4>
                <div className="textInputWrapper">
                    <input placeholder="Valor B" type="text" className="textInput" value={valorB}
                    onChange={(e) => handleInputChange(e.target, setValorB)}/>
                </div>
            </div>
    
            <div className="input">
                <h4>Valor de C:</h4>
                <div className="textInputWrapper">
                    <input placeholder="Valor C" type="text" className="textInput" value={valorC}
                    onChange={(e) => handleInputChange(e.target, setValorC)}/>
                </div>
            </div>
    
            <div className="input">
                <h4>Valor de D:</h4>
                <div className="textInputWrapper">
                    <input placeholder="Valor D" type="text" className="textInput" value={valorD}
                    onChange={(e) => handleInputChange(e.target, setValorD)}/>
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