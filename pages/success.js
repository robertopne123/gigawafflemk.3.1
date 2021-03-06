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
import { Thanks } from "../components/thanks";

export default function Success() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Thanks for your enquiry | Gigawaffle | Web Design & Social Media
          Specialists
        </title>
        <meta
          name="description"
          content="Waffle-free marketing and branding specialists. Take your business to that next level with eye-catching branding, a modern responsive website and engaging social media."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navbar colour="white" />
      <Thanks />
    </div>
  );
}
