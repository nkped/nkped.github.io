import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Footer } from "../components/footer";
//import homePagePic from "../img/homePagePic.png";
//import BlueHomePageImage from "./BlueHomePageImage.svg";
import YellowHomePageImage from "../img/YellowHomePageImage.svg";

import { ArrowRight } from "react-bootstrap-icons";

export default function Home() {
  return (
    <Container fluid className="bg-dark text-light">
    <Row><Col>
          <Image fluid src={YellowHomePageImage} />
          </Col> </Row>
        <Row>
          <Col>
            <h1 className="Noto700 text-warning">
              Frontend-udvikler søger{" "}
              praktikplads
            </h1>
          </Col>
        </Row>


        <Button href="/#/kontakt" variant="primary" className="Noto600 my-4">
          Kontakt og info
          <ArrowRight className="ms-1" />
        </Button>
          <Row  className="text-center">
            <Col>
              <p>Venlig hilsen</p>
            </Col>
          </Row>
          <Row>
            <Col><p>Nils-Kristian Pedersen</p></Col>
          </Row>
          <Footer />
    </Container>
  );
}
