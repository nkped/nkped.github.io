import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Footer } from "../components/footer";
//import homePagePic from "../img/homePagePic.png";
import HomePageImage from "./HomePageImage.svg";

export default function Home() {
  return (
    <Container fluid className="bg-dark text-light">
      <Container className="pt-3">
        <h4>Hej, Nils-Kristian her!</h4>
      </Container>
      <Container className="px-5 pt-3">
        <h2>
          Jeg laver frontend-udvikling, og søger en{" "}
          <span className="text-warning ">praktikplads.</span>
        </h2>
        <img src={HomePageImage} />
      </Container>
      <Button variant="primary" className="w-25 mx-auto my-4">
        Kontakt
      </Button>
      <Container className="d-grid gap-5 border border-primary"></Container>
      <Footer />
    </Container>
  );
}
