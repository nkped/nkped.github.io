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
        {blogPosts.map((blogPost) => {
          return (
            <Container className="">
              <Row className="border-top">
                <Col className="d-flex justify-content-start py-2">
                  <div className="">{`#${blogPost.subject}`}</div>
                </Col>
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
    </Container>
  );
}
