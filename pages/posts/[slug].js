// import { Latest, Trending, PostWidget, LifeStyle } from "../components";
import { GraphQLClient, gql } from "graphql-request";
import { Latest, Trending, PostWidget, LifeStyle } from "../../components";

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
      content {
        html
        text
      }
      author {
        name
        avatar {
          url
        }
      }
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
      <div>
        <h1> Post title: {post?.title}</h1>
        <h2> Published dATE: {post?.datePublished}</h2>
        <h2>Author: {post?.author?.name}</h2>
        <img src={post?.coverPhoto?.url} />
        <p
          className={`${post?.category === "Trails" ? "Trails" : ""} 
        ${post?.category === "Outdoors" ? "Outdoors" : ""}
        ${post?.category === "Recipes" ? "Recipes" : ""}
        ${post?.category === "LifeStyle" ? "LifeStyle" : ""}
        ${post?.category === "Winter" ? "Winter" : ""}`}
        >
          {post?.category}
        </p>
        <img src={post?.author?.avatar?.url} />
        <div dangerouslySetInnerHTML={{ __html: post?.content.html }}></div>
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
    </div>
  );
}
