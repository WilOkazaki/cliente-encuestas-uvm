import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import {
  AiOutlinePieChart,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { RiSurveyLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import logoUVM from "../../assets/img/logo.png";
import { GlobalContext } from "../../context/GlobalContext";

// componente de la barra de avegacion lateral
function SideBar({ sidebartoggle, setSidebartoggle }) {
  const { usuario, nocturno, modoNocturno } = useContext(GlobalContext);

  return (
    <div
      className={`sidebar ${
        nocturno ? "bg-dark" : "bg-primary"
      } h-100 pt-2 d-flex flex-column align-items-center text-center animate__animated
        ${sidebartoggle ? "animate__fadeInLeft" : "animate__fadeOutLeft"}`}
    >
      <div className="w-100 text-start">
        <AiOutlineMenu
          className="navbar-icon ms-5 bg-primary rounded p-1"
          onClick={() => setSidebartoggle(!sidebartoggle)}
        />

        {nocturno ? (
          <BsFillSunFill
            className="navbar-icon ms-5 bg-primary rounded p-1"
            onClick={modoNocturno}
          />
        ) : (
          <BsFillMoonFill
            className="navbar-icon ms-5 bg-primary rounded p-1"
            onClick={modoNocturno}
          />
        )}
      </div>
      <div className="mt-5 ">
        <img
          src={logoUVM}
          alt={logoUVM}
          className="w-75 bg-light rounded rounded-circle"
        />
      </div>
      <div className="w-100 mt-3">
        <Link
          to="/escritorio/inicio"
          className={`w-100 btn ${
            nocturno ? "btn-dark text-light" : "btn-primary text-dark"
          } text-start ps-3 py-3`}
          onClick={() => setSidebartoggle(!sidebartoggle)}
        >
          <AiOutlineHome
            style={{ fontSize: "1.5rem", transform: "translateY(-4px)" }}
          />{" "}
          <strong>INICIO</strong>
        </Link>
      </div>
      <div className="w-100">
        <Link
          to="/escritorio/encuestas"
          className={`w-100 btn ${
            nocturno ? "btn-dark text-light" : "btn-primary text-dark"
          } text-start ps-3 py-3`}
          onClick={() => setSidebartoggle(!sidebartoggle)}
        >
          <RiSurveyLine
            style={{ fontSize: "1.5rem", transform: "translateY(-4px)" }}
          />{" "}
          <strong>ENCUESTAS</strong>
        </Link>
      </div>
      <div className="w-100">
        <Link
          to="/escritorio/resultados"
          className={`w-100 btn ${
            nocturno ? "btn-dark text-light" : "btn-primary text-dark"
          } text-start ps-3 py-3`}
          onClick={() => setSidebartoggle(!sidebartoggle)}
        >
          <AiOutlinePieChart
            style={{ fontSize: "1.5rem", transform: "translateY(-4px)" }}
          />{" "}
          <strong>RESULTADOS</strong>
        </Link>
      </div>
      <div className="w-100">
        <a
          href={`/escritorio/perfil/${usuario._id}`}
          className={`w-100 btn ${
            nocturno ? "btn-dark text-light" : "btn-primary text-dark"
          } text-start ps-3 py-3`}
          onClick={() => setSidebartoggle(!sidebartoggle)}
        >
          <AiOutlineUser
            style={{ fontSize: "1.5rem", transform: "translateY(-4px)" }}
          />{" "}
          <strong>PERFIL</strong>
        </a>
      </div>

      {usuario.rol == "admin" ? (
        <div className="w-100">
          <a
            href={`/escritorio/usuarios`}
            className={`w-100 btn ${
            nocturno ? "btn-dark text-light" : "btn-primary text-dark"
          } text-start ps-3 py-3`}
            onClick={() => setSidebartoggle(!sidebartoggle)}
          >
            <HiOutlineUserGroup
              style={{ fontSize: "1.5rem", transform: "translateY(-4px)" }}
            />{" "}
            <strong>USUARIOS</strong>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SideBar;
