import React from "react";
import { Container, Row, Col, Card, Stack } from "react-bootstrap";
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
    <Container fluid className="bg-dark text-light">
      <Container>
        <Row className="fs-1 fw-semibold mb-2 pb-1 text-muted  border-bottom border-warning">
          Skills
        </Row>
        <Stack
          gap={4}
          className=" mx-auto my-5 pt-4 text-center col-9 col-sm-8 col-md-7 col-lg-5"
        >
          <Col>
            Her er min nuværende 'tech-stack' beskrevet - rub og stub er med.{" "}
            <FaRegGrinWink />
          </Col>
          <Col>
            Jeg er selvfølgelig ikke ekspert, men habil i basics, og super
            nysgerrig på at udvikle mig.
          </Col>
          <Col>
            Mine næste mål er anført aller nederst på siden, og tæller derfor
            ikke som skills for nuværende.
          </Col>
        </Stack>
        <Row className=" justify-content-center py-4 mt-4 row-cols-xs-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          <Col className="col-xs-auto col-sm-auto col-md-3 col-lg-2 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaReact />
                <Card.Title>ReactJS</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-auto col-sm-auto col-md-3 col-lg-2 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaBootstrap />
                <Card.Title>Bootstrap</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-xs-auto col-sm-auto col-md-3 col-lg-2 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaGit />
                <Card.Title>Git</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-auto col-sm-auto col-md-3 col-lg-2 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaGithub />
                <Card.Title>Github</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-auto col-sm-auto col-md-3 col-lg-2 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaLinux />
                <Card.Title>Linux</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-auto col-sm-auto col-md-3 col-lg-2 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <DiVisualstudio />
                <Card.Title>Visual</Card.Title>
                <Card.Title>Studiocode</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-xs-auto col-sm-auto col-md-3 col-lg-2 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaJs />
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-auto col-sm-auto col-md-3 col-lg-2 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaSass />
                <Card.Title>Scss</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-auto col-sm-auto col-md-3 col-lg-2 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaCss3 />
                <Card.Title>Css</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-auto col-sm-auto col-md-3 col-lg-2 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning  text-nowrap">
              <Card.Body>
                <FaHtml5 />
                <Card.Title>Html</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Stack
          gap={5}
          className="col-9 col-sm-8 col-md-7 col-lg-5 mx-auto my-5 pt-4 text-center"
        >
          <Col className="fs-5 text-center mt-3 mb-1">
            Min målsætning fremover
          </Col>
          <Col>
            Jeg er solgt på ideen om PWA's, der lever på nettet fremfor i
            AppStore/GooglePlay, og som virker på alle platforme med blot een
            codebase.
          </Col>
          <Col>De næste skills må derfor være test samt server-side.</Col>
        </Stack>
        <Row>
          <Col>
            <Card border="warning" className="bg-dark bg-gradient bg-border">
              <Card.Body>
                <SiLighthouse />
                <Card.Title>Lighthouse</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card border="warning" className="bg-dark bg-gradient bg-border">
              <Card.Body>
                <TbBrandNextjs />
                <Card.Title>NextJS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    </Container>
  );
}

/*col-8 col-sm-7 col-md-5 col-lg-4 mx-auto mt-5 text-center */
/* */
