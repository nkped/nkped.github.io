import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Footer } from "../components/footer";
//import homePagePic from "../img/homePagePic.png";
//import BlueHomePageImage from "./BlueHomePageImage.svg";
import YellowHomePageImage from "./YellowHomePageImage.svg";

import { ArrowRight } from "react-bootstrap-icons";

export default function Home() {
  return (
    <Container fluid className="bg-dark text-light">
      <Container className="px-5 pt-3">
        <Row>
          <Col className="fs-2 fw-semibold">
            Frontend-udvikler kl 1619 søger{" "}
            <span className="fs-1 text-warning">praktikplads</span>
          </Col>
        </Row>

        <Container fluid className="my-4">
          <Image fluid src={YellowHomePageImage} />
        </Container>
        <Button href="/kontakt" variant="primary" className="my-4">
          Kontakt og info
          <ArrowRight className="ms-1" />
        </Button>
        <Container className="text-center text-muted">
          <Row>
            <Col>Venlig hilsen</Col>
          </Row>
          <Row>
            <Col>Nils-Kristian Pedersen</Col>
          </Row>
        </Container>
        <Container>
          <Footer />
        </Container>
      </Container>
    </Container>
  );
}
