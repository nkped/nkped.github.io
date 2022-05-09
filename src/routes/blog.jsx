import { Link, Outlet } from "react-router-dom";
import { getBlogPosts } from "../data";

export default function BlogPost() {
  let blogPosts = getBlogPosts(parseInt());
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
