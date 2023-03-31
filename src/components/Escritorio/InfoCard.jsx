import {Col, Card} from "react-bootstrap";

function InfoCard({color, titulo, dato}) {
  return (
    <Col xs={12} md={6} lg={3}>
      <Card className="w-100 mx-3 mb-3">
        <Card.Header className={`bg-${color}`}>
          <Card.Title>{titulo}</Card.Title>
        </Card.Header>
        <Card.Body className={`text-end text-${color}`}>
          
            <h2>
              <strong>{dato}</strong>
            </h2>
          
        </Card.Body>
      </Card>
    </Col>
  );
}

export default InfoCard;
