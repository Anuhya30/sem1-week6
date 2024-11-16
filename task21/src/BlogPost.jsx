import React from "react";
import "./BlogPost.css";

const BlogPost = ({ title, content, author }) => {
  return (
    <div className="blog-post">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-content">{content}</p>
      <p className="blog-author">Written by: {author}</p>
    </div>
  );
};

export default BlogPost;
