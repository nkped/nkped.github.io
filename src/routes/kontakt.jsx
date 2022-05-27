import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Footer } from "../components/footer";
import { Telephone, Envelope, Github } from "react-bootstrap-icons";

export default function Kontakt() {
  return (
    <Container className="bg-dark text-light">
      <Container className="fs-1 fw-semibold mb-2 pb-1 text-muted  border-bottom border-warning">
        <Row>Kontakt</Row>
      </Container>
      <Container className="w-75 px-5 py-5 border-bottom border-warning">
        <Card className="my-4 bg-secondary">
          <Card.Body>
            <Telephone color="orange" size={40} className=" mb-3" />
            <Card.Title>6088 7055</Card.Title>
          </Card.Body>
        </Card>

        <Card className="my-4 bg-secondary">
          <Card.Body>
            <Envelope color="orange" size={40} className=" mb-3" />
            <Card.Title>nikrpe@gmail.com</Card.Title>
          </Card.Body>
        </Card>

        <Card className="my-4 bg-secondary">
          <Card.Body>
            <Github color="orange" size={40} className=" mb-3" />
            <Card.Title>nikrpedev@gmail.com</Card.Title>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </Container>
  );
}
