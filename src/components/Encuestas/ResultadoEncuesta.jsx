import axios from "axios";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { useEffect } from "react";
import { Grafico } from "../Escritorio/Grafico";

// componente que muestra el resultado de una encuesta
function ResultadoEncuesta() {
  const { usuario, nocturno } = useContext(GlobalContext);
  const { idEncuesta } = useParams();

  const [resultados, setResultados] = useState({});
  const [cargando, setCargando] = useState(true);

  const cargaResultados = () => {
    setCargando(true);
    axios
      .get(`http://localhost:3000/api/encuestas/${idEncuesta}/resultado`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${usuario.token}`,
        },
      })
      .then(function (response) {
        setCargando(false);
        setResultados(response.data);
      })
      .catch(function (error) {
        setCargando(false);
        console.log(error);
      });
  };

  useEffect(() => {
    cargaResultados();
  }, []);

  return (
    <>
      {cargando ? (
        <div className="w-100 d-flex justify-content-center mt-5 mb-3">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando</span>
          </div>
        </div>
      ) : (
        <>
          {resultados.encuesta ? (
            <div className={`${nocturno ? "text-light" : "text-dark"}`}>
              <h1 className="mt-3 mb-5 text-center text-primary text-capitalize">
                {resultados.encuesta.nombre}
              </h1>

              <p>{resultados.encuesta.descripcion}</p>

              <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto">
                  <Grafico datos={resultados.resultado} />
                </div>
              </div>
            </div>
          ) : (
            <h1 className="mt-3 mb-5 text-center">
              No hay resultados para encuesta
            </h1>
          )}
        </>
      )}
    </>
  );
}

export default ResultadoEncuesta;
