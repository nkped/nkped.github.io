import { useSearchParams } from "react-router-dom";
import { getAllBlogPosts } from "../data";

function SearchBlogpost() {
  const [searchParams, setSearchParams] = useSearchParams();
  const allBlogposts = getAllBlogPosts();

  return (
    <nav
      style={{
        borderRight: "solid 1px",
        padding: "1rem",
      }}
    >
      <input
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      {allBlogposts
        .filter((blogPosts) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let subject = blogPosts.subject.toLowerCase();
          return subject.startsWith(filter.toLowerCase());
        })
        .map((blogPosts) => (
          <NavLink to={`/blog/${blogPosts.number}`} key={blogPosts.number}>
            {blogPosts.titel}
          </NavLink>
        ))}
    </nav>
  );
}

export default SearchBlogpost;
