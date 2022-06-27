import { Button, Container } from "react-bootstrap";

import { getAllBlogPosts } from "../data";

const allSubjects = [
  "react",
  "react-bootstrap",
  "react-router",
  "react-router",
  "github",
  "github",
  "github-pages",
  "git",
];

export function FilterButtons() {
  const subjectButtons = allSubjects.map((subject) => (
    <Button variant="secondary" className="m-2">
      {subject}
    </Button>
  ));
  return (
    <Container className="d-flex flex-wrap justify-content-center mb-4">
      {subjectButtons}
    </Container>
  );
}
