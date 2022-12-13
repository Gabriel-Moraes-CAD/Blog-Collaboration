import Head from "next/head";
import { Latest, Trending, PostWidget, LifeStyle } from "../components";
import { GraphQLClient, gql } from "graphql-request";
import BlogTest from "../components/BlogTest";

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

let box = typeof document !== 'undefined' && document.querySelector('.product-container');
console.log(box);

const btnpresspre = () => {
  let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft - width;
  console.log(width)
}

const btnpressnext = () => {
  let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft + width;
  console.log(width)
}

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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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

      <div className="product-carousel">
        <button className="pre-btn" onClick={btnpresspre}><p>&lt;</p></button>
        <button className="next-btn"onClick={btnpressnext}><p>&gt;</p></button>
        <h2 className="component-title">LifeStyle</h2>
          <div className="lifestyle-top product-container">
            {posts?.slice(0, 5).map((content) => (
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
      {/* <div>
        {posts?.slice(0, 3).map((content) => (
          <BlogTest
            title={content.title}
            datePublished={content.datePublished}
            author={content.author}
            coverPhoto={content.coverPhoto}
            key={content.id}
            avatar={content.author}
            content={content.content}
            category={content.category}
          />
        ))}
      </div> */}
    </div>
  );
}
