import { Container, Row, Col } from "react-bootstrap";

export default function BlogLandingPage() {
  return (
    <Container>
      <Container>
        <Row className="text-start">
          <Col>
            <h2>Blog</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-start p-4">
            Velkommen til min blog. Her fører jeg en form for dagbog som
            udvikler, dels, for at øve mig i at dokumentere, og dels, for at
            skrive manualer, jeg hutigt kan vende tilbage til.
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
