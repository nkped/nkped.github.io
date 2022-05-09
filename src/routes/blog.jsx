import { Outlet } from "react-router-dom";
import { getAllBlogPosts } from "../data";
import { Link } from "react-router-dom";

export default function Blog() {
  let blogPosts = getAllBlogPosts();
  return (
    <div>
      <Outlet />
      <div>
        <h3>Seneste blogposts:</h3>
      </div>
      <nav>
        {blogPosts.map((blogPost) => (
          <Link to={`/blog/${blogPost.number}`} key={blogPost.number}>
            {blogPost.titel}
          </Link>
        ))}
      </nav>
    </div>
  );
}
