import { Link } from 'react-router-dom';

export function Acertijo1() {
  return (
    <>
      <header>
        <div className="contenedor centrar header-titulo">
            <h1>Acertijo 1</h1>
        </div>
    </header>

    <main>
        <div className="contenido-principal contenedor">
            <div className="acertijo-texto">
                <p>Para resolver este acertijo, debes analizar cómo se suman los números en cada columna. El objetivo es identificar cómo los valores de las letras se ajustan para cumplir con las reglas de la suma. En particular, presta atención a los valores que se llevan de una columna a otra y cómo esto afecta el resultado final. Esta metodología te permitirá descubrir los valores correctos para A, B, C y D.</p>
                <p>Para este acertijo tienes UN MINUTO.</p>
                <p>MUCHA SUERTE</p>
            </div>
            <div className="acertijo-inciar">
                <Link to="/main-acertijo1">
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