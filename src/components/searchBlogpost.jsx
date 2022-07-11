/* Lige nu vises blogpost kun gennem searchBlogposts og ikke gennem blogPostList */

import { useSearchParams, NavLink } from "react-router-dom";
import { getAllBlogPosts } from "../data";
import { Card, Row, Col } from "react-bootstrap";

function SearchBlogpost() {
  const [searchParams, setSearchParams] = useSearchParams();
  const allBlogposts = getAllBlogPosts();

  return (
    <nav>
      <input
        className="text-center mt-3"
        placeholder="Søg blogindlæg her.."
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />

      <Row className="text-start my-4">
        <Col
          className="px-4"
          xs={{ span: 12, offset: 0 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 8, offset: 2 }}
        >
          {allBlogposts
            .filter((blogPosts) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let subject = blogPosts.subject.toLowerCase();
              return subject.startsWith(filter.toLowerCase());
            })
            .map((blogPosts) => (
              <Card bg="dark" key={blogPosts.number} className="mt-5">
                <Card.Header className="text-muted">
                  {`#${blogPosts.subject}`}
                </Card.Header>
                <Card.Body className="border-start  border-secondary">
                  <Card.Title>
                    <Card.Link
                      className="text-decoration-none Noto600"
                      href={`/#/blog/${blogPosts.number}`}
                    >
                      <h1>{blogPosts.titel}</h1>
                    </Card.Link>
                  </Card.Title>
                  <Card.Text>{blogPosts.intro}</Card.Text>
                </Card.Body>
              </Card>
            ))}
        </Col>
      </Row>
    </nav>
  );
}

export default SearchBlogpost;
