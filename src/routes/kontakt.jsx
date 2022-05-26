import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Footer } from "../components/footer";

export default function Kontakt() {
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>6088 7055</Card.Title>
          <Card.Text>Sms eller Ring -smiley-</Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Mail: nikrpe@gmail.com</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>GitHub Email: nikrpedev@gmail.com</Card.Title>
        </Card.Body>
      </Card>

      <Footer />
    </Container>
  );
}
