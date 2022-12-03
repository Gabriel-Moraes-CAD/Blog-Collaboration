import Head from "next/head";
import { Latest, Trending, PostWidget, LifeStyle } from "../components";
import { GraphQLClient, gql } from "graphql-request";
import BlogTest from "../components/BlogTest";

const graphcms = new GraphQLClient(process.env.GRAPHQL_LINK);

const QUERY = gql`
  {
    posts {
      title
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

const postss = [
  {
    title: "Best Trails",
    category: "LifeStyle",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
    html: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  // {
  //   title: "Salmon Run",
  //   category: "Trails",

  //   excerpt:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
  //   html: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  // },
  // {
  //   title: "Kayak in TO",
  //   excerpt:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
  //   html: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  // },
];

const postsWidget = [
  {
    title: "Best Trails",
    category: "LifeStyle",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
    html: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Salmon Run",
    category: "Trails",

    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
    html: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Kayak in TO",
    category: "Outdoors",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
    html: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Smoothie Bowl",
    category: "Recipes",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
    html: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const postsTrend = [
  {
    title: "Best Trails",
    category: "LifeStyle",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
    html: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Salmon Run",
    category: "Trails",

    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
    html: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  // {
  //   title: "Kayak in TO",
  //   excerpt:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
  //   html: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  // },
];

const postsLifeStyle = [
  {
    title: "Best Trails",
    category: "LifeStyle",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
    html: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Salmon Run",
    category: "Trails",

    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
    html: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Kayak in TO",
    category: "Outdoors",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores incidunt veritatis!",
    html: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

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
          {postss.map((post, index) => (
            <Latest post={post} key={post.title} />
          ))}
        </div>
        <div className="home-top-widget1">
          {postsWidget.map((post, index) => (
            <PostWidget post={post} key={post.title} />
          ))}
        </div>
        
      </div>
      <div>
        <h2 className="component-title">Trending</h2>
        <div className="trending-top">
          {postsTrend.map((post, index) => (
            <Trending post={post} key={post.title} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="component-title">LifeStyle</h2>
        <div className="lifestyle-top">
          {postsLifeStyle.map((post, index) => (
            <LifeStyle post={post} key={post.title} />
          ))}
        </div>
      </div>
      <div>
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
      </div>
    </div>
  );
}
