import { Outlet } from "react-router-dom";
import { getAllBlogPosts } from "../data";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function Blog() {
  let blogPosts = getAllBlogPosts();
  return (
    <Container>
      <Outlet />
      <Container className="text-start">
        <h3>Blogposts:</h3>
      </Container>
      <Container className="p-4">
        <Container>
          {blogPosts.map((blogPost) => {
            return (
              <Row>
                <Col className="pb-3">
                  {`${blogPost.subject}: `}
                  <Link
                    className="text-decoration-none"
                    to={`/blog/${blogPost.number}`}
                    key={blogPost.number}
                  >
                    {blogPost.titel}
                  </Link>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Container>
    </Container>
  );
}
