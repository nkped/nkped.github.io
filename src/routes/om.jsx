import { Container, Row, Col } from "react-bootstrap";
import { Footer } from "../components/footer";

export default function Om() {
  return (
    <Container fluid className="sm bg-dark text-light">
      <Container className="border-bottom border-warning fs-1 fw-semibold mb-4 text-muted">
        <Row>Om</Row>
      </Container>
      <Container className=" text-start p-5">
        <Row>
          <Col md={2} lg={3}></Col>
          <Col md={8} lg={6}>
            <p className="lead">
              Selv-lærende frontend-udvikler, der ønsker at dyggtigøre sig
              professionelt under en praktik.
            </p>
            <p>
              Jeg er uddannet i journalistik og samfundsvidenskab på Roskilde
              Universitet, og har mange gode erfaringer i bagagen som leverandør
              af web-content, både journalistik, hjemmeside-tekst samt pr-video.
            </p>
            <p>
              Da Corona brød løs og hele Danmark tog en dyb kollektiv indånding
              gjorde jeg det samme. Siden da, har jeg studeret
              frontend-udvikling på fuld tid, og mener nu, jeg er klar på en
              praktik.
            </p>
            <p>Jeg ved, jeg har masser at lære - og glæder mig til det!</p>
            <p>
              Når det er sagt, har jeg efterhånden overvundet så mange faglige
              udfordringer, at min selvtillid er robust - jeg forventer at få
              hovedbrud i min praktik, men også at få styr på det.
            </p>
            Jeg gør altid mit bedste for at være en sjov, empatisk og
            samvittighedsfuld kollega.
            <p></p>
          </Col>
          <Col md={2} lg={3}></Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}
