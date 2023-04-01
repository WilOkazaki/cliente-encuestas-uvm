import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import {
  AiOutlinePieChart,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import logoUVM from "../../assets/img/logo.png";

function SideBar({ sidebartoggle, setSidebartoggle }) {
  return (
    <div
      className={`sidebar bg-primary h-100 pt-2 d-flex flex-column align-items-center text-center animate__animated
        ${sidebartoggle ? "animate__fadeInLeft" : "animate__fadeOutLeft"}`}
    >
      <div className="w-100 text-start">
        <AiOutlineMenu
          className="navbar-icon ms-5"
          onClick={() => setSidebartoggle(!sidebartoggle)}
        />
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
          className="w-100 btn btn-primary text-start ps-3 py-3 sidebar-item"
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
          className="w-100 btn btn-primary text-start ps-3 py-3 sidebar-item"
          onClick={() => setSidebartoggle(!sidebartoggle)}
        >
          <AiOutlinePieChart
            style={{ fontSize: "1.5rem", transform: "translateY(-4px)" }}
          />{" "}
          <strong>ENCUESTAS</strong>
        </Link>
      </div>
      <div className="w-100">
        <Link
          to="/escritorio/perfil"
          className="w-100 btn btn-primary text-start  ps-3 py-3 sidebar-item"
          onClick={() => setSidebartoggle(!sidebartoggle)}
        >
          <AiOutlineUser
            style={{ fontSize: "1.5rem", transform: "translateY(-4px)" }}
          />{" "}
          <strong>PERFIL</strong>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
