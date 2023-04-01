import { Button, Card, Col, Form } from "react-bootstrap";

function EncuestaReciente() {
  return (
    <Col xs={12} lg={6} className="mb-3">
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
                variant="success"
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
  );
}

export default EncuestaReciente;
