import { Container, Row, Col } from "react-bootstrap";

export default function Om() {
  return (
    <Container>
      <Container className="d-flex">
        <h1>Om</h1>
      </Container>
      <Container>
        <Row className="text-start p-4">
          <Col>
            Jeg er selv-lærende frontend-udvikler, og jeg ønsker at dyggtigøre
            mig professionelt under en praktik. Jeg er uddannet i journalistik
            og samfundsvidenskab fra Roskilde Universitet, og har mange gode
            erfaringer i bagagen som leverandør af web-content, både
            journalistik, hjemmeside-tekst samt pr-video. Da Corona brød løs og
            hele Danmark tog en dyb kollektiv indånding gjorde jeg det samme.
            Siden da, har jeg studeret frontend-udvikling på fuld tid, og mener
            nu, jeg er klar på en praktik.
          </Col>
        </Row>
        <Container className="d-flex">
          <h4>Jeg bidrager med..</h4>
        </Container>
        <Row className="text-start px-4 py-2">
          <Col>
            Jeg ved, jeg har masser at lære - og glæder mig til det! Når det er
            sagt, har jeg efterhånden overvundet så mange faglige udfordringer,
            at min selvtillid er robust. Jeg forventer at blive overvældet i min
            praktik, men også, at få styr på det. Jeg gør altid mit bedste for
            at være en sjov, empatisk og samvittighedsfuld kollega.
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
