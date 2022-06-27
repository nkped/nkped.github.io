import { Container, Row, Col, Card } from "react-bootstrap";
import { Pen } from "react-bootstrap-icons";
import { FilterButtons } from "../components/filterButtons";

export default function BlogLandingPage() {
  return (
    <Container>
      <Row className="display-2 Noto700 pb-1 px-1 mb-2 text-muted  border-bottom border-warning">
        Blog
      </Row>

      <Row className="text-center mt-5 pt-2">
        <Col>
          <h1 className="Noto700">nkp:NoGobledigook</h1>
        </Col>
      </Row>
      <Row className=" mt-4 mb-5">
        <Col>
          <Pen color="orange" size={40} />
        </Col>
      </Row>
      <Row className=" mb-4">
        <Col xs={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
          Her skriver jeg manualer samt om tips og tricks inden for
          webudvikling.
        </Col>
      </Row>
      <Row className=" mb-4">
        <Col xs={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
          Jeg udvikler inden for <span className="text-warning">ReactJS</span>{" "}
          og <span className="text-warning ">React-Bootstrap</span>, men skriver
          bredt om økosystemet.
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
          Inden længe kan man filtrere blogindlæg på emner - fx "routing", via
          knapper. Indtil videre kan man kun vælge "alle indlæg" nedenfor.
        </Col>
      </Row>

      <Row>
        <Col className="display-2 text-center Noto700 my-2 pt-3">#</Col>
      </Row>
      <Row>
        <Col>
          <FilterButtons />
        </Col>
      </Row>
    </Container>
  );
}
