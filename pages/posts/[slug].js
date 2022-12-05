// import { Latest, Trending, PostWidget, LifeStyle } from "../components";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHQL_LINK);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
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
  const post = data.post;
  return {
    props: {
      post,
    },
  };
}

export default function BlogPost({ post }) {
  return (
    <div>
      <h1> {post?.title}</h1>
      <h2>{post?.datePublished}</h2>
      <h2>{post?.author?.name}</h2>
      <img src={post?.coverPhoto?.url} />
      <img src={post?.author?.avatar?.url} />
      <div dangerouslySetInnerHTML={{ __html: post?.content.html }}></div>
    </div>
  );
}