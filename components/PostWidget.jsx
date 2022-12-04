import React from "react";
import Link from "next/link";

const PostWidget = ({ post }) => {
  return (
    <div className="home-top-widget2">
      <div className="post-text-container">
        {/* Use tailwind here for conditional css */}
        <div className="img1">
          <img className="img-widget" src={post.html} />
        </div>
        <div className="texts2">
          <p className="category-text">{post.category}</p>
          <h2 className="post-title">{post.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default PostWidget;