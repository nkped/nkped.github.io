import { Container, Row, Col, Image } from "react-bootstrap";
import { Footer } from "../components/footer";
import { FaRegSmile, FaHandsHelping, FaHandSpock } from "react-icons/fa";
import { RiAliensLine } from "react-icons/ri";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";

export default function Om() {
  return (
    <Container>
      <Container className="bg-dark">
        <Row className="display-2 Noto700 pb-1 px-1 mb-2 text-muted  border-bottom border-warning">
          Om
        </Row>

        <Row className="my-5 justify-content-center">
          <Col
            xs={{ span: 10, offset: 0 }}
            className="fs-2 fst-italic text-align-center mt-2 mb-3 "
          >
            <p>
              "Selv-lærende frontend-udvikler, der ønsker at dyggtigøre sig
              professionelt under en praktik."
            </p>
          </Col>
          <Col xs={{ span: 10, offset: 0 }}>
            <FaHandsHelping />
          </Col>
        </Row>

        <Row className="bgBuddha mb-5 align-items-end">
          <Col xs={{ span: 10, offset: 1 }} className="Noto700 fs-2 mt-5 pt-5">
            Zen-beslutning, to år efter..
          </Col>
          <Col xs={{ span: 10, offset: 1 }} className="mb-0 pb-3">
            <p>
              To års studier i web-udvkling er fløjet afsted, efter Corona
              sendte det kollektive Danmark på tvungen selvrefleksion i 2020.
            </p>
          </Col>
        </Row>

        <Row className="bgPaperBoy mb-5 align-items-end">
          <Col xs={{ span: 10, offset: 1 }} className="Noto700 fs-2 mt-3 pt-5">
            Uddannet i journalistik, RUC
          </Col>
          <Col xs={{ span: 10, offset: 1 }} className="mb-0 pb-3">
            <p>
              {" "}
              Gode erfaringer i bagagen som leverandør af web-content, både
              journalistik, tekst til hjemmeside samt pr-video.
            </p>
          </Col>
        </Row>

        <Row className="bgAstronaut mb-5 align-items-end">
          <Col xs={{ span: 10, offset: 1 }} className="Noto700 fs-2 mt-4 pt-0">
            The Truth Is Out There!
          </Col>
          <Col xs={{ span: 10, offset: 1 }}>
            <RiAliensLine style={{ color: "green" }} size={80} />
          </Col>
          <Col xs={{ span: 10, offset: 1 }} className="mb-0 pb-0"></Col>
        </Row>
        <Row className="bgTreasure mb-5 align-items-end">
          <Col xs={{ span: 10, offset: 1 }} className="Noto700 fs-2  mt-5 pt-0">
            Skattejagts-forfatter
          </Col>
          <Col xs={{ span: 10, offset: 1 }} className="mb-0 pb-3">
            <p>
              Min datter - en gæv 12-årig - må udholde sin fars trang til
              arts&crafts og let teater på sine fødselsdage. Det må vennernes
              børn , og endda et par voksne i familien.
            </p>
          </Col>
          <Col xs={{ span: 10, offset: 1 }}>
            <BsEmojiSmileUpsideDown size={40} />
          </Col>
        </Row>
        <Row className="mt-5 py-3">
          <Col xs={{ span: 10, offset: 1 }} className="fs-2 fst-italic">
            "Jeg gør altid mit bedste for at være en sjov, empatisk og
            samvittighedsfuld kollega."
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
