import { Container, Row, Col, Button } from "react-bootstrap";
import { Footer } from "../components/footer";

import { ArrowRight } from "react-bootstrap-icons";

export default function Home() {
  return (
    <Container>
      <Container className="bg-dark higher pt-5">
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>
            <h1 className="Noto700 text-warning display-2 skewed">
              Frontend-dev søger praktikplads
            </h1>
          </Col>
        </Row>
        <Row className="mb-5 skewed">
          <Col xs={{ span: 6, offset: 5 }} className="text-muted">
            ..vh Nils-Kristian
          </Col>{" "}
        </Row>
        <Row>
          <Col>
            <Button href="/#/kontakt" variant="danger" className="Noto600 my-5">
              Info
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
