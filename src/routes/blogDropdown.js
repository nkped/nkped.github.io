import { getAllBlogPosts } from "../data";
import { NavDropdown, NavLink } from "react-bootstrap";

export default function BlogDropdown() {
  let blogPosts = getAllBlogPosts();
  return (
    <div>
      <nav>
        {blogPosts.map((blogPost) => (
          <NavDropdown.Item
            href={`/blog/${blogPost.number}`}
            key={blogPost.number}
          >
            {blogPost.titel}
          </NavDropdown.Item>
        ))}
      </nav>
    </div>
  );
}
