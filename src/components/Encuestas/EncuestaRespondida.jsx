import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

// componente que muestra la encuesta respondida por un usuario 
// para ver sus resultados
function EncuestaRespondida({ encuesta }) {
  const { nocturno } = useContext(GlobalContext);
  return (
    <div
      className={`card h-100 ${
        nocturno ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="card-body">
        <h5 className="card-title">{encuesta.nombre}</h5>
        <p className="card-text">{encuesta.descripcion}</p>
      </div>
      <div className="card-footer">
        <div className="text-end">
          <Link
            to={`/escritorio/resultados/${encuesta._id}`}
            className="btn btn-warning"
          >
            Ver resultados
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EncuestaRespondida;
