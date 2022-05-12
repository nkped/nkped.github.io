import { Container } from "react-bootstrap";

export default function Om() {
  return (
    <Container>
      <Container className="d-flex">
        <h1>Om</h1>
      </Container>
      <Container>
        <p>
          Jeg er selv-lærende frontend-udvikler, og jeg ønsker at dyggtigøre mig
          professionelt under en praktik. Jeg er uddannet i journalistik og
          samfundsvidenskab fra Roskilde UniversitetCenter, og har mange gode
          erfaringer i bagagen som leverandør på contenr siden af nettet. BDa
          Corona brød løs og hele Danmark tog en dyb kollektiv indånding gjorde
          jeg det samme. Jeg har studeret frontend-udvikling i henved to år, og
          mener nu, jeg er klar på en praktik.
        </p>
        <Container className="d-flex">
          <h3>Jeg bidrager med..</h3>
        </Container>
        <p>Jeg ved, jeg har masser at lære - og glæder mig til det!</p>
        <p>
          Når det er sagt, har jeg efterhånden overvundet så mange faglige
          udfordringer, at min selvtillid er temmelig god. Jeg forventer at
          blive overvældet i min praktik, men også, at få styr på det.
        </p>
        <p>
          Jeg gør altid mit bedste for at være en sjov, empatisk og
          samvittighedsfuld kollega.{" "}
        </p>
      </Container>
    </Container>
  );
}
