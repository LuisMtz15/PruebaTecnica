import { Link } from "react-router-dom";

// Componente funcional que renderiza la vista del acertijo 2
export function Acertijo2() {
  return (
   <>
    <header>
        <div className="contenedor centrar header-titulo">
            <h1>Acertijo 2</h1>
        </div>
    </header>

    <main>
        <div className="contenido-principal contenedor">
            <div className="acertijo-texto">
                <p>En este acertijo, tendrás que desbloquear un código secreto utilizando operaciones matemáticas básicas y quizás un poco de ayuda de tu buscador favorito en internet. Este desafío pondrá a prueba tus habilidades para resolver problemas y te llevará a un pequeño viaje a través de la historia de la exploración espacial. ¿Listo para aceptar el reto? ¡Buena suerte!</p>
                <p>Para este acertijo tienes UN MINUTO.</p>
            </div>
            <div className="acertijo-inciar">
                <Link to="/main-acertijo2">
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