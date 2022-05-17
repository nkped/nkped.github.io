import { Outlet } from "react-router-dom";
import { getAllBlogPosts } from "../data";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Footer } from "../components/footer";

export default function Blog() {
  let blogPosts = getAllBlogPosts();
  return (
    <Container fluid className="bg-dark text-light">
      <Outlet />
      <Container className="fs-4 fw-semibold text-center">
        <Row>
          <Col>Blogposts</Col>
        </Row>
      </Container>
      <Container className="p-4">
        {blogPosts.map((blogPost) => {
          return (
            <Container className="border-top text-center py-3">
              <Row>
                <Col>{`#${blogPost.subject}`}</Col>
              </Row>
              <Row className="">
                <Col>
                  <Link
                    className="text-decoration-none"
                    to={`/blog/${blogPost.number}`}
                    key={blogPost.number}
                  >
                    <h4>{blogPost.titel}</h4>
                  </Link>
                </Col>
                <Row>
                  <Col className="pb-5">{blogPost.intro}</Col>
                </Row>
              </Row>
            </Container>
          );
        })}
      </Container>
      <Footer />
    </Container>
  );
}
