import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import logoUVM from "../../assets/img/logo.png"

function AuthTemplate() {
  return (
    <>
      <Container fluid>
        <Row className="mt-3">
          
          <Col className="p-5 d-flex flex-column justify-content-center align-items-center">
          <img src={logoUVM} alt={logoUVM} width={200} className="mb-3"/>
            <h2 className="text-center">Sistema de Encuestas UVM</h2>
            <Outlet />
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default AuthTemplate;
