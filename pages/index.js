import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Navbar } from "../components/navbar";
import { HeroHome } from "../components/home/hero";
import { HomeIntro } from "../components/home/intro";
import { HomeServices } from "../components/home/services";
import { HomeStats } from "../components/home/stats";
import { ProjectViewer } from "../components/home/projects";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Loading } from "../components/loading";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../lib/ga";
import FacebookPixel from "../lib/fb";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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

      <FacebookPixel />

      <Loading />

      <Navbar colour="white" />
      <HeroHome />
      <HomeIntro />
      <HomeServices />
      <HomeStats />
      <ProjectViewer />
      <Contact />
      <Footer />
    </div>
  );
}
