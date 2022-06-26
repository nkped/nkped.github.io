import { getBlogPost } from "../data";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Button, Stack } from "react-bootstrap";
import { ArrowReturnLeft } from "react-bootstrap-icons";

export default function BlogPost() {
  let params = useParams();
  let blogPost = getBlogPost(parseInt(params.blogPostId));
  return (
    <Container>
      <Container className="bg-dark px-0">
        <Row className="display-2 Noto700 pb-1 px-1 mb-2 text-muted  border-bottom border-warning">
          Blogpost
        </Row>
        <Stack className="text-start py-5 px-3">
          <Row>
            <Col className="pb-3">{`#${blogPost.subject}`}</Col>
          </Row>
          <Row>
            <Col>
              <h1 className="Noto600">{`${blogPost.titel}`}</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="lead">{blogPost.intro}</p>
              <p>{blogPost.text}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{blogPost.text}</p>
            </Col>
          </Row>
          <Row className="text-center mt-5">
            <Col>
              <Button variant="primary" href="/#/blog">
                <ArrowReturnLeft className="me-1" />
                Blog
              </Button>
            </Col>
          </Row>
        </Stack>
      </Container>
    </Container>
  );
}
