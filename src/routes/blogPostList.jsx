import { Outlet } from "react-router-dom";
import { getAllBlogPosts } from "../data";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Footer } from "../components/footer";

export default function BlogPostList() {
  let blogPosts = getAllBlogPosts();
  return (
    <Container className="bg-dark">
      <Row className="display-2 Noto700 pb-1 px-1 my-5 text-start text-muted  border-bottom border-warning">
        Blogposts
      </Row>
      <Row className="text-start my-4">
        <Col
          className="px-4"
          xs={{ span: 12, offset: 0 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 8, offset: 2 }}
        >
          {blogPosts.map((blogPost) => (
            <Card bg="dark" key={blogPost.number} className="mt-5">
              <Card.Header className="text-muted">{`#${blogPost.subject}`}</Card.Header>
              <Card.Body className="border-start  border-secondary">
                <Card.Title>
                  <Card.Link
                    className="text-decoration-none Noto600"
                    href={`/#/blog/${blogPost.number}`}
                  >
                    <h1>{blogPost.titel}</h1>
                  </Card.Link>
                </Card.Title>
                <Card.Text>{blogPost.intro}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
