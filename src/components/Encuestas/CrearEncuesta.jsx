import { useState } from "react";
import { Col, Form, Row, FloatingLabel, Button } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

function CrearEncuesta() {
  const [datosEncuesta, setDatosEncuesta] = useState({
    descripcion: "",
    tipo: "",
    opciones: [],
  });

  const handleChange = (e) =>
    setDatosEncuesta({ ...datosEncuesta, [e.target.name]: e.target.value });

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

	const handleSubmit = e => {
		e.preventDefault();
		console.log(datosEncuesta);
	}

  return (
    <>
      <h1 className="mt-3 mb-5 text-center text-primary">Crear Encuesta</h1>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sx={12} lg={6}>
            <FloatingLabel label="Descripción" className="mb-3">
              <Form.Control
                as="textarea"
                name="descripcion"
                onChange={handleChange}
                placeholder="Descripción"
                style={{ height: "150px" }}
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Tipo" className="mb-3">
              <Form.Select name="tipo" onChange={handleChange}>
                <option value="">-- Seleccione --</option>
                <option value="check">Opción Multiple</option>
                <option value="radio">Opción Unica</option>
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
              <h4 className="text-center animate__animated animate__zoomIn">Ingrese las opciones</h4>
            ) : (
              datosEncuesta.opciones.map((item, i) => (
                <div key={i} className="animate__animated animate__zoomIn">
                  <FloatingLabel label={`Opción ${i}`} className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder={`Opción ${i}`}
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
