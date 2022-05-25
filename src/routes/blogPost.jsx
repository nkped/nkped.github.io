import { getBlogPost } from "../data";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export default function BlogPost() {
  let params = useParams();
  let blogPost = getBlogPost(parseInt(params.blogPostId));
  return (
    <Container>
      <Row className="fs-1 fw-semibold text-muted border-bottom border-warning">
        BlogPost
      </Row>
      <Container className="text-start  px-4 py-5 ">
        <Row>
          <Col className="bg-secondary mb-3 py-1">{`#${blogPost.subject}`}</Col>
        </Row>
        <Row className="fs-3 fw-bold text-start">
          <Col>{`${blogPost.titel}`}</Col>
        </Row>

        <Row className="border-bottom border-warning pb-3">
          <Col>
            <p className="lead">{blogPost.intro}</p>
            <p>{blogPost.text}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
