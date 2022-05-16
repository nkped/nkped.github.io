import { Container, Row, Col, Button } from "react-bootstrap";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <Container fluid className="bg-dark text-light">
      <Container className="pt-3">
        <h3>Hej, Nils-Kristian her!</h3>
      </Container>
      <Container className="px-5 pt-3">
        <h2>
          Jeg laver frontend-udvikling, og{" "}
          <span className="text-warning ">søger en praktikplads.</span>
        </h2>
      </Container>
      <Button variant="primary" className="w-25 mx-auto my-4">
        Kontakt
      </Button>
      <Container className="d-grid gap-5 border border-primary"></Container>
      <Footer />
    </Container>
  );
}
