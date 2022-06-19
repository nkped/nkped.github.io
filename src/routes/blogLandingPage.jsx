import { Container, Row, Col, Card } from "react-bootstrap";
import { Pen } from "react-bootstrap-icons";
import { Footer } from "../components/footer";

export default function BlogLandingPage() {
  return (
    <Container fluid>
      <Row
        className="fw-semibold fs-1 mb-2 border-bottom
        border-warning text-muted text-start"
      >
        <Col>
          <h1>Blog</h1>
        </Col>
      </Row>
      <Row className="text-center px-4 py-3">
        <Card className="my-4 bg-dark">
          <Card.Body className="">
            <Pen color="orange" size={40} className=" mb-5" />
            <Card.Title>
              <h1>nkp blog</h1>
            </Card.Title>
            <Card.Text className="lead">
              Velkommen, her skriver jeg manualer om webudvikling. Jeg arbejder
              med <span className="text-warning">reactJS</span> og{" "}
              <span className="text-warning ">react-bootstrap</span>.
            </Card.Text>
            <Card.Text>
              Inden længe kan man filtrere blogindlæg på emner - fx "routing",
              via knapper.
            </Card.Text>
            <Card.Text>
              Indtil videre kan man kun vælge "alle indlæg" nedenfor.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
