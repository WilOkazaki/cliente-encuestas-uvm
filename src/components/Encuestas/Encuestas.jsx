import { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { BiPlus } from "react-icons/bi";
import { GlobalContext } from "../../context/GlobalContext";
import Encuesta from "./Encuesta";
import { Link } from "react-router-dom";
import axios from "axios";

// componente que muestra la lista de encuestas por responder
function Encuestas() {
  const { usuario } = useContext(GlobalContext);
  const [encuestas, setEncuestas] = useState([]);

  const cargaEncuestas = () => {
    axios
      .get("http://localhost:3000/api/encuestas", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${usuario.token}`,
        },
      })
      .then(function (response) {
        setEncuestas(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    cargaEncuestas();
  }, []);
  return (
    <Container>
      {usuario.rol === "admin" ? (
        <Link
          to="crear"
          style={{
            position: "fixed",
            right: "3%",
            bottom: "3%",
            zIndex: 30,
          }}
        >
          <button
            className="btn btn-primary rounded-circle"
            style={{
              width: "50px",
              height: "50px",
            }}
          >
            <BiPlus />
          </button>
        </Link>
      ) : (
        ""
      )}

      <h1 className="text-center mt-3 mb-5 text-primary">
        Lista de Encuestas{" "}
      </h1>
      <Row className="mt-3">
        {encuestas.map((item, i) => (
          <Encuesta
            encuesta={item}
            usuario={usuario}
            key={i}
            cargaEncuestas={cargaEncuestas}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Encuestas;
