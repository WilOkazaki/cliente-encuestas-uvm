import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import {
  AiOutlinePieChart,
  AiOutlineUser,
} from "react-icons/ai";
import { RiSurveyLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// componente de la pantalla de inicio
function Datos() {
  const { usuario, nocturno } = useContext(GlobalContext);
  return (
    <>
      <h1 className="mt-3 mb-5 text-center text-primary text-capitalize">
        {`Bienvenido ${usuario.nombre} ${usuario.apellido}`}
      </h1>

      <div className="row mt-3">
        <div className="col-6 col-md-4 mb-3 ">
          <Link
            to="/escritorio/encuestas"
            className={`text-decoration-none ${nocturno ? "text-light" : "text-dark"}`}
          >
            <div className={`border border-primary text-center rounded p-3 ${nocturno ? "bg-dark" : "bg-light"} item-inicio`}>
              <RiSurveyLine style={{ fontSize: "5em" }} />
              <p className="fs-4">ENCUESTAS</p>
            </div>
          </Link>
        </div>

				<div className="col-6 col-md-4 mb-3 ">
          <Link
						to="/escritorio/resultados"
            className={`text-decoration-none ${nocturno ? "text-light" : "text-dark"}`}
          >
            <div className={`border border-primary text-center rounded p-3 ${nocturno ? "bg-dark" : "bg-light"} item-inicio`}>
              <AiOutlinePieChart style={{ fontSize: "5em" }} />
              <p className="fs-4">RESULTADO</p>
            </div>
          </Link>
        </div>

				<div className="col-6 col-md-4 mb-3 ">
          <Link
            to={`/escritorio/perfil/${usuario._id}`}
            className={`text-decoration-none ${nocturno ? "text-light" : "text-dark"}`}
          >
            <div className={`border border-primary text-center rounded p-3 ${nocturno ? "bg-dark" : "bg-light"} item-inicio`}>
              <AiOutlineUser style={{ fontSize: "5em" }} />
              <p className="fs-4">PERFIL</p>
            </div>
          </Link>
        </div>


      </div>
    </>
  );
}

export default Datos;