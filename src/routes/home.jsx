import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Footer } from "../components/footer";
//import homePagePic from "../img/homePagePic.png";
//import BlueHomePageImage from "./BlueHomePageImage.svg";
import YellowHomePageImage from "./YellowHomePageImage.svg";

export default function Home() {
  return (
    <Container fluid className="bg-dark text-light">
      <Container className="px-5 pt-3">
        <Row>
          <Col className="fs-2 fw-semibold">
            Frontend-udvikler søger{" "}
            <span className="fs-1 text-warning">praktikplads</span>
          </Col>
        </Row>

        <Container fluid className="my-4">
          <Image fluid src={YellowHomePageImage} />
        </Container>
        <Button variant="primary" className="w-25 mx-auto my-4">
          Kontakt
        </Button>
        <Container>
          <Footer />
        </Container>
      </Container>
    </Container>
  );
}
