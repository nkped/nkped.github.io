import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <Container>
      <Row className="mt-5 py-2">
        <Col className="fst-italic text-muted font-monospace">
          Selv-lærende, voksen, ambitiøs..
        </Col>
      </Row>
    </Container>
  );
}
