import axios from "axios";
import { useContext, useState } from "react";
import { Card, Col, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { GlobalContext } from "../../context/GlobalContext";

// componente que muestra los datos de una encuesta
function Encuesta({ encuesta, usuario, cargaEncuestas }) {
  const { nocturno } = useContext(GlobalContext);
  const [respuesta, setRespuesta] = useState([]);

  const borrar = (id) => {
    Swal.fire({
      icon: "question",
      title: "Quieres eliminar esta encuesta?",
      showDenyButton: true,
      confirmButtonText: "Si, eliminar.",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/api/encuestas/${id}`, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${usuario.token}`,
            },
          })
          .then(function () {
            Swal.fire("Listo!", "Encuesta eliminada", "success");
            cargaEncuestas();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (result.isDenied) {
        Swal.fire("La escuesta no sera eliminada", "", "info");
      }
    });
  };

  const handleChange = (e) => {
    if (encuesta.tipo === "seleccion unica") {
      setRespuesta([e.target.value]);
    } else {
      const { value, checked } = e.target;
      if (checked) {
        setRespuesta([...respuesta, value]);
      } else {
        setRespuesta(respuesta.filter((e) => e !== value));
      }
    }
  };

  const responder = (id) => {
    const data = { respuesta };

    Swal.fire({
      icon: "question",
      title: "Quieres responder esta encuesta?",
      showDenyButton: true,
      confirmButtonText: "Si, responder.",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`http://localhost:3000/api/encuestas/${id}/respuesta`, data, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${usuario.token}`,
            },
          })
          .then(function (response) {
            Swal.fire("Listo!", "Encuesta respondida", "success");
            cargaEncuestas();
            setRespuesta([])
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };

  return (
    <Col xs={12} lg={6} className="mb-3 revelar animate__animated">
      <Card className={`${nocturno ? "bg-dark text-light" : "bg-light text-dark"}`}>
        <Card.Body>
          <Card.Title className="fs-4">{encuesta.nombre}</Card.Title>
          <Card.Text>{encuesta.descripcion}</Card.Text>
          <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
            {encuesta.opciones.map((opcion, i) => (
              <Form.Check
                key={i}
                type={
                  encuesta.tipo === "seleccion unica" ? "radio" : "checkbox"
                }
                label={opcion}
                value={opcion}
                name="encuesta"
                className="mb-3"
                disabled={usuario.rol !== "usuario" ? true : false}
                onChange={handleChange}
              />
            ))}
            <div className="d-flex justify-content-end mb-2">
              {usuario.rol === "usuario" ? (
                <Button
                  variant="primary"
                  type="submit"
                  className={`d-inline-block ${
                    respuesta.length < 1 ? "disabled" : ""
                  }`}
                  onClick={() => {
                    responder(encuesta._id);
                  }}
                >
                  Responder
                </Button>
              ) : (
                <>
                  <Button
                    variant="danger"
                    type="button"
                    className="d-inline-block"
                    onClick={() => borrar(encuesta._id)}
                  >
                    Eliminar
                  </Button>
                </>
              )}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Encuesta;
