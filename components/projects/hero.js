import { useEffect } from "react";
import Link from "next/dist/client/link";
import React from "react";
import { useRef } from "react";

export const HeroProjects = () => {
  let elementsCol = "";

  const customRef = useRef();

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  let projects = [
    {
      title: "PlaygroundBullysUK",
      desc: "PlaygroundBullys was a business started over on Instagram and has grown to nearly 10 thousand followers and over 3 thousand followers on Tiktok. They approached us for a website that made running their business smoother. Typically, they took bookings and enquiries via Instagram direct messages, which was hard to maintain as they grew, so this created their demand for a website. We created a unique design, based around their brand, that allowed customers to create bookings, view their portfolio of dogs and learn more about their services.",
      link: "https://playgroundbullysuk.com",
      bg: "url('/playgroundbg.jpg')",
    },
    {
      title: "Grand Venue",
      desc: "Grand Venue is an event based service which provides a variety of events such as Weddings, Conferences, Catering & Car Hire. We had been contacted by GrandVenue to design another side of their website for their venue in Preston, this was achieved by splitting their homepage in two to show both their locations in Blackburn and Preston.",
      link: "https://playgroundbullysuk.com",
      bg: "url('/grandvenuebg.jpg')",
    },
    {
      title: "My Cabin Bed",
      desc: "My Cabin Bed Contacted us to help build a new website for their e-commerce. They already had an old website but need it to be brought to date and made to fit in with their new brand guidelines off the company. The website features a simple design that allows the customers to navigate the catalog with ease and a streamlined checkout service that allows the customer the check out in seconds. We have also managed their social media that have grown by 132 followers and increased in post engagements by 689%.",
      link: "https://playgroundbullysuk.com",
      bg: "url('/mycabinbedbg.jpg')",
    },
    {
      title: "Swap My Energy",
      desc: "For Swap My energy, We created a bespoke design from the ground up, which allows the user to elegantly switch between the business and residential Features of the site. Other features that we developed for the website are a FAQ section and a document upload section to help aid in energy quotes.",
      link: "https://playgroundbullysuk.com",
      bg: "url('/swapmyenergybg.jpg')",
    },
    {
      title: "Unite Cities",
      desc: "Unite Cities asked us to create them a stylish and modern website design, that could show off their service that they provide and have a live customer review section linked to their google reviews. Unite Cities also wanted an embedded quote forum that would allow them the ability to drastically increase the speed that they send out quotes to customers.",
      link: "https://playgroundbullysuk.com",
      bg: "url('/unitecitiesbg.jpg')",
    },
    {
      title: "Deltic Business",
      desc: "Deltic wanted a stunning and clear website design to get their newly formed business off the ground. The company works a lot with small to medium size businesses offering business insurance to payment solutions so wanted a website that is easy to read but still looking professional. We have also created and set up custom email addresses for their team to help aid in the professional feel. We are soon to create and launch Deltic's social media accounts that will follow the brand guideline and create that established business feel.",
      link: "https://playgroundbullysuk.com",
      bg: "url('/delticbusinessbg.jpg')",
    },
  ];

  function checkInViewport() {
    const elements = document.getElementsByClassName("project");
    const title = document.getElementById("title");
    const desc = document.getElementById("desc");
    const leftLink = document.getElementById("leftLink");
    const bgImg = document.getElementById("backgroundImage");

    let element = "";

    for (let i = 0; i < elements.length; i++) {
      if (isInViewport(elements[i])) {
        console.log(projects[i].title + ": " + i);
        title.innerHTML = projects[i].title;
        desc.innerHTML = projects[i].desc;
        bgImg.style.backgroundColor = "#000000";
        bgImg.style.backgroundImage = projects[i].bg;
        bgImg.style.backgroundSize = "cover";
      }
    }
  }

  useEffect(() => {
    setInterval(() => {}, 0);
  }, []);

  return (
    <div
      className="w-full bg-black bg-cover relative placeholder:bg-black"
      id="backgroundImage"
    >
      <div className="w-full h-[calc(100vh-82px)] overflow-y-clip top-[0px] bg-black/80">
        <div className="max-w-[1250px] mx-auto relative md:flex md:flex-row flex-col justify-end px-4">
          <div className="md:absolute left-0 top-0 flex flex-col gap-8 md:justify-end md:pb-[300px] md:h-screen md:px-4">
            <p
              className="font-poppins text-white md:w-1/2 lg2:text-lg lg:text-md sm2:text-base sm3:text-sm text-xs md:min-h-[250px] min-h-[200px] max-h-[200px]"
              id="desc"
            >
              Here you can find all of the projects we&apos;ve worked on.
              You&apos;ll find web design projects, branding projects and social
              media that we&apos;ve managed.
              <br />
              <br />
              You can look through all of our projects by scrolling
              <span className="md:inline hidden"> down</span>
              <span className="md:hidden inline"> to the right</span>.
            </p>
            <h1
              id="title"
              className="font-parkson lg2:text-9xl lg:text-8xl sm2:text-7xl sm3:text-5xl text-5xl text-white"
            >
              OUR PROJECTS
            </h1>
            <div className="flex flex-row gap-4"></div>
          </div>
          <div
            className="no-scrollbar bg-contain flex md:flex-col flex-row gap-[100px] md:mt-[100px] md:h-screen h-[400px] md:pb-[410px] pb-0 md:overflow-y-scroll overflow-x-scroll relative"
            onScroll={() => {
              checkInViewport();
            }}
          >
            <img
              src="/projects/PGB.jpg"
              className="project md:w-[40%] md:h-auto h-[100%] self-end border-[5px] border-white"
            />
            <img
              src="/projects/grandvenue.jpg"
              className="project md:w-[40%] md:h-auto h-[100%] self-end border-[5px] border-white"
            />
            <img
              src="/projects/mycabinbed.jpg"
              className="project md:w-[40%] md:h-auto h-[100%] self-end border-[5px] border-white"
            />
            <img
              src="/projects/swapmyenergy.jpg"
              className="project md:w-[40%] md:h-auto h-[100%] self-end border-[5px] border-white"
            />
            <img
              src="/projects/unitecities.jpg"
              className="project md:w-[40%] md:h-auto h-[100%] self-end border-[5px] border-white"
              id="unitecities"
            />
            <img
              src="/projects/delticbusiness.jpg"
              className="project md:w-[40%] md:h-auto h-[100%] self-end border-[5px] border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
