import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row>
        <h3>Hej, Nils-Kristian her!</h3>
      </Row>
      <Container className="mt-3">
        <h2>Jeg laver frontend-udvikling, og søger en praktikplads.</h2>
      </Container>
      <Container //className="d-grid gap-5 mt-5"
      >
        <Row>
          <Button variant="primary" className="w-25 mx-auto my-4">
            Kontakt
          </Button>
        </Row>
        <Row className="mb-3">
          <Col>
            <h4>Voksen</h4>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h3>Selv-lærende</h3>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <h1>Ambitiøs..</h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
