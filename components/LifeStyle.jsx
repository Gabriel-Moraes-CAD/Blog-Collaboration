import React from "react";

const LifeStyle = ({
  title,
  datePublished,
  author,
  coverPhoto,
  content,
  category,
  text,
}) => {
  return (
    <div className="lifestyle-top-post ">
      <img className="img-lifestyle" src={coverPhoto?.url} />
      <div className="post-text">
        {/* Use tailwind here for conditional css */}
        <p className="category-text">{category}</p>
        <h2 className="post-title">{title}</h2>
        <p className="short-desc">{content.text.substring(0, 75)}</p>
      </div>
    </div>
  );
};

export default LifeStyle;
