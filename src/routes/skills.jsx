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
  FaRegGrinWink,
} from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiLighthouse } from "react-icons/si";
import { Telephone } from "react-bootstrap-icons";
import { Footer } from "../components/footer";

export default function Skills() {
  return (
    <Container className="bg-dark text-light">
      <Container className="fs-1 fw-semibold mb-2 pb-1 text-muted  border-bottom border-warning">
        <Row>Skills</Row>
      </Container>
      <Container
        border-bottom
        border-warning
        className="d-grid gap-3 py-4 border-bottom border-warning"
      >
        <Row>
          <Col>
            Her er min nuværende 'tech-stack' beskrevet - rub og stub er med.{" "}
            <FaRegGrinWink />
          </Col>
        </Row>
        <Row>
          <Col>
            Jeg er selvfølgelig ikke ekspert, men habil i basics, og super
            nysgerrig på at udvikle mig.
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            {" "}
            Mine næste mål er anført aller nederst på siden, og tæller derfor
            ikke som skills for nuværende.
          </Col>
        </Row>
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
        <Row className="fs-5 text-center mt-5 mb-2">
          <Col>Min målsætning fremover</Col>
        </Row>
        <Row>
          <Col>
            Jeg er solgt på ideen om PWA's, der lever på nettet fremfor i
            AppStore/GooglePlay, og som virker på alle platforme med blot een
            codebase.
          </Col>
          <Row>
            <Col>De næste skills må derfor være test samt server-side.</Col>
          </Row>
        </Row>
        <Row>
          <Col>
            <Card className="bg-secondary">
              <Card.Body>
                <SiLighthouse />
                <Card.Title>Lighthouse</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-secondary">
              <Card.Body>
                <TbBrandNextjs />
                <Card.Title>NextJS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}
