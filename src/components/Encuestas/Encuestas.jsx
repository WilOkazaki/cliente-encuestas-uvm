import { useEffect, useState } from "react";
import { Container, Row, Card, Col, Form, Button } from "react-bootstrap";

function Encuestas() {
  useEffect(() => {
    function mostrar() {
      const elementos = document.querySelectorAll(".revelar");

      elementos.forEach((elemento) => {
        const altoVentana = window.innerHeight;
        const revelar = elemento.getBoundingClientRect().top;
        if (revelar < altoVentana) {
          elemento.classList.remove("opacity-0");
          elemento.classList.add("animate__bounceIn");
        }
      });
    }

    mostrar();

    window.addEventListener("scroll", mostrar);
  }, []);

  return (
    <Container>
      <h1 className="text-center mt-3 mb-5 text-primary">
        {" "}
        Lista de Encuestas{" "}
      </h1>
      <Row className="mt-3">
        <Col
          xs={12}
          lg={6}
          className="mb-3 revelar opacity-0 animate__animated"
        >
          <Card>
            <Card.Body>
              <Card.Title className="fs-4">Nueva Encuesta</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                omnis ad eos doloremque perspiciatis quibusdam eius fuga.
              </Card.Text>
              <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
                <Form.Check
                  type="radio"
                  label="Opción1"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción2"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción3"
                  name="encuesta"
                  className="mb-3"
                />

                <div className="d-flex justify-content-end mb-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-inline-block"
                  >
                    Responder
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="mb-3 revelar opacity-0 animate__animated"
        >
          <Card>
            <Card.Body>
              <Card.Title className="fs-4">Nueva Encuesta</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                omnis ad eos doloremque perspiciatis quibusdam eius fuga.
              </Card.Text>
              <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
                <Form.Check
                  type="checkbox"
                  label="Opción1"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="checkbox"
                  label="Opción2"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="checkbox"
                  label="Opción3"
                  name="encuesta"
                  className="mb-3"
                />

                <div className="d-flex justify-content-end mb-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-inline-block"
                  >
                    Responder
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="mb-3 revelar opacity-0 animate__animated"
        >
          <Card>
            <Card.Body>
              <Card.Title className="fs-4">Nueva Encuesta</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                omnis ad eos doloremque perspiciatis quibusdam eius fuga.
              </Card.Text>
              <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
                <Form.Check
                  type="radio"
                  label="Opción1"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción2"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción3"
                  name="encuesta"
                  className="mb-3"
                />

                <div className="d-flex justify-content-end mb-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-inline-block"
                  >
                    Responder
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="mb-3 revelar opacity-0 animate__animated"
        >
          <Card>
            <Card.Body>
              <Card.Title className="fs-4">Nueva Encuesta</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                omnis ad eos doloremque perspiciatis quibusdam eius fuga.
              </Card.Text>
              <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
                <Form.Check
                  type="radio"
                  label="Opción1"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción2"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción3"
                  name="encuesta"
                  className="mb-3"
                />

                <div className="d-flex justify-content-end mb-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-inline-block"
                  >
                    Responder
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="mb-3 revelar opacity-0 animate__animated"
        >
          <Card>
            <Card.Body>
              <Card.Title className="fs-4">Nueva Encuesta</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                omnis ad eos doloremque perspiciatis quibusdam eius fuga.
              </Card.Text>
              <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
                <Form.Check
                  type="radio"
                  label="Opción1"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción2"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción3"
                  name="encuesta"
                  className="mb-3"
                />

                <div className="d-flex justify-content-end mb-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-inline-block"
                  >
                    Responder
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="mb-3 revelar opacity-0 animate__animated"
        >
          <Card>
            <Card.Body>
              <Card.Title className="fs-4">Nueva Encuesta</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                omnis ad eos doloremque perspiciatis quibusdam eius fuga.
              </Card.Text>
              <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
                <Form.Check
                  type="checkbox"
                  label="Opción1"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="checkbox"
                  label="Opción2"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="checkbox"
                  label="Opción3"
                  name="encuesta"
                  className="mb-3"
                />

                <div className="d-flex justify-content-end mb-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-inline-block"
                  >
                    Responder
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="mb-3 revelar opacity-0 animate__animated"
        >
          <Card>
            <Card.Body>
              <Card.Title className="fs-4">Nueva Encuesta</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                omnis ad eos doloremque perspiciatis quibusdam eius fuga.
              </Card.Text>
              <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
                <Form.Check
                  type="radio"
                  label="Opción1"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción2"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción3"
                  name="encuesta"
                  className="mb-3"
                />

                <div className="d-flex justify-content-end mb-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-inline-block"
                  >
                    Responder
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="mb-3 revelar opacity-0 animate__animated"
        >
          <Card>
            <Card.Body>
              <Card.Title className="fs-4">Nueva Encuesta</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                omnis ad eos doloremque perspiciatis quibusdam eius fuga.
              </Card.Text>
              <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
                <Form.Check
                  type="radio"
                  label="Opción1"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción2"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción3"
                  name="encuesta"
                  className="mb-3"
                />

                <div className="d-flex justify-content-end mb-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-inline-block"
                  >
                    Responder
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="mb-3 revelar opacity-0 animate__animated"
        >
          <Card>
            <Card.Body>
              <Card.Title className="fs-4">Nueva Encuesta</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                omnis ad eos doloremque perspiciatis quibusdam eius fuga.
              </Card.Text>
              <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
                <Form.Check
                  type="checkbox"
                  label="Opción1"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="checkbox"
                  label="Opción2"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="checkbox"
                  label="Opción3"
                  name="encuesta"
                  className="mb-3"
                />

                <div className="d-flex justify-content-end mb-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-inline-block"
                  >
                    Responder
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="mb-3 revelar opacity-0 animate__animated"
        >
          <Card>
            <Card.Body>
              <Card.Title className="fs-4">Nueva Encuesta</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                omnis ad eos doloremque perspiciatis quibusdam eius fuga.
              </Card.Text>
              <Form className="mt-3" onSubmit={(e) => e.preventDefault()}>
                <Form.Check
                  type="radio"
                  label="Opción1"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción2"
                  name="encuesta"
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Opción3"
                  name="encuesta"
                  className="mb-3"
                />

                <div className="d-flex justify-content-end mb-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-inline-block"
                  >
                    Responder
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Encuestas;
