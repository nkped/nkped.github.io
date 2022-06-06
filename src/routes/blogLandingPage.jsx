import { Container, Row, Col, Card } from "react-bootstrap";
import { Pen } from "react-bootstrap-icons";
import { Footer } from "../components/footer";

export default function BlogLandingPage() {
  return (
    <Container fluid className="">
      <Container className="fs-1 fw-semibold mb-2 text-muted">
        <Row>Blog</Row>
      </Container>
      <Container className="text-center px-4 py-3 border-top border-warning">
        <Card className="my-4 bg-dark">
          <Card.Body>
            <Pen color="orange" size={40} className=" mb-5" />
            <Card.Title>Velkommen til min blog</Card.Title>
            <Card.Text>
              Her øver jeg mig i at dokumentere ved at skrive manualer jeg
              hutigt kan vende tilbage til.
            </Card.Text>
            <Card.Text>
              Her er også plads til overvejelser om denne sides udvikling, samt
              om programmering generelt.
            </Card.Text>
          </Card.Body>
        </Card>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}
