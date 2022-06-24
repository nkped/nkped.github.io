import { getBlogPost } from "../data";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
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
        <Container className="text-start  px-4 py-5 ">
          <Row className="fs-3 fw-bold text-start mb-2">
            <Col>{`${blogPost.titel}`}</Col>
          </Row>
          <Row>
            <Col className="mb-3 py-1">{`#${blogPost.subject}`}</Col>
          </Row>

          <Row className="pb-3">
            <Col>
              <p className="lead">{blogPost.intro}</p>
              <p>{blogPost.text}</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-5">
              <Button variant="primary" href="/#/blog">
                <ArrowReturnLeft className="me-1" />
                Blog
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
