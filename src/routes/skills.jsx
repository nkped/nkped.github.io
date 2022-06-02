import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaReact,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaJs,
  FaSass,
  FaCss3,
  FaHtml5,
  FaLinux,
} from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { Footer } from "../components/footer";

export default function Skills() {
  return (
    <Container className="bg-dark text-light">
      <Container border-bottom border-warning className="d-grid gap-3">
        <Row>
          <Col>
            <Card className="bg-secondary">
              <Card.Body>
                <FaReact />
                <Card.Title>ReactJS</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-secondary">
              <Card.Body>
                <FaBootstrap />
                <Card.Title>Bootstrap</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="bg-secondary">
              <Card.Body>
                <FaGit />
                <Card.Title>Git</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-secondary">
              <Card.Body>
                <FaGithub />
                <Card.Title>Github</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>{" "}
        <Row>
          <Col>
            <Card className="bg-secondary">
              <Card.Body>
                <FaLinux />
                <Card.Title>Linux</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-secondary">
              <Card.Body>
                <DiVisualstudio />
                <Card.Title>Visual Studiocode</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="bg-secondary">
              <Card.Body>
                <FaJs />
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-secondary">
              <Card.Body>
                <FaSass />
                <Card.Title>Scss</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>{" "}
        <Row>
          <Col>
            <Card className="bg-secondary">
              <Card.Body>
                <FaCss3 />
                <Card.Title>Css</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-secondary">
              <Card.Body>
                <FaHtml5 />
                <Card.Title>Html</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>{" "}
      </Container>
      <Footer />
    </Container>
  );
}
