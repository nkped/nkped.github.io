import { Container, Row, Col, Button } from "react-bootstrap";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <Container className="h-600px border border-primary">
      <Container className="pt-3">
        <h3>Hej, Nils-Kristian her!</h3>
      </Container>
      <Container className="px-5 pt-3">
        <h2>Jeg laver frontend-udvikling, og søger en praktikplads.</h2>
      </Container>
      <Button variant="primary" className="w-25 mx-auto my-4">
        Kontakt
      </Button>
      <Container className="d-grid gap-5 border border-primary">
        <Row>
          <Col className="border text-start">Voksen</Col>
        </Row>
        <Row>
          <Col className="border">Selv-lærende</Col>
        </Row>
        <Row>
          <Col className="text-end border">Ambitiøs</Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}
