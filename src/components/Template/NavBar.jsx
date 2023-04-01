import { Container, Navbar } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavBar({ sidebartoggle, setSidebartoggle }) {
  return (
    <Navbar bg="primary" variant="primary" className=" w-100">
      <Container className="d-flex justify-content-between">
        <AiOutlineMenu
          className="navbar-icon"
          onClick={() => setSidebartoggle(!sidebartoggle)}
        />

        <h4>Sistema de Encuetas UVM</h4>

        <Link to="/login" className="text-decoration-none text-dark"><BiExit className="navbar-icon" /></Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
