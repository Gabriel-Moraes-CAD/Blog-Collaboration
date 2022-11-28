import Head from "next/head";
import { Latest, Trending, PostWidget, LifeStyle } from "../components";

const posts = [
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
  {
    title: "Kayak in TO",
    category: "Outdoors",
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

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>BLOG NAME</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-top">
        <div className="home-top-post">
          {posts.map((post, index) => (
            <Latest post={post} key={post.title} />
          ))}
        </div>
        <div className="top-latest-post-widget1">
          <h1>Latest Post Widget</h1>
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
    </div>
  );
}
