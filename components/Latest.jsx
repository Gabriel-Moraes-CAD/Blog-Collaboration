import React from "react";
import PostWidget from "./PostWidget";

const Latest = ({ post }) => {
  return (
    <div className="home-top">
      <div className="home-top-post">
        <div>
          <img className="img-top" src={post.html} />
        </div>
        <div className="post-text">
          {/* Use tailwind here for conditional css */}
          <p className="category-text">{post.category}</p>
          <h2 className="post-title">{post.title}</h2>
          <p className="short-desc">{post.excerpt}</p>
        </div>
      </div>
      <div className="latest-post-component">
        <PostWidget />
      </div>
    </div>
  );
};

export default Latest;
