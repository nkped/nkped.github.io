import { Button, Container, Collapse, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import BlogPostList from "./blogPostList";
import { useState } from "react";
import { Footer } from "../components/footer";
import { FilterButtons } from "../components/filterButtons";
import SearchBlogpost from "../components/searchBlogpost";

export default function Blog() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Container className="bg-dark px-0">
        <Outlet />
        <SearchBlogpost />

        <Footer />
      </Container>
    </Container>
  );
}
