import { Container, Row, Col } from "react-bootstrap";

export default function BlogLandingPage() {
  return (
    <Container>
      <Container className="fs-1 fw-semibold mb-2 text-muted">
        <Row>Blog</Row>
      </Container>
      <Container className="text-center px-4 py-5 border-top border-warning">
        <Row>
          <Col>
            Velkommen til min blog. Her øver jeg mig i at dokumentere, og
            skriver manualer jeg hutigt kan vende tilbage til.
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
