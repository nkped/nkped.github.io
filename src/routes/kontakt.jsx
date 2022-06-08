import { Container, Row, Col, Card, Stack } from "react-bootstrap";
import { Footer } from "../components/footer";
import { Telephone, Envelope, Github, Linkedin } from "react-bootstrap-icons";

export default function Kontakt() {
  return (
    <Container fluid className="bg-dark text-light">
      <Container className="fs-1 fw-semibold mb-2 pb-1 text-muted  border-bottom border-warning">
        <Row>Info</Row>
      </Container>
      <Container className="text-start py-5">
        <Row className="fs-3 fw-bold text-start mb-2">
          <Col md={2} lg={3}></Col>
          <Col md={8} lg={6}>
            Vilkår for praktik
          </Col>
          <Col md={2} lg={3}></Col>
        </Row>
        <Row>
          <Col md={2} lg={3}></Col>
          <Col md={8} lg={6}>
            <Col>
              <span className="lead text-warning">Gratis </span>- virksomheden
              skal blot sørge for frokost og kontorplads.
            </Col>
            <Col>
              <span className="lead text-warning">Formålet </span>med praktik er
              primært joberfaring - ikke nødvendigvis job i samme virksomhed
              efterfølgende.
            </Col>
            <Col>
              <span className="lead text-warning">Varighed </span>for praktik er
              i udgangspunktet tre måneder.
            </Col>
            <Col>
              <span className="lead text-warning">Min rolle</span> som
              praktikant skal selvfølgelig primært udvikle mig som programmør.
              Jeg er dog åben overfor at bidrage på andre områder for, at det
              giver mening for virksomheden at have et føl gående.
            </Col>
            <Col>
              <span className="lead text-warning"> Jeg har erfaring</span> som
              primær website-skribent for founthouse.dk, mødebooker for Nerd
              Productions samt manusforfatter på engelsk-sproglig pr-video for
              Citizen Dane (se referencer nederst).
            </Col>
            <Col>
              <span className="lead text-warning">Skriv eller ring</span> på
              nedenstående info.
            </Col>
          </Col>
          <Col md={2} lg={3}></Col>
        </Row>
        <Stack
          gap={4}
          className="col-8 col-sm-7 col-md-5 col-lg-4 mx-auto mt-5 text-center"
        >
          <Card border="warning" className="bg-dark bg-gradient bg-border">
            <Card.Body>
              <Telephone color="orange" size={40} className=" mb-3" />
              <Card.Title>6088 7055</Card.Title>
            </Card.Body>
          </Card>

          <Card border="warning" className="bg-dark bg-gradient bg-border">
            <Card.Body>
              <Envelope color="orange" size={40} className=" mb-3" />
              <Card.Title>nikrpe@gmail.com</Card.Title>
            </Card.Body>
          </Card>

          <Card border="warning" className="bg-dark bg-gradient bg-border">
            <Card.Body>
              <Github color="orange" size={40} className=" mb-3" />
              <Card.Title>nikrpedev@gmail.com</Card.Title>
            </Card.Body>
          </Card>

          <Card border="warning" className="bg-dark bg-gradient bg-border">
            <Card.Body>
              <Linkedin color="orange" size={40} className=" mb-3" />
              <Card.Title>Nils-Kristian Pedersen</Card.Title>
            </Card.Body>
          </Card>
          <Card border="warning" className="bg-dark bg-gradient bg-border">
            <Card.Body>
              <Telephone color="orange" size={40} className=" mb-3" />
              <Card.Title>Founthouse.dk</Card.Title>
              <Card.Title>Reference:</Card.Title>
              <Card.Text>Toke Schultze: 5050 9015</Card.Text>
              <Card.Text>Stilling: Ejer</Card.Text>
            </Card.Body>
          </Card>
          <Card border="warning" className="bg-dark bg-gradient bg-border">
            <Card.Body>
              <Telephone color="orange" size={40} className=" mb-3" />
              <Card.Title>Citizen Dane</Card.Title>
              <Card.Title>Reference:</Card.Title>
              <Card.Text>Marcus Mandal: 3363 7302</Card.Text>
              <Card.Text>Stilling: Instruktør</Card.Text>
            </Card.Body>
          </Card>

          <Card border="warning" className="bg-dark bg-gradient bg-border">
            <Card.Body>
              <Telephone color="orange" size={40} className=" mb-3" />
              <Card.Title>Nerd Productions</Card.Title>
              <Card.Title>Reference:</Card.Title>
              <Card.Text>Bo Blaksteen: 2299 4253</Card.Text>
              <Card.Text>Stilling: Ejer</Card.Text>
            </Card.Body>
          </Card>
        </Stack>
      </Container>
      <Footer />
    </Container>
  );
}

/*
<Container className="w-75 px-5 pb-5 border-bottom border-warning"></Container>
<Col className="fs-3">Referencer</Col>

*/
