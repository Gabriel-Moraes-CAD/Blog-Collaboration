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
      content2 {
        text
      }
      content3 {
        html
        text
      }
      content3Mobile {
        text
        html
      }
      content4 {
        text
      }
      contentPicture {
        url
      }
      contentPicture2 {
        url
      }
      contentPicture3 {
        url
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
        <h1 className="art-title">{post?.title}</h1>
        <p
          className={`${post?.category === "Trails" ? "Trails" : ""} 
        ${post?.category === "Outdoors" ? "Outdoors" : ""}
        ${post?.category === "Recipes" ? "Recipes" : ""}
        ${post?.category === "LifeStyle" ? "LifeStyle" : ""}
        ${post?.category === "Winter" ? "Winter" : ""}`}
        >
          {post?.category}
        </p>
        <img className="art-coverphoto" src={post?.coverPhoto?.url} />

        <div className="art-avatarauthor">
          <img className="art-avatar" src={post?.author?.avatar?.url} />
          <div>
            <h2 className="art-pubdate">{post?.datePublished}</h2>
            <h2 className="art-author">{post?.author?.name}</h2>
          </div>
        </div>

        <p>{post?.content?.text}</p>
        <img className="art-coverphoto" src={post?.contentPicture?.url} />
        <p>{post?.content2?.text}</p>
        <img className="art-coverphoto" src={post?.contentPicture2?.url} />
        <div
          className="art-text"
          dangerouslySetInnerHTML={{ __html: post?.content3?.html }}
        ></div>
        <div
          className="art-text"
          dangerouslySetInnerHTML={{ __html: post?.content3Mobile?.html }}
        ></div>
        <img className="art-coverphoto" src={post?.contentPicture3?.url} />
        <p>{post?.content4?.text}</p>
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
