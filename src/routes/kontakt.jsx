import { Container, Row, Col, Card, Stack } from "react-bootstrap";
import { Footer } from "../components/footer";
import { Telephone, Envelope, Github, Linkedin } from "react-bootstrap-icons";

export default function Kontakt() {
  return (
    <Container fluid className="bg-dark text-light">
      <Container>
        <Row className="fs-1 fw-semibold mb-2 pb-1 text-muted  border-bottom border-warning">
          Info
        </Row>
        <Stack gap={4} className="pt-5 text-start">
          <Row className="fs-3 fw-bold text-start mb-2">
            <Col className="mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
              Vilkår for praktik
            </Col>
          </Row>

          <Row>
            <Col className="mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
              <span className="lead text-warning">Gratis </span>- virksomheden
              skal blot sørge for frokost og kontorplads.
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
              <span className="lead text-warning">Formålet </span>med praktik er
              primært joberfaring - ikke nødvendigvis job i samme virksomhed
              efterfølgende.
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
              <span className="lead text-warning">Varighed </span>for praktik er
              i udgangspunktet tre måneder.
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
              <span className="lead text-warning">Min rolle</span> som
              praktikant skal selvfølgelig primært udvikle mig som programmør.
              Jeg er dog åben overfor at bidrage på andre områder for, at det
              giver mening for virksomheden at have et føl gående.
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
              <span className="lead text-warning"> Jeg har erfaring</span> som
              primær website-skribent for founthouse.dk, mødebooker for Nerd
              Productions samt manusforfatter på engelsk-sproglig pr-video for
              Citizen Dane (se referencer nederst).
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
              <span className="lead text-warning">Skriv eller ring</span> på
              nedenstående info.
            </Col>
          </Row>
        </Stack>

        <Row className="justify-content-center gap-4 py-4 mt-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
          <Col className="col-9">
            <Card className="bg-dark bg-gradient bg-border border-warning">
              <Card.Body>
                <Telephone color="orange" size={40} className=" mb-3" />
                <Card.Title>6088 7055</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-9">
            <Card className="bg-dark bg-gradient bg-border border-warning">
              <Card.Body>
                <Envelope color="orange" size={40} className=" mb-3" />
                <Card.Title>nikrpe@gmail.com</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-9">
            <Card className="bg-dark bg-gradient bg-border border-warning">
              <Card.Body>
                <Github color="orange" size={40} className=" mb-3" />
                <Card.Title>nikrpedev@gmail.com</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-9">
            <Card className="bg-dark bg-gradient bg-border border-warning">
              <Card.Body>
                <Linkedin color="orange" size={40} className=" mb-3" />
                <Card.Title>Nils-Kristian Pedersen</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center gap-4 row-cols-1 row-cols-md-3">
          <Col className="col-9">
            <Card className="bg-dark bg-gradient bg-border border-warning">
              <Card.Body>
                <Telephone color="orange" size={40} className=" mb-3" />
                <Card.Title>Founthouse.dk</Card.Title>
                <Card.Title>Reference:</Card.Title>
                <Card.Text>Toke Schultze: 5050 9015</Card.Text>
                <Card.Text>Stilling: Ejer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-9">
            <Card className="bg-dark bg-gradient bg-border border-warning">
              <Card.Body>
                <Telephone color="orange" size={40} className=" mb-3" />
                <Card.Title>Citizen Dane</Card.Title>
                <Card.Title>Reference:</Card.Title>
                <Card.Text>Marcus Mandal: 3363 7302</Card.Text>
                <Card.Text>Stilling: Instruktør</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-9">
            <Card className="bg-dark bg-gradient bg-border border-warning">
              <Card.Body>
                <Telephone color="orange" size={40} className=" mb-3" />
                <Card.Title>Nerd Productions</Card.Title>
                <Card.Title>Reference:</Card.Title>
                <Card.Text>Bo Blaksteen: 2299 4253</Card.Text>
                <Card.Text>Stilling: Ejer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Footer />
      </Container>
    </Container>
  );
}
