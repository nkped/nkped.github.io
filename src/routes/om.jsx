import { Container, Row, Col, Image } from "react-bootstrap";
import { Footer } from "../components/footer";
import { FaRegLaughWink } from "react-icons/fa";
import PaperBoy from "../img/PaperBoy.svg";
import buddha from "../img/buddha.svg";
import astronaut from "../img/astronaut.svg";
import treasurechest from "../img/treasurechest.svg";
import { BlockquoteLeft } from "react-bootstrap-icons";

export default function Om() {
  const buddhaBg = {
    backgroundImage: URL("../img/buddha.svg"),
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };
  return (
    <Container fluid className="bg-dark text-light">
      <Container className="">
        <Row className="border-bottom border-warning fs-1 fw-semibold mb-4 text-muted">
          Om
        </Row>

        <Row>
          <Col xs={{ span: 4, offset: 1 }}>
            <Image fluid src={PaperBoy} className="" />
          </Col>
          <Col xs={{ span: 10, offset: 1 }} className="text-center fs-3">
            Uddannet i journalistik, RUC
          </Col>
          <Col xs={{ span: 10, offset: 1 }}>
            Gode erfaringer i bagagen som leverandør af web-content, både
            journalistik, tekst til hjemmeside samt pr-video.
          </Col>
        </Row>

        <Row>
          <Col xs={{ span: 10, offset: 1 }} className="fs-2">
            Zen-beslutning, to år efter..
          </Col>
          <Col xs={{ span: 10, offset: 1 }}>
            To års studier i web-udvkling er fløjet afsted, efter Corona sendte
            det kollektive Danmark på tvungen selvrefleksion i 2020.
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 7 }}>
            <Image src={astronaut} />
          </Col>
          <Col xs={{ span: 6, offset: 3 }} className="pe-5 fs-2">
            Rum-nørd
          </Col>
          <Col xs={{ span: 10, offset: 1 }}>
            jhfh sdlhfls dajhghgg lg jlgj g glasj glksj lg jdgj ldkgj g asgljgd
            glg als dgkj dg laks g j kjkhf f kjhd sf f fd jdhfkjhf df fg
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 4 }}>
            <Image fluid src={treasurechest} />
          </Col>
          <Col xs={{ span: 10, offset: 1 }} className="fs-2">
            Skattejagts-forfatter
            <FaRegLaughWink size={40} />{" "}
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col className="gy-3">
            Jeg gør altid mit bedste for at være en sjov, empatisk og
            samvittighedsfuld kollega.
          </Col>
          <Col></Col>
        </Row>

        <Row className="gy-3 justify-content-center row-cols-1 row-cols-sm-1 row-cols-md-3">
          <Col className="col-10 col-sm-10">
            Selv-lærende frontend-udvikler, der ønsker at dyggtigøre sig
            professionelt under en praktik.
          </Col>
        </Row>
        <Footer />
      </Container>
    </Container>
  );
}
/*
          <Col xs={{ span: 5, offset: 3 }}>
            <Image fluid src={buddha} className="" />
          </Col>
          */
