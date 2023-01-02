import React, { useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import { LifeStyle, Footer } from "../components";

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
  // #####################
  // Search bar use effect
  // #####################
  const [queryy, setQueryy] = useState("");

  return (
    <div>
      {/* add ancor links here  */}
      <div className="navbar-all-posts">
        <ul className="navbar-btn-all-posts">
          <li>
            <button className="LifeStyle li-category">LifeStyle</button>
          </li>
          <li>
            <button className="Outdoors li-category">Outdoors</button>
          </li>
          <li>
            <button className="Recipes li-category">Recipes</button>
          </li>
          <li>
            <button className="Trails li-category">Trails</button>
          </li>
          <li>
            <button className="Winter li-category">Winter</button>
          </li>
        </ul>
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Search... "
          className="input"
          onChange={(e) => setQueryy(e.target.value)}
        />
      </div>

      <div className="lifestyle-top">
        {/* later I'd like to add a select by category function here!
        I tried building it with UseEffect and Filter, but had too much trouble! */}

        {posts
          ?.filter((content) => content.title.toLowerCase().includes(queryy))
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
      <Footer />
    </div>
  );
}

export default AllPosts;
