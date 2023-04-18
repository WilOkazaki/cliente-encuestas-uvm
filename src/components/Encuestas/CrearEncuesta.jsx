import axios from "axios";
import { useContext, useState } from "react";
import { Col, Form, Row, FloatingLabel, Button, Alert } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { GlobalContext } from "../../context/GlobalContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// componente para crear una encuesta
function CrearEncuesta() {
  const { usuario, nocturno } = useContext(GlobalContext);
  const navigate = useNavigate();

  // estado de los datos de la encuesta a crear 
  const [datosEncuesta, setDatosEncuesta] = useState({
    nombre: "",
    descripcion: "",
    tipo: "",
    opciones: [],
  });

  const [errores, setErrores] = useState({
    estado: false,
    msg: [],
  });

  // funcion para cambiar los datos de la encuesta a crear
  const handleChange = (e) =>
    setDatosEncuesta({ ...datosEncuesta, [e.target.name]: e.target.value });

  // funciones para crear y eliminar las opciones del sistema
  const cambiaOpcion = (clave, valor) => {
    const datos = datosEncuesta.opciones;
    const datosEditados = datos.map((item, i) => {
      if (i === clave) item = valor;
      return item;
    });

    setDatosEncuesta({ ...datosEncuesta, opciones: datosEditados });
  };
  const eliminaOpcion = (clave) => {
    const datos = datosEncuesta.opciones;
    const eliminar = datos.filter((item, i) => i !== clave);

    setDatosEncuesta({ ...datosEncuesta, opciones: eliminar });
  };

  // funcion para crear la encuesta
  const handleSubmit = (e) => {
    e.preventDefault();

    let validarErrores = [];

    if (datosEncuesta.nombre.trim == "" || datosEncuesta.descripcion.trim == "")
      validarErrores.push("Debe llenar todos los campos");

    if (datosEncuesta.opciones.length < 2)
      validarErrores.push("La encuesta debe tener mas de una opcion.");

    if (validarErrores.length > 0) {
      setErrores({
        estado: true,
        msg: validarErrores,
      });

      return;
    }

    axios
      .post("http://localhost:3000/api/encuestas", datosEncuesta, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": `Bearer ${usuario.token}`,
        },
      })
      .then(function (response) {
        Swal.fire("Listo!", "Se ha creado la encuesta!", "success").then(() =>
          navigate("/escritorio/encuestas")
        );
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="mt-3 mb-5 text-center text-primary">Crear Encuesta</h1>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sx={12} lg={6}>
            <FloatingLabel label="Titulo" className="mb-3">
              <Form.Control
                type="text"
                name="nombre"
                onChange={handleChange}
                placeholder="Titulo"
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Descripción" className="mb-3">
              <Form.Control
                as="textarea"
                name="descripcion"
                onChange={handleChange}
                placeholder="Descripción"
                style={{ height: "150px", resize: "none" }}
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Tipo" className="mb-3">
              <Form.Select name="tipo" onChange={handleChange}>
                <option value="">-- Seleccione --</option>
                <option value="seleccion multiple">Opción Multiple</option>
                <option value="seleccion unica">Opción Unica</option>
              </Form.Select>
            </FloatingLabel>

            <div className="w-100 mb-3 d-flex justify-content-center">
              <Button
                variant="primary"
                className="mt-3"
                onClick={() =>
                  setDatosEncuesta({
                    ...datosEncuesta,
                    opciones: [...datosEncuesta.opciones, ""],
                  })
                }
              >
                Agregar Opción
              </Button>
            </div>
          </Col>

          <Col sx={12} lg={6}>
            {datosEncuesta.opciones.length < 1 ? (
              <h4 className={`text-center animate__animated animate__zoomIn ${nocturno ? "text-light" : "text-dark"}`}>
                Ingrese las opciones
              </h4>
            ) : (
              datosEncuesta.opciones.map((item, i) => (
                <div key={i} className="animate__animated animate__zoomIn">
                  <FloatingLabel label={`Opción ${i + 1}`} className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder={`Opción ${i + 1}`}
                      onChange={(e) => {
                        cambiaOpcion(i, e.target.value);
                      }}
                      required
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      className="elimina-opcion rounded rounded-circle"
                      onClick={() => eliminaOpcion(i)}
                    >
                      <AiOutlineClose />
                    </Button>
                  </FloatingLabel>
                </div>
              ))
            )}

            {errores.estado ? (
              <Alert
                className="animate__animated animate__bounceIn"
                variant="danger"
                onClose={() => setErrores({ estado: false, msg: [] })}
                dismissible
              >
                <strong>Error:</strong>
                <ul>
                  {errores.msg.map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </Alert>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <div className="text-center ">
          <Button variant="success" type="submit">
            Crear Encuesta
          </Button>
        </div>
      </Form>
    </>
  );
}

export default CrearEncuesta;
