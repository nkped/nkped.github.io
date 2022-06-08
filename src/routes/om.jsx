import { Container, Row, Col, Stack } from "react-bootstrap";
import { Footer } from "../components/footer";

export default function Om() {
  return (
    <Container fluid className="sm bg-dark text-light">
      <Container className="border-bottom border-warning fs-1 fw-semibold mb-4 text-muted">
        <Row>Om</Row>
      </Container>
      <Stack gap={4} className="pt-5 text-start">
        <Row>
          <Col className="lead mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
            Selv-lærende frontend-udvikler, der ønsker at dyggtigøre sig
            professionelt under en praktik.
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
            Jeg er uddannet i journalistik og samfundsvidenskab på Roskilde
            Universitet, og har mange gode erfaringer i bagagen som leverandør
            af web-content, både journalistik, hjemmeside-tekst samt pr-video.
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
            Da Corona brød løs og hele Danmark tog en dyb kollektiv indånding
            gjorde jeg det samme. Siden da, har jeg studeret frontend-udvikling
            på fuld tid, og mener nu, jeg er klar på en praktik.
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
            Jeg ved, jeg har masser at lære - og glæder mig til det!
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
            Når det er sagt, har jeg efterhånden overvundet så mange faglige
            udfordringer, at min selvtillid er robust - jeg forventer at få
            hovedbrud i min praktik, men også at få styr på det.
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5">
            Jeg gør altid mit bedste for at være en sjov, empatisk og
            samvittighedsfuld kollega.
          </Col>
        </Row>
      </Stack>
      <Footer />
    </Container>
  );
}
