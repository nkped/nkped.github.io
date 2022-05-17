import { Container, Row, Col } from "react-bootstrap";
import { Footer } from "../components/footer";

export default function Om() {
  return (
    <Container fluid className="bg-dark text-light">
      <Container className="fs-1 fw-semibold mb-2">
        <Row>Om</Row>
      </Container>
      <Container className="text-start px-4 py-5 border-top border-warning">
        <Row>
          <Col>
            <p>
              Jeg er selv-lærende frontend-udvikler og jeg ønsker at dyggtigøre
              mig professionelt under en praktik.
            </p>
            <p>
              Jeg er uddannet i journalistik og samfundsvidenskab fra Roskilde
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
        </Row>
        <Footer />
      </Container>
    </Container>
  );
}
