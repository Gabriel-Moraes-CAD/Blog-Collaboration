import React from "react";
import Link from "next/link";

const PostWidget = ({
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
    <div className="home-top-widget2">
      <Link href={"/posts/" + slug}>
        <div className="post-text-container">
          <div className="img1">
            <img className="img-widget" src={coverPhoto?.url} />
          </div>
          <div className="texts2">
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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostWidget;
