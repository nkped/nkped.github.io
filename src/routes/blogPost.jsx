import { getBlogPost } from "../data";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function BlogPost() {
  let params = useParams();
  let blogPost = getBlogPost(parseInt(params.blogPostId));
  return (
    <Container>
      <h2>{blogPost.titel}</h2>
      <p>{blogPost.text}</p>
    </Container>
  );
}
