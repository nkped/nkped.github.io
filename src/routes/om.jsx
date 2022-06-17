import { Container, Row, Col, Image } from "react-bootstrap";
import { Footer } from "../components/footer";
import { FaRegLaughWink, FaHandsHelping, FaHandSpock } from "react-icons/fa";

export default function Om() {
  return (
    <Container fluid className="bg-dark text-light">
      <Row className="border-bottom border-warning fs-1 fw-semibold mb-4 text-muted">
        Om
      </Row>

      <Row className="my-5 justify-content-center">
        <Col xs={{ span: 10, offset: 1 }} className=""></Col>
        <Col className="lead fst-italic text-align-center col-10 col-sm-10">
          "Selv-lærende frontend-udvikler, der ønsker at dyggtigøre sig
          professionelt under en praktik."
        </Col>
        <Col xs={{ span: 10, offset: 0 }}>
          <FaHandsHelping />
        </Col>
      </Row>

      <Row className="bgBuddha align-items-center">
        <Col xs={{ span: 10, offset: 1 }} className="fs-2 mt-5 pt-5">
          Zen-beslutning, to år efter..
        </Col>
        <Col xs={{ span: 10, offset: 1 }} className="mb-5 pb-5">
          To års studier i web-udvkling er fløjet afsted, efter Corona sendte
          det kollektive Danmark på tvungen selvrefleksion i 2020.
        </Col>
      </Row>

      <Row className="bgPaperBoy align-items-center">
        <Col xs={{ span: 10, offset: 1 }} className="fs-2  mt-5 pt-5">
          Uddannet i journalistik, RUC
        </Col>
        <Col xs={{ span: 10, offset: 1 }} className="mb-5 pb-5">
          Gode erfaringer i bagagen som leverandør af web-content, både
          journalistik, tekst til hjemmeside samt pr-video.
        </Col>
      </Row>

      <Row className="bgAstronaut align-items-center">
        <Col xs={{ span: 10, offset: 1 }} className="fs-2 mt-5 pt-5">
          Fysik og sci-fy enthusiast
        </Col>
        <Col xs={{ span: 10, offset: 1 }}>
          <FaHandSpock />
        </Col>
        <Col xs={{ span: 10, offset: 1 }} className="mb-5 pb-5"></Col>
      </Row>
      <Row className="bgTreasure align-items-center">
        <Col xs={{ span: 10, offset: 1 }} className="fs-2  mt-5 pt-5">
          Skattejagts-forfatter
        </Col>
        <Col xs={{ span: 10, offset: 1 }} className="mb-5 pb-5">
          Min datter - en gæv 12-årig - må udholde sin fars trang til
          arts&crafts og let skuespil til sine fødselsdage. Det må vennernes
          børn også, og endda et par voksne i familien også.
          <FaRegLaughWink size={40} />{" "}
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} className="lead fst-italic">
          "Jeg gør altid mit bedste for at være en sjov, empatisk og
          samvittighedsfuld kollega."
        </Col>
      </Row>

      <Footer />
    </Container>
  );
}
/*
          <Col xs={{ span: 5, offset: 3 }}>
            <Image fluid src={buddha} className="" />
          </Col>
          
          <Col xs={{ span: 4, offset: 1 }}>
          <Image fluid src={PaperBoy} className="" />
          </Col>
          
          <Col xs={{ span: 4, offset: 7 }}>
          <Image src={astronaut} />
          </Col>
          <Col xs={{ span: 4, offset: 4 }}>
          <Image fluid src={treasurechest} />
          </Col>
          
          */
