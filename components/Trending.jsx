import React from "react";

const Trending = ({ post }) => {
  return (
    <div className="trending-top-post ">
      <img className="img-trending" src={post.html} />
      <div className="post-text">
        {/* Use tailwind here for conditional css */}
        <p className="category-text">{post.category}</p>
        <h2 className="post-title">{post.title}</h2>
        <p className="short-desc">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default Trending;
