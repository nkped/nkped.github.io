import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Footer } from "../components/footer";
//import homePagePic from "../img/homePagePic.png";
//import BlueHomePageImage from "./BlueHomePageImage.svg";
import YellowHomePageImage from "../img/YellowHomePageImage.svg";

import { ArrowRight } from "react-bootstrap-icons";

export default function Home() {
  return (
    <Container className="bg-dark text-light higher">
      <h1 className="Noto700 text-warning display-2 skewed my-5">
        Frontend-udvikler søger praktikplads
      </h1>
      <Row className="mb-3">
        <Col xs={{ span: 6, offset: 5 }}>..vh Nils-Kristian</Col>{" "}
      </Row>
      <Row>
        <Col>
          <Button href="/#/kontakt" variant="primary" className="Noto600 my-5">
            Kontakt og info
            <ArrowRight className="ms-1" />
          </Button>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

/*
      <Row>
        <Col xs={{ span: 6, offset: 3 }}>
          <p>..mvh Nils-Kristian Pedersen</p>
        </Col>
      </Row>

      */
