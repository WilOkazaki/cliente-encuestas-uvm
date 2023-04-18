import axios from "axios";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useState } from "react";
import EncuestaRespondida from "./EncuestaRespondida";

// componente que muestra la lista de encuestas para ver sus resultados
function Resultados() {
  const { usuario } = useContext(GlobalContext);
  const [encuestas, setEncuestas] = useState([]);
  const [cargando, setCargando] = useState(false);

  const cargaEncuestas = () => {
    setCargando(true);
    // si el usuario es admin devuelve la lista de todas las encuestas
    // sino devuelve solo las contestadas por el usuario
		const url = usuario.rol == "usuario"
			? "http://localhost:3000/api/encuestas/encuestasRespondidas"
			: "http://localhost:3000/api/encuestas"
    axios
      .get(url, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${usuario.token}`,
        },
      })
      .then(function (response) {
        setCargando(false);
        setEncuestas(response.data);
      })
      .catch(function (error) {
        setCargando(false);
        console.log(error);
      });
  };

  useEffect(() => {
    cargaEncuestas();
  }, []);
  return (
    <>
      <h1 className="mt-3 mb-5 text-center text-primary">Resultados</h1>
      {cargando ? (
        <div className="w-100 d-flex justify-content-center mt-5 mb-3">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando</span>
          </div>
        </div>
      ) : (
        <>
          {encuestas.length < 1 ? (
            <h1>No hay encuestas para mostrar</h1>
          ) : (
            <div className="row">
              {encuestas.map((item, k) => (
                <div className="col-12 col-md-6 mb-3" key={k}>
                  <EncuestaRespondida encuesta={item} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Resultados;
