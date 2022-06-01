import { Button, Container, Collapse, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import BlogPostList from "./blogPostList";
import { useState } from "react";
import { Footer } from "../components/footer";

export default function Blog() {
  const [open, setOpen] = useState(false);
  return (
    <Container className="bg-dark text-light">
      <Outlet />
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="mb-4"
      >
        Se alle blogindlæg!
      </Button>
      <Collapse in={open}>
        <div>
          <BlogPostList />
        </div>
      </Collapse>
      <Footer />
    </Container>
  );
}
