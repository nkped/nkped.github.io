import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Footer } from "../components/footer";
//import homePagePic from "../img/homePagePic.png";
//import BlueHomePageImage from "./BlueHomePageImage.svg";
import YellowHomePageImage from "../img/YellowHomePageImage.svg";

import { ArrowRight } from "react-bootstrap-icons";

export default function Home() {
  return (
    <Container fluid className="bg-dark text-light">
      <Container className="px-5 pt-3">
        <Row>
          <Col>
            <h1>
              Frontend-udvikler kl 2138 søger{" "}
              <span className="fs-1 text-warning">praktikplads</span>
            </h1>
          </Col>
        </Row>

        <Container fluid className="my-4">
          <Image fluid src={YellowHomePageImage} />
        </Container>
        <Button href="/#/kontakt" variant="primary" className="montFont my-4">
          Kontakt og info
          <ArrowRight className="ms-1" />
        </Button>
        <Container className="text-center text-muted">
          <Row>
            <Col>
              <p>Venlig hilsen</p>
            </Col>
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
