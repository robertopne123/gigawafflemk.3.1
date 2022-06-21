import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Navbar } from "../components/navbar";
import { HeroServices } from "../components/services/hero";
import { AllOurServices } from "../components/services/allourservices";
import { HomeIntro } from "../components/home/intro";
import { HomeServices } from "../components/home/services";
import { HomeStats } from "../components/home/stats";
import { ProjectViewer } from "../components/home/projects";
import { Contact } from "../components/home/contact";
import { Footer } from "../components/footer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

import * as ga from "../lib/ga";
import FacebookPixel from "../lib/fb";

export default function Calculator() {
  const router = useRouter();

  const [selectedServiceCategory, setSelectedServiceCategory] = useState("");

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
        <title>
          Calculator | Gigawaffle | Web Design & Social Media Specialists
        </title>
        <meta
          name="description"
          content="Waffle-free marketing and branding specialists. Take your business to that next level with eye-catching branding, a modern responsive website and engaging social media."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <FacebookPixel />

      <Navbar colour="white" />
      <div className="bg-gigapink w-[500px] h-[350px] p-2">
        <div className="flex flex-row gap-2 w-full h-full">
          {selectedServiceCategory == "" ? (
            <div className="w-[60%] grid grid-cols-2 gap-2 h-full">
              <div
                className="w-full flex flex-col justify-center border-2 border-white hover:bg-black/10 cursor-pointer p-2"
                onClick={() => setSelectedServiceCategory("Web")}
              >
                <p className="text-white font-poppins mx-auto text-center font-bold text-sm">
                  Web Design & Development
                </p>
              </div>
              <div
                className="w-full flex flex-col justify-center border-2 border-white hover:bg-black/10 cursor-pointer p-2"
                onClick={() => setSelectedServiceCategory("Brand")}
              >
                <p className="text-white font-poppins mx-auto text-center font-bold text-sm">
                  Visual Identity & Brand Design
                </p>
              </div>
              <div
                className="w-full flex flex-col justify-center border-2 border-white hover:bg-black/10 cursor-pointer p-2 col-span-2"
                onClick={() => setSelectedServiceCategory("Social")}
              >
                <p className="text-white font-poppins mx-auto text-center font-bold text-sm">
                  Social Strategy & Content Design
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-between w-[60%]">
              <div className="w-full h-full grid-rows-6">
                <div className="w-full h-[calc(100%/6)] flex flex-col justify-center hover:bg-black/10 cursor-pointer p-2">
                  <p className="text-white font-poppins mx-auto text-center font-bold text-sm">
                    Website Design
                  </p>
                </div>
                <div className="w-full h-[calc(100%/6)] flex flex-col justify-center hover:bg-black/10 cursor-pointer p-2">
                  <p className="text-white font-poppins mx-auto text-center font-bold text-sm">
                    Express Website
                  </p>
                </div>
                <div className="w-full h-[calc(100%/6)] flex flex-col justify-center hover:bg-black/10 cursor-pointer p-2">
                  <p className="text-white font-poppins mx-auto text-center font-bold text-sm">
                    Custom Quicklinks Page
                  </p>
                </div>
                <div className="w-full h-[calc(100%/6)] flex flex-col justify-center hover:bg-black/10 cursor-pointer p-2">
                  <p className="text-white font-poppins mx-auto text-center font-bold text-sm">
                    E-Commerce Design
                  </p>
                </div>
                <div className="w-full h-[calc(100%/6)] flex flex-col justify-center hover:bg-black/10 cursor-pointer p-2">
                  <p className="text-white font-poppins mx-auto text-center font-bold text-sm">
                    Landing Page Design
                  </p>
                </div>
                <div className="w-full h-[calc(100%/6)] flex flex-col justify-center hover:bg-black/10 cursor-pointer p-2">
                  <p className="text-white font-poppins mx-auto text-center font-bold text-sm">
                    Social Media Shop
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="w-[40%] bg-black/10 h-full">
            {selectedServiceCategory == "" ? (
              <div></div>
            ) : (
              <div
                className="w-full h-[40px] p-2 bg-white flex flex-col justify-center cursor-pointer"
                onClick={() => setSelectedServiceCategory("")}
              >
                <p className="text-gigapink font-poppins mx-auto text-left font-bold text-sm">
                  Back
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
