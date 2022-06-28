import { Button, Container } from "react-bootstrap";

import { getAllSubjects } from "../data";

export function FilterButtons() {
  const allSubjects = getAllSubjects();

  const uniqueSubjects = [...new Set(allSubjects)];

  const subjectButtons = uniqueSubjects.map((subject) => (
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
