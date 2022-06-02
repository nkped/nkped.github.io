import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Skills() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img></Card.Img>
              <Card.Title>ReactJS</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img></Card.Img>
              <Card.Title></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>{" "}
    </Container>
  );
}
