import { Outlet } from "react-router-dom";
import { getAllBlogPosts } from "../data";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
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
        {blogPosts.map((blogPost) => (
          <Card bg="secondary" key={blogPost.number} className="mb-4">
            {console.log(blogPost.number)}
            <Card.Header>{`#${blogPost.subject}`}</Card.Header>
            <Card.Body>
              <Card.Title>
                <Card.Link
                  className="text-decoration-none"
                  href={`/blog/${blogPost.number}`}
                >
                  {blogPost.titel}
                </Card.Link>
              </Card.Title>
              <Card.Text>{blogPost.intro}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Footer />
    </Container>
  );
}
