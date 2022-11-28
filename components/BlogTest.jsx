import React from "react";

export default function BlogTest({
  title,
  datePublished,
  author,
  coverPhoto,
  content,
  category,
}) {
  return (
    <div>
      <h1> {title}</h1>
      <h2>{datePublished}</h2>
      <h2>{author?.name}</h2>
      <img src={coverPhoto?.url} />
      <img src={author?.avatar?.url} />
      <p
        className={`${category === "Trails" ? "blue" : ""} 
        ${category === "Outdoors" ? "green" : ""}`}
      >
        {category}
      </p>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
  );
}
