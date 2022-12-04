import React from "react";
import Link from "next/link";

const Trending = ({
  title,
  datePublished,
  author,
  coverPhoto,
  content,
  category,
  text,
  slug,
}) => {
  return (
    <div className="trending-top-post ">
      <Link href={"/posts/" + slug}>
        <img className="img-trending" src={coverPhoto?.url} />
        <div className="post-text">
          <p
            className={`${category === "Trails" ? "Trails" : ""} 
        ${category === "Outdoors" ? "Outdoors" : ""}
        ${category === "Recipes" ? "Recipes" : ""}
        ${category === "LifeStyle" ? "LifeStyle" : ""}
        ${category === "Winter" ? "Winter" : ""}`}
          >
            {category}
          </p>{" "}
          <h2 className="post-title">{title}</h2>
          <p className="short-desc">{content?.text.substring(0, 75)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Trending;
