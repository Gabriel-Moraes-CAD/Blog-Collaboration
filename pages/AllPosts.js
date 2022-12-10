import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import { Latest, Trending, PostWidget, LifeStyle } from "../components";

const graphcms = new GraphQLClient(process.env.GRAPHQL_LINK);

const QUERY = gql`
  {
    posts {
      title
      id
      slug
      datePublished
      coverPhoto {
        id
        url
      }
      category
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        text
        html
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
  };
}

function AllPosts({ posts }) {
  return (
    <div>
      {/* add ancor links here  */}
      <div className="navbar-all-posts">
        <ul className="navbar-btn-all-posts">
          <li className="LifeStyle li-category">LifeStyle</li>
          <li className="Outdoors li-category">Outdoors</li>
          <li className="Recipes li-category">Recipes</li>
          <li className="Trails li-category">Trails</li>
          <li className="Winter li-category">Winter</li>
        </ul>
      </div>
      <div className="lifestyle-top-title">
        <h2 className="LifeStyle">LifeStyle</h2>
      </div>
      <div className="lifestyle-top">
        {posts
          ?.filter((content) => content.category === "LifeStyle")
          .map((content) => (
            <LifeStyle
              title={content.title}
              datePublished={content.datePublished}
              author={content.author}
              coverPhoto={content.coverPhoto}
              key={content.id}
              avatar={content.author}
              content={content.content}
              category={content.category}
              text={content.text}
              slug={content.slug}
            />
          ))}
      </div>
      <div className="lifestyle-top-title">
        <h2 className="Outdoors">Outdoors</h2>
      </div>
      <div className="lifestyle-top">
        {posts
          ?.filter((content) => content.category === "Outdoors")
          .map((content) => (
            <LifeStyle
              title={content.title}
              datePublished={content.datePublished}
              author={content.author}
              coverPhoto={content.coverPhoto}
              key={content.id}
              avatar={content.author}
              content={content.content}
              category={content.category}
              text={content.text}
              slug={content.slug}
            />
          ))}
      </div>
      <div className="lifestyle-top-title">
        <h2 className="Recipes">Recipes</h2>
      </div>
      <div className="lifestyle-top">
        {posts
          ?.filter((content) => content.category === "Recipes")
          .map((content) => (
            <LifeStyle
              title={content.title}
              datePublished={content.datePublished}
              author={content.author}
              coverPhoto={content.coverPhoto}
              key={content.id}
              avatar={content.author}
              content={content.content}
              category={content.category}
              text={content.text}
              slug={content.slug}
            />
          ))}
      </div>
      <div className="lifestyle-top-title">
        <h2 className="Trails">Trails</h2>
      </div>
      <div className="lifestyle-top">
        {posts
          ?.filter((content) => content.category === "Trails")
          .map((content) => (
            <LifeStyle
              title={content.title}
              datePublished={content.datePublished}
              author={content.author}
              coverPhoto={content.coverPhoto}
              key={content.id}
              avatar={content.author}
              content={content.content}
              category={content.category}
              text={content.text}
              slug={content.slug}
            />
          ))}
      </div>
      <div className="lifestyle-top-title">
        <h2 className="Winter">Winter</h2>
      </div>
      <div className="lifestyle-top">
        {posts
          ?.filter((content) => content.category === "Winter")
          .map((content) => (
            <LifeStyle
              title={content.title}
              datePublished={content.datePublished}
              author={content.author}
              coverPhoto={content.coverPhoto}
              key={content.id}
              avatar={content.author}
              content={content.content}
              category={content.category}
              text={content.text}
              slug={content.slug}
            />
          ))}
      </div>
    </div>
  );
}

export default AllPosts;
