import { Link, Outlet } from "react-router-dom";
import { getBlogPosts } from "../data";

export default function Blog() {
  let blogPosts = getBlogPosts();
  return (
    <div>
      <nav>
        {blogPosts.map((blogPost) => (
          <Link to={`/blog/${blogPost.number}`} key={blogPost.number}>
            {blogPost.titel}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
