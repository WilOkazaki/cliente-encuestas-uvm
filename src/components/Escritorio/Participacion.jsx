import { Card, Col, ListGroup } from "react-bootstrap";

function Participacion() {
  return (
    <Col xs={12} lg={6} className="mb-3">
      <Card>
        <Card.Body>
          <Card.Title className="fs-4">Participación:</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex flex-column justify-content-between align-items-start">
              <div className="fw-bold">Ultimo Ingreso</div>
              <span className="text-end w-100">00/00/000</span>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex flex-column justify-content-between align-items-start">
              <div className="fw-bold">Encuestas contestadas</div>
              <span className="text-end w-100">00</span>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex flex-column justify-content-between align-items-start">
              <div className="fw-bold">Ultima encuesta</div>
              <span className="text-end w-100">Nombre encuesta</span>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex flex-column justify-content-between align-items-start">
              <div className="fw-bold">Fecha de registro</div>
              <span className="text-end w-100">00/00/000</span>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Participacion;
