const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  if (blogs.length === 0) return 0;
  let likes = 0;
  blogs.forEach((blog) => {
    likes += blog.likes;
  });
  return likes;
};

const favoriteBlog = (blogs) => {
  let maxLikes = 0;
  blogs.forEach((blog) => (maxLikes = Math.max(maxLikes, blog.likes)));
  const blog = blogs.find((b) => b.likes === maxLikes);
  return {
    title: blog.title,
    author: blog.author,
    likes: blog.likes,
  };
};

const mostBlogs = (blogs) => {
  const authors = new Map();
  let maxBlogs = 0;
  blogs.forEach((blog) => {
    if (authors.has(blog.author)) {
      authors.set(blog.author, authors.get(blog.author) + 1);
    } else {
      authors.set(blog.author, 1);
    }
    maxBlogs = Math.max(maxBlogs, authors.get(blog.author));
  });
  authors.forEach((blogs, author) => {
    if (blogs === maxBlogs) {
      return {
        blogs,
        author,
      };
    }
  });
  return {};
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
