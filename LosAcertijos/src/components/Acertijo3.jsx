import { Link } from "react-router-dom";

// Componente funcional que renderiza la vista del acertijo 2
export function Acertijo3() {
  return (
    <>
      <header>
        <div className="contenedor centrar header-titulo">
            <h1>Acertijo 3</h1>
        </div>
    </header>

    <main>
        <div className="contenido-principal contenedor">
            <div className="acertijo-texto">
                <p>En este acertijo, recibirás cuatro pistas que te llevarán a descubrir una palabra oculta. Sin embargo, la palabra está cifrada. Tu misión es descifrarla y luego ingresar la palabra correcta en el campo proporcionado. ¡Buena suerte!</p>
                <p>Para este acertijo tienes UN MINUTO.</p>
            </div>
            <div className="acertijo-inciar">
                <Link to="/main-acertijo3">
                    <div className="button">
                        <div className="box">I</div>
                        <div className="box">N</div>
                        <div className="box">I</div>
                        <div className="box">C</div>
                        <div className="box">I</div>
                        <div className="box">A</div>
                        <div className="box">R</div>
                    </div>
                </Link>
            </div>
            <div className="acertijo-regresar">
                <Link to="/">
                    <button className="boton-regresar">
                        Regresar
                    </button>
                </Link>
            </div>
        </div>
    </main>
    </>
  );
}