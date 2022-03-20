import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { getPosts } from "../lib/api";
import { HeroBlog } from "../components/blog/hero";
import { BlogContainer } from "../components/blog/blogContainer";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gigawaffle | Web Design & Social Media Specialists</title>
        <meta
          name="description"
          content="Waffle-free marketing and branding specialists. Take your business to that next level with eye-catching branding, a modern responsive website and engaging social media."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navbar colour="white" />
      <HeroBlog />
      <BlogContainer posts={posts} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}
