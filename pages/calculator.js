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

import { GetCalcData } from "../components/calculatorData";

import * as ga from "../lib/ga";
import FacebookPixel from "../lib/fb";

export default function Calculator() {
  const router = useRouter();

  const [selectedServiceCategory, setSelectedServiceCategory] = useState(null);
  const [selectedSubServiceCategory, setSelectedSubServiceCategory] =
    useState(null);
  const [optionPage, setOptionPage] = useState(0);

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
          {selectedServiceCategory == null ? (
            <div className="w-[60%] grid grid-cols-2 gap-2 h-full">
              {console.log(GetCalcData())}
              {GetCalcData().map((category, index) => (
                <div
                  key={index}
                  className={`w-full flex flex-col justify-center border-2 border-white hover:bg-black/10 cursor-pointer p-2 ${
                    GetCalcData().length % 2 != 0 &&
                    GetCalcData().length - 1 == index
                      ? "col-span-2"
                      : "col-span-1"
                  }`}
                  onClick={() => setSelectedServiceCategory(index)}
                >
                  <p className="text-white font-poppins mx-auto text-center font-bold text-sm">
                    {category.serviceCategory}
                  </p>
                </div>
              ))}
            </div>
          ) : selectedSubServiceCategory == null ? (
            <div className="flex flex-col justify-between w-[60%]">
              <div className="w-full h-full grid-rows-6">
                {GetCalcData()
                  .at(selectedServiceCategory)
                  .subServices.map((service, index) => (
                    <div
                      key={index}
                      className="w-full h-[calc(100%/6)] flex flex-col justify-center hover:bg-black/10 cursor-pointer p-2"
                      onClick={() => setSelectedSubServiceCategory(index)}
                    >
                      <p className="text-white font-poppins mx-auto text-center font-bold text-sm">
                        {service.service}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-between w-[60%]">
              {console.log(GetCalcData())}
              {GetCalcData()
                .at(selectedServiceCategory)
                .subServices?.at(selectedSubServiceCategory)
                .options.at(optionPage)
                .map((option, index) => (
                  <p key={index}>{option.name}</p>
                ))}
            </div>
          )}

          <div className="w-[40%] bg-black/10 h-full">
            {selectedServiceCategory == null ? (
              <div></div>
            ) : (
              <div
                className="w-full h-[40px] p-2 bg-white flex flex-col justify-center cursor-pointer"
                onClick={() => setSelectedServiceCategory(null)}
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
