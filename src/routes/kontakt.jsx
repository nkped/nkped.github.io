import { Container, Row, Col, Card } from "react-bootstrap";
import { Footer } from "../components/footer";
import { Telephone, Envelope, Github } from "react-bootstrap-icons";

export default function Kontakt() {
  return (
    <Container className="bg-dark text-light">
      <Container className="fs-1 fw-semibold mb-2 pb-1 text-muted  border-bottom border-warning">
        <Row>Kontakt</Row>
      </Container>
      <Container className="d-grid gap-3 text-start px-4 py-5">
        <Row className="fs-3 fw-bold text-start mb-2">
          <Col>Vilkår for praktik</Col>
        </Row>
        <Row>
          <Col>
            <span className="lead">Praktik er gratis</span> for virksomheden
            (pånær frokost og kontorplads).
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="lead">Formålet med praktik</span> er primært
            joberfaring - ikke nødvendigvis job i samme virksomhed
            efterfølgende.
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="lead">Varighed for praktik</span> er i
            udgangspunktet tre måneder.
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="lead">Min rolle som praktikant</span> skal
            selvfølgelig primært udvikle mig som programmør. Jeg er dog åben
            overfor at bidrage på andre områder for, at det giver mening for
            virksomheden at have et føl gående. Jeg har fx været primær
            website-skribent for founthouse.dk, mødebooker for Nerd Productions
            samt manusforfatter på engelsk-sproglig pr-video for Citizen Dane.
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="lead">Skriv eller ring</span> på nedenstående info.
          </Col>
        </Row>
      </Container>
      <Container className="w-75 px-5 pb-5 border-bottom border-warning">
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
