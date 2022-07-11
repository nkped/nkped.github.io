/* Denne side er ikke aktiveret, alle blogpost vises som links af searchBlogpost.jsx*/

function SeeAllBlogposts() {
  return (
    <div>
      <Button
        variant="secondary"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Se alle blogindlæg!
      </Button>
      <Collapse in={open}>
        <div>
          <BlogPostList />
        </div>
      </Collapse>
    </div>
  );
}
