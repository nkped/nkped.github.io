let blogPosts = [
  {
    number: 11,
    subject: "React-Router",
    titel: "Min hacky Nav-dropdown",
    intro:
      "Blogposts vises i global navigation-dropdown, og er lavet som dynamisk liste, der ikke kræver manuel opdatering af nav ved ny post.",
    image: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.",
    author: "Nils-Kristian Pedersen",
  },
  {
    number: 22,
    subject: "React-Boostrap",
    titel: "Føles som 'full circle'",
    intro:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    image: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    author: "Nils-Kristian Pedersen",
  },
  {
    number: 33,
    subject: "Github-Pages",
    titel: "Publiser på gh-branch!",
    intro:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also.",
    image: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Nils-Kristian Pedersen",
  },
  {
    number: 44,
    subject: "Github-Pages",
    titel: "Husk min manual",
    intro:
      "Ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    image: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    author: "Nils-Kristian Pedersen",
  },
  {
    number: 55,
    subject: "NextJS",
    titel: "Nu med database",
    intro:
      "But also the leap into electronic typesetting, remaining. Lorem Ipsum is simply dummy text of the printing and typesetti.",
    image: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "Nils-Kristian Pedersen",
  },
];

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPost(number) {
  return blogPosts.find((blogPost) => blogPost.number === number);
}
