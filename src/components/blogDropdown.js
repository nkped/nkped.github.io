import { getAllBlogPosts } from "../data";
import { NavDropdown, NavLink, Row } from "react-bootstrap";

export default function BlogDropdown() {
  let blogPosts = getAllBlogPosts();
  return (
    <div>
      <nav>
        {blogPosts.map((blogPost) => (
          <NavDropdown.Item
            href={`/blog/${blogPost.number}`}
            key={blogPost.number}
            className="text-center"
          >
            {`${blogPost.titel}`}
          </NavDropdown.Item>
        ))}
      </nav>
    </div>
  );
}
