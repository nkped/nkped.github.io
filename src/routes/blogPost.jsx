import { getBlogPost } from "../data";

export default function BlogPost() {
  let blogPost = getBlogPost();
  return (
    <main>
      <h2>{blogPost.name}</h2>
    </main>
  );
}
