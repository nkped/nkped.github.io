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
  FaRocket,
} from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiLighthouse } from "react-icons/si";
import { Footer } from "../components/footer";

export default function Skills() {
  return (
    <Container fluid className="px-3">
      <Container className="bg-dark">
        <Row className="display-2 Noto700 pb-1 px-1 mb-2 text-muted  border-bottom border-warning">
          Skills
        </Row>
        <Stack
          gap={4}
          className=" mx-auto py-5 mt-5 text-center col-9 col-sm-8 col-md-7 col-lg-5"
        >
          <Col className="fs-3 fw-semibold mb-2">
            <p>
              Min nuværende 'tech-stack' - rub og stub er med. <FaRegGrinWink />
            </p>
          </Col>
          <Col>
            <p>
              Jeg er selvfølgelig ikke ekspert, men habil i basics, og super
              nysgerrig på at udvikle mig.
            </p>
          </Col>
          <Col>
            <p>
              Mine næste mål er anført aller nederst på siden, og tæller derfor
              ikke som skills for nuværende.
            </p>
          </Col>
        </Stack>

        <Row className="justify-content-center gy-4 py-4 row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaReact />
                <Card.Title>ReactJS</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaBootstrap />
                <Card.Title>Bootstrap</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaGit />
                <Card.Title>Git</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaGithub />
                <Card.Title>Github</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaJs />
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaSass />
                <Card.Title>Scss</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaCss3 />
                <Card.Title>Css</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning  text-nowrap">
              <Card.Body>
                <FaHtml5 />
                <Card.Title>Html</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <FaLinux />
                <Card.Title>Linux</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
            <Card className="bg-dark bg-gradient border-warning text-nowrap">
              <Card.Body>
                <DiVisualstudio />
                <Card.Title>Visual</Card.Title>
                <Card.Title>Studiocode</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Stack
          gap={4}
          className="py-4 mt-2 mx-auto text-center col-9 col-sm-8 col-md-7 col-lg-5 "
        >
          <Col className="fs-4 text-center mt-3 mb-1">
            Næste læringsmål <FaRocket />
          </Col>
          <Col>
            Jeg er solgt på ideen om PWA's, der lever på nettet fremfor i
            AppStore/GooglePlay, og som virker på alle platforme ud fra een og
            samme codebase.
          </Col>
          <Col>De næste skills må derfor omhandle test samt server-side.</Col>
        </Stack>

        <Row className="gy-4 py-5 justify-content-center text-nowrap row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-5">
          <Col className="col-xs-4 col-sm-4 col-md-3 col-lg-2 col-xl-2">
            <Card border="warning" className="bg-dark bg-gradient bg-border">
              <Card.Body>
                <SiLighthouse />
                <Card.Title>Lighthouse</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-xs-4 col-sm-4 col-md-3 col-lg-2 col-xl-2">
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
