import { useEffect } from "react/cjs/react.development";
import Link from "next/dist/client/link";
import React from "react";
import { useRef } from "react/cjs/react.development";

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
      desc: "For PlaygroundBullys, we built a website that allowed for their business to be transitioned away from only being run on social media. Their new site included a portfolio of their dogs, information about their services and the ability to book timeslots with them.",
      link: "https://playgroundbullysuk.com",
      bg: "url('/grandvenuebg.jpg')",
    },
    {
      title: "My Cabin Bed",
      desc: "For PlaygroundBullys, we built a website that allowed for their business to be transitioned away from only being run on social media. Their new site included a portfolio of their dogs, information about their services and the ability to book timeslots with them.",
      link: "https://playgroundbullysuk.com",
      bg: "url('/mycabinbedbg.jpg')",
    },
    {
      title: "Swap My Energy",
      desc: "For PlaygroundBullys, we built a website that allowed for their business to be transitioned away from only being run on social media. Their new site included a portfolio of their dogs, information about their services and the ability to book timeslots with them.",
      link: "https://playgroundbullysuk.com",
      bg: "url('/swapmyenergybg.jpg')",
    },
    {
      title: "Unite Cities",
      desc: "For PlaygroundBullys, we built a website that allowed for their business to be transitioned away from only being run on social media. Their new site included a portfolio of their dogs, information about their services and the ability to book timeslots with them.",
      link: "https://playgroundbullysuk.com",
      bg: "url('/unitecitiesbg.jpg')",
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
        bgImg.style.background = projects[i].bg;
        bgImg.style.backgroundSize = "cover";
      }
    }
  }

  useEffect(() => {
    setInterval(() => {}, 0);
  }, []);

  return (
    <div className="w-full bg-black/90 bg-cover relative" id="backgroundImage">
      <div className="w-full h-[calc(100vh-82px)] overflow-y-clip top-[0px] bg-black/80">
        <div className="max-w-[1250px] mx-auto relative flex flex-row justify-end">
          <div className="absolute left-0 top-0 flex flex-col gap-8 justify-end pb-[300px] h-screen">
            <p className="font-poppins text-white w-1/2" id="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
              ipsum, feugiat at mi eget, varius vulputate nisi. Cras commodo
              nulla et dui tincidunt, ut mattis augue aliquam. Phasellus lorem
              lacus, laoreet sed lacinia non, eleifend eu ligula. Sed sodales
              eros non purus placerat, nec imperdiet tellus commodo. In hac
              habitasse platea dictumst. Aliquam aliquam sit amet ante eget
              iaculis. Phasellus suscipit pulvinar justo luctus accumsan. Sed
              consequat sodales ante.
            </p>
            <h1 id="title" className="font-parkson text-9xl text-white">
              OUR PROJECTS
            </h1>
            <div className="flex flex-row gap-4"></div>
          </div>
          <div
            className="no-scrollbar bg-contain flex flex-col gap-[100px] mt-[150px] h-screen pb-[410px] overflow-y-scroll relative"
            onScroll={() => {
              checkInViewport();
            }}
          >
            <img
              src="/projects/PGB.jpg"
              className="project w-[40%] self-end border-[5px] border-white"
            />
            <img
              src="/projects/grandvenue.jpg"
              className="project w-[40%] self-end border-[5px] border-white"
            />
            <img
              src="/projects/mycabinbed.jpg"
              className="project w-[40%] self-end border-[5px] border-white"
            />
            <img
              src="/projects/swapmyenergy.jpg"
              className="project w-[40%] self-end border-[5px] border-white"
            />
            <img
              src="/projects/unitecities.jpg"
              className="project w-[40%] self-end border-[5px] border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
