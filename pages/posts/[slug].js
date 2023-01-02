// import { Latest, Trending, PostWidget, LifeStyle } from "../components";
import { GraphQLClient, gql } from "graphql-request";
import { LifeStyle, Footer } from "../../components";
import Head from "next/head";

const graphcms = new GraphQLClient(process.env.GRAPHQL_LINK);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      coverPhoto {
        url
      }
      category
      keyWords
      content {
        text
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      content3 {
        text
        html
      }
      content3Mobile {
        text
        html
      }
      photoCredit
    }
  }
`;

const QUERY2 = gql`
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

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const { posts } = await graphcms.request(QUERY2);
  const post = data.post;
  return {
    props: {
      post,
      posts,
    },
  };
}

export default function BlogPost({ post, posts }) {
  return (
    <div>
      <Head>
        <title>{post?.title}</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={post?.keyWords} />
        <meta name="author" content={post?.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={post?.title} />
        <meta
          property="og:description"
          content={post?.content?.text.slice(0, 300)}
        />
        <meta property="og:image" content={post?.coverPhoto?.url} />
      </Head>

      <div>
        <h1 className="art-title" key={post?.id}>
          {post?.title}
        </h1>
        <div className="art-category">
          <p
            className={`${post?.category === "Trails" ? "Trails" : ""} 
          ${post?.category === "Outdoors" ? "Outdoors" : ""}
          ${post?.category === "Recipes" ? "Recipes" : ""}
          ${post?.category === "LifeStyle" ? "LifeStyle" : ""}
          ${post?.category === "Winter" ? "Winter" : ""}`}
          >
            {post?.category}
          </p>
        </div>

        <img className="art-coverphoto" src={post?.coverPhoto?.url} />
        <p className="photo-credit">{post?.photoCredit}</p>

        <div className="art-avatarauthor">
          <img className="art-avatar" src={post?.author?.avatar?.url} />
          <div>
            <h2 className="art-authordate">
              by {post?.author?.name} | {post?.datePublished}
            </h2>
          </div>
        </div>

        <div
          className="art-text"
          dangerouslySetInnerHTML={{ __html: post?.content?.html }}
        ></div>
        <div
          className="iFrame"
          dangerouslySetInnerHTML={{ __html: post?.content3?.html }}
        ></div>
        <div
          className="mobileIframe"
          dangerouslySetInnerHTML={{ __html: post?.content3Mobile?.html }}
        ></div>
      </div>

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
      <Footer />
    </div>
  );
}
