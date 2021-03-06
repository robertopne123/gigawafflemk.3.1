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
import Link from "next/link";

import * as ga from "../lib/ga";
import { useState } from "react";

export default function Links() {
  const linkWeb = () => {
    ga.event({
      action: "linksPageClick",
      params: {
        location: "Web",
      },
    });
  };
  const linkIG = () => {
    ga.event({
      action: "linksPageClick",
      params: {
        location: "IG",
      },
    });
  };
  const linkTT = () => {
    ga.event({
      action: "linksPageClick",
      params: {
        location: "TT",
      },
    });
  };
  const linkLI = () => {
    ga.event({
      action: "linksPageClick",
      params: {
        location: "LI",
      },
    });
  };
  const linkFB = () => {
    ga.event({
      action: "linksPageClick",
      params: {
        location: "FB",
      },
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Links | Gigawaffle | Web Design & Social Media Specialists
        </title>
        <meta
          name="description"
          content="Waffle-free marketing and branding specialists. Take your business to that next level with eye-catching branding, a modern responsive website and engaging social media."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Loading />

      <div className="p-4 flex flex-col justify-center gap-4 bg-gigapink h-screen">
        <img src="/logo.svg" className="w-[70px] h-[70px] mx-auto"></img>
        <Link href="/">
          <a onClick={() => linkWeb()}>
            <p className="font-parkson text-6xl text-center text-white hover:text-black">
              Website
            </p>
          </a>
        </Link>
        <Link href="https://instagram.com/gigawaffleuk">
          <a onClick={() => linkIG()}>
            <p className="font-parkson text-6xl text-center text-white hover:text-black">
              Instagram
            </p>
          </a>
        </Link>
        <Link href="https://tiktok.com/@gigawaffleuk">
          <a onClick={() => linkTT()}>
            <p className="font-parkson text-6xl text-center text-white hover:text-black">
              Tiktok
            </p>
          </a>
        </Link>
        <Link href="https://linkedin.com/company/gigawaffle">
          <a onClick={() => linkLI()}>
            <p className="font-parkson text-6xl text-center text-white hover:text-black">
              LinkedIn
            </p>
          </a>
        </Link>
        <Link href="https://facebook.com/gigawaffleuk">
          <a onClick={() => linkFB()}>
            <p className="font-parkson text-6xl text-center text-white hover:text-black">
              Facebook
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}
