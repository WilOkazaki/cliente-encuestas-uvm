import { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { GlobalContext } from "../../context/GlobalContext";

// componente de la barra de navegacion superior
function NavBar({ sidebartoggle, setSidebartoggle }) {
  const { cerrarSesion, nocturno } = useContext(GlobalContext);

  const logOut = () => {
    cerrarSesion();
  };

  return (
    <Navbar
      bg={`${nocturno ? "dark" : "primary"} `}
      variant={`${nocturno ? "dark" : "primary"} `}
      className="w-100"
    >
      <Container className="d-flex justify-content-between">
        <AiOutlineMenu
          className="navbar-icon bg-primary rounded p-1"
          onClick={() => setSidebartoggle(!sidebartoggle)}
        />

        <h4 className={`${nocturno ? "text-light" : "text-dark"} `}>Sistema de Encuetas UVM</h4>

        <span
          onClick={logOut}
          className="text-decoration-none text-dark bg-primary rounded"
        >
          <BiExit className="navbar-icon" />
        </span>
      </Container>
    </Navbar>
  );
}

export default NavBar;
