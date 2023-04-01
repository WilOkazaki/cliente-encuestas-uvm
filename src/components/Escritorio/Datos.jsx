import { Button, Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import EncuestaReciente from "./EncuestaReciente";
import { Grafico } from "./Grafico";
import { Grafico2 } from "./Grafico2";
import InfoCard from "./InfoCard";
import Participacion from "./Participacion.jsx";

function Datos() {
  return (
    <>
      <Row className="mt-5 pt-4 w-100">
        <InfoCard color="info" titulo="tituloDato" dato="100" />
        <InfoCard color="warning" titulo="tituloDato" dato="100" />
        <InfoCard color="danger" titulo="tituloDato" dato="100" />
        <InfoCard color="success" titulo="tituloDato" dato="100" />
      </Row>

      <Row className="mt-3">
        <Participacion />
				<EncuestaReciente />
      </Row>

			<Row className="mt-3">
				<Col sx={12} md={6} className="mb-3">
					<Card>
						<Card.Body>
							<Card.Title className="fs-4 mb-3"> Titulo de la encuesta1</Card.Title>
							<Grafico />
						</Card.Body>
					</Card>
				</Col>

				<Col sx={12} md={6} className="mb-3">
					<Card className="h-100">
						<Card.Body>
							<Card.Title className="fs-4 mb-3"> Titulo de la encuesta2</Card.Title>
							<div className="d-flex flex-column h-100 justify-content-center">
								<Grafico2 />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
    </>
  );
}

export default Datos;
