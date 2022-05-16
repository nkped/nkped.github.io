import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <Container>
      <Row className="mt-3 py-2">
        <Col className="fst-italic text-warning">
          Selv-lærende, voksen, ambitiøs..
        </Col>
      </Row>
    </Container>
  );
}
