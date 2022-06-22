import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Footer } from "../components/footer";
//import homePagePic from "../img/homePagePic.png";
//import BlueHomePageImage from "./BlueHomePageImage.svg";
import YellowHomePageImage from "../img/YellowHomePageImage.svg";

import { ArrowRight } from "react-bootstrap-icons";

export default function Home() {
  return (
    <Container fluid className="px-3">
      <Container className="bg-dark higher pt-5">
        <h1 className="Noto700 text-warning display-2 skewed">
          Frontend-udvikler søger praktikplads
        </h1>
        <Row className="mb-5 skewed">
          <Col xs={{ span: 6, offset: 5 }}>..vh Nils-Kristian</Col>{" "}
        </Row>
        <Row>
          <Col>
            <Button
              href="/#/kontakt"
              variant="bgColor"
              className="Noto600 my-5"
            >
              Kontakt og info
              <ArrowRight className="ms-1" />
            </Button>
          </Col>
        </Row>
        <Footer />
      </Container>
    </Container>
  );
}

/*
hsla(310, 73%, 62%, 1) pink - mættet
hsla(299, 49%, 62%, 1) pink - mindre mættet
      <Row>
        <Col xs={{ span: 6, offset: 3 }}>
          <p>..mvh Nils-Kristian Pedersen</p>
        </Col>
      </Row>

      */
