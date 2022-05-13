import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <Container>
      <Row className="border border-secondary mt-3 pt-4 pb-2">
        <Col>nikrped@gmail.com</Col>
        <Col>Rådmandsgade 35</Col>
        <Col className="text-end">Tlf: 6088 7055</Col>
      </Row>
    </Container>
  );
}
