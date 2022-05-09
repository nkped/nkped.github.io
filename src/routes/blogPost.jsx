import { getBlogPost } from "../data";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  let params = useParams();
  let blogPost = getBlogPost(parseInt(params.blogPostId));
  return (
    <main>
      <h2>{blogPost.titel}</h2>
      <p>{blogPost.text}</p>
    </main>
  );
}
