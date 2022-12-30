import Head from "next/head";
import { Latest, Trending, PostWidget, LifeStyle, Footer } from "../components";
import { GraphQLClient, gql } from "graphql-request";

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

export default function Home({ posts }) {
  return (
    <div className="">
      <Head>
        <title>BLOG NAME</title>
        <meta property="og:type" content="website" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content=" add keywords" />
        <meta property="og:image" content="add link thumbnail here" />
        <meta name="description" content="write nice description here!" />
        <link rel="icon" href="/favicon.ico" />
        ##################### ####Facebook######## #####################
        <meta property="og:title" content="BLOG NAME" />
        <meta
          property="og:description"
          content="BRIEF DESCRIPTION OF THE BLOG"
        />
        <meta property="og:image" content="THUMBNAIL IMAGE!!" />
      </Head>

      <div className="home-top">
        <div className="home-top-post">
          {posts?.slice(0, 1).map((content) => (
            <Latest
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

        <div className="home-top-widget1">
          {posts?.slice(1, 5).map((content) => (
            <PostWidget
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
      <div>
        <h2 className="component-title">Trending</h2>
        <div className="trending-top">
          {posts?.slice(2, 4).map((content) => (
            <Trending
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

      <div>
        <h2 className="component-title">LifeStyle</h2>
        <div className="lifestyle-top">
          {posts?.slice(0, 3).map((content) => (
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
      <Footer />
    </div>
  );
}
