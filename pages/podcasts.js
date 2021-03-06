import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Navbar } from "../components/navbar";
import { HeroServices } from "../components/services/hero";
import { HeroPodcasts } from "../components/podcasts/hero";
import { Info } from "../components/projects/info";
import { Enquire } from "../components/projects/enquire";
import { AllOurServices } from "../components/services/allourservices";
import { HomeIntro } from "../components/home/intro";
import { HomeServices } from "../components/home/services";
import { HomeStats } from "../components/home/stats";
import { ProjectViewer } from "../components/home/projects";
import { Contact } from "../components/home/contact";
import { Footer } from "../components/footer";

export default function Podcasts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Podcasts | Gigawaffle | Web Design & Social Media Specialists
        </title>
        <meta
          name="description"
          content="Waffle-free marketing and branding specialists. Take your business to that next level with eye-catching branding, a modern responsive website and engaging social media."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navbar colour="transparent" />
      <HeroPodcasts />
      <Info />
      <Enquire />
      <Footer />
    </div>
  );
}
