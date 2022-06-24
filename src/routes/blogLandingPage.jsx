import { Container, Row, Col, Card } from "react-bootstrap";
import { Pen } from "react-bootstrap-icons";
import { Footer } from "../components/footer";

export default function BlogLandingPage() {
  return (
    <Container>
      <Row className="display-2 Noto700 pb-1 px-1 mb-2 text-muted  border-bottom border-warning">
        Blog
      </Row>
      <Row className="text-center py-3">
        <Card className="my-4 bg-dark">
          <Card.Body className="p-4">
            <Card.Title>
              <h1 style={{ "font-weight": 900 }}>nkp blog</h1>
            </Card.Title>
            <Pen color="orange" size={40} className=" mt-3 mb-5" />
            <Card.Text className="">
              Her skriver jeg manualer om webudvikling. Jeg arbejder med{" "}
              <span className="text-warning">reactJS</span> og{" "}
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
