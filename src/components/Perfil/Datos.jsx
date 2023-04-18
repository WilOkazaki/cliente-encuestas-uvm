import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalContext";

// funcion que muestra los datos del usuario registrado
function Datos({ usuario, validaAdmin }) {
  const { nocturno } = useContext(GlobalContext);
  return (
    <div className={`animate__animated animate__zoomIn ${nocturno ? "text-light" : "text-dark"}`}>
      <Row className="mx-5 mb-3">
        <Col sx={12} md={6}>
          <p>
            <strong>Cédula:</strong>
          </p>
          <p>{usuario.cedula}</p>
        </Col>

        <Col sx={12} md={6}>
          <p>
            <strong>Coreeo electrónico:</strong>
          </p>
          <p>{usuario.correo}</p>
        </Col>
      </Row>
      <Row className="mx-5 mb-3">
        <Col sx={12} md={6}>
          <p>
            <strong>Nombre:</strong>
          </p>
          <p>{usuario.nombre}</p>
        </Col>

        <Col sx={12} md={6}>
          <p>
            <strong>Apellido:</strong>
          </p>
          <p>{usuario.apellido}</p>
        </Col>
      </Row>

      {validaAdmin ? (
        <div className="text-center">
          <a href="/escritorio/usuarios" className="btn btn-warning">
            {" "}
            Lista de usuarios{" "}
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Datos;
