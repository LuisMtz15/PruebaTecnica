import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Principal() {

  const [resultadosAcertijo1, setResultadosAcertijo1] = useState([]);
  const [resultadosAcertijo2, setResultadosAcertijo2] = useState([]);
  const [resultadosAcertijo3, setResultadosAcertijo3] = useState([]);
  const [intentos, setIntentos] = useState(0);
  const [rounds, setRounds] = useState(0);
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const maxIntentos = 40;
  const maxRounds = 1;

  useEffect(() => {
    const obtenerResultadosAcertijo1 = async () => {
      await delay(1000);
      try {
        const response = await fetch('http://localhost:3000/acertijos/acertijo1');
        if (!response.ok) {
          throw new Error('Error al obtener resultados de acertijo 1');
        }
        const data = await response.json();
        setResultadosAcertijo1(data);
      } catch (error) {
        console.error(error);
        if (intentos < maxIntentos) {
          setIntentos(prev => prev + 1);
          obtenerResultadosAcertijo1(); // Reintentar obtener resultados
        }
      }
    };

    const obtenerResultadosAcertijo2 = async () => {
      await delay(1000);
      try {
        const response = await fetch('http://localhost:3000/acertijos/acertijo2');
        if (!response.ok) {
          throw new Error('Error al obtener resultados de acertijo 2');
        }
        const data = await response.json();
        setResultadosAcertijo2(data);
      } catch (error) {
        console.error(error);
        if (intentos < maxIntentos) {
          setIntentos(prev => prev + 1);
          obtenerResultadosAcertijo2(); // Reintentar obtener resultados
        }
      }
    };

    const obtenerResultadosAcertijo3 = async () => {
      await delay(1000);
      try {
        const response = await fetch('http://localhost:3000/acertijos/acertijo3');
        if (!response.ok) {
          throw new Error('Error al obtener resultados de acertijo 3');
        }
        const data = await response.json();
        setResultadosAcertijo3(data);
      } catch (error) {
        console.error(error);
        if (intentos < maxIntentos) {
          setIntentos(prev => prev + 1);
          obtenerResultadosAcertijo3(); // Reintentar obtener resultados
        }
      }
    };

    if (rounds < maxRounds) {
      obtenerResultadosAcertijo1();
      obtenerResultadosAcertijo2();
      obtenerResultadosAcertijo3();
    }
  }, [intentos, rounds]);

  useEffect(() => {
    if (intentos >= maxIntentos && rounds < maxRounds) {
      setIntentos(0);
      setRounds(prev => prev + 1);
    }
  }, [intentos, rounds]);




  return (
    <>
    <header>
      <div className="contenedor centrar header-titulo">
          <h1>Acertijos</h1>
      </div>
  </header>

  <main>
      <div className="contenedor-acertijos contenedor">

          <div className="acertijo">
              <Link to="/acertijo1">
                  <button className="btn cube cube-hover" type="button">
                      <div className="bg-top">
                        <div className="bg-inner"></div>
                      </div>
                      <div className="bg-right">
                        <div className="bg-inner"></div>
                      </div>
                      <div className="bg">
                        <div className="bg-inner"></div>
                      </div>
                      <div className="text">Acetijo 1</div>
                    </button>
              </Link>
          </div>

          <div className="acertijo">
              <Link to="/acertijo2">
                  <button className="btn cube cube-hover" type="button">
                      <div className="bg-top">
                        <div className="bg-inner"></div>
                      </div>
                      <div className="bg-right">
                        <div className="bg-inner"></div>
                      </div>
                      <div className="bg">
                        <div className="bg-inner"></div>
                      </div>
                      <div className="text">Acertijo 2</div>
                    </button>
              </Link>
          </div>

          <div className="acertijo">
              <Link to="/acertijo3">
                  <button className="btn cube cube-hover" type="button">
                      <div className="bg-top">
                        <div className="bg-inner"></div>
                      </div>
                      <div className="bg-right">
                        <div className="bg-inner"></div>
                      </div>
                      <div className="bg">
                        <div className="bg-inner"></div>
                      </div>
                      <div className="text">Acertijo 3</div>
                    </button>
              </Link>
          </div>
      </div>

      <div className="resultados-principal contenedor">
          <div className="resultados-acertijo1">
            <div className="titulo-tabla">
              <h2>Resultados Acertijo 1</h2>
            </div>
            <table>
              <thead>
                  <tr>
                      <th>Usuario</th>
                      <th>Tiempo</th>
                  </tr>
              </thead>
              <tbody>
              {resultadosAcertijo1.map((resultado, index) => (
                  <tr key={index}>
                    <td>{resultado.usuario}</td>
                    <td>{resultado.tiempo}</td>
                  </tr>
                ))}
              </tbody>
          </table>
          </div>

          <div className="resultados-acertijo2">
            <div className="titulo-tabla">
              <h2>Resultados Acertijo 2</h2>
            </div>
            <table>
              <thead>
                  <tr>
                      <th>Usuario</th>
                      <th>Tiempo</th>
                  </tr>
              </thead>
              <tbody>
              {resultadosAcertijo2.map((resultado, index) => (
                  <tr key={index}>
                    <td>{resultado.usuario}</td>
                    <td>{resultado.tiempo}</td>
                  </tr>
                ))}
              </tbody>
          </table>
          </div>

          <div className="resultados-acertijo3">
            <div className="titulo-tabla">
              <h2>Resultados Acertijo 3</h2>
            </div>
            <table>
              <thead>
                  <tr>
                      <th>Usuario</th>
                      <th>Tiempo</th>
                  </tr>
              </thead>
              <tbody>
              {resultadosAcertijo3.map((resultado, index) => (
                  <tr key={index}>
                    <td>{resultado.usuario}</td>
                    <td>{resultado.tiempo}</td>
                  </tr>
                ))}
              </tbody>
          </table>
          </div>
      </div>
  </main>
  </>
  );
}