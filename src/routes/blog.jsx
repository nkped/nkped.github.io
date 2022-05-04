import { useParams, Link, Outlet } from "react-router-dom";
import { getBlogPost, getBlogPosts } from "../data";

export default function BlogPost() {
  let blogPosts = getBlogPosts(parseInt());
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {blogPosts.map((blogPost) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/blog/${blogPost.number}`}
            key={blogPost.number}
          >
            {blogPost.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
