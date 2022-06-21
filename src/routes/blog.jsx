import { Button, Container, Collapse, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import BlogPostList from "./blogPostList";
import { useState } from "react";
import { Footer } from "../components/footer";

export default function Blog() {
  const [open, setOpen] = useState(false);
  return (
    <Container fluid>
      <Outlet />
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
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
