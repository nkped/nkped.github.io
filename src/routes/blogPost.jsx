import { getBlogPost } from "../data";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";

export default function BlogPost() {
  let params = useParams();
  let blogPost = getBlogPost(parseInt(params.blogPostId));
  return (
    <Container>
      <Row className="fs-1 fw-semibold text-muted border-bottom border-warning">
        BlogPost
      </Row>
      <Container className="text-start  px-4 py-5 ">
        <Row className="fs-3 fw-bold text-start mb-2">
          <Col>{`${blogPost.titel}`}</Col>
        </Row>
        <Row>
          <Col className="mb-3 py-1">{`#${blogPost.subject}`}</Col>
        </Row>

        <Row className="border-bottom border-warning pb-3">
          <Col>
            <p className="lead">{blogPost.intro}</p>
            <p>{blogPost.text}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" href="/blog">
              Blog
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
