import Link from "next/link";
import React from "react";

const Latest = ({
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
    <div className="">
      <Link href={"/posts/" + slug}>
        <div>
          <img className="img-top" src={coverPhoto?.url} />
        </div>
        <div className="post-text">
          <p
            className={`${category === "Trails" ? "Trails" : ""} 
        ${category === "Outdoors" ? "Outdoors" : ""}
        ${category === "Recipes" ? "Recipes" : ""}
        ${category === "LifeStyle" ? "LifeStyle" : ""}
        ${category === "Winter" ? "Winter" : ""}`}
          >
            {category}
          </p>
          <h2 className="post-title">{title}</h2>
          <p className="short-desc">{content?.text.substring(0, 75)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Latest;
