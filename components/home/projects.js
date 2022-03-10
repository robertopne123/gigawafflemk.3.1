import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

export const ProjectViewer = () => {
  const size = useWindowSize();

  useEffect(() => {
    ProjectViewer();
    setInterval(() => {}, 1000);
  }, []);

  function ProjectViewer() {
    let projectsGroup = document.getElementById("projects");

    let projects = projectsGroup.childNodes;

    let randomSpeed = "";

    for (let i = 0; i < projects.length; i++) {
      let randomX = Math.floor(Math.random() * parent.innerWidth);
    }
  }

  function ProjectViewerLeft() {
    let projectsGroup = document.getElementById("projects");

    let x = projectsGroup.scrollLeft;

    projectsGroup.scrollBy({
      left: -100,
      behavior: "smooth",
    });

    console.log(projectsGroup.scrollLeft);
  }

  function ProjectViewerRight() {
    let projectsGroup = document.getElementById("projects");

    let x = projectsGroup.scrollRight;

    projectsGroup.scrollBy({
      left: 100,
      behavior: "smooth",
    });

    console.log(projectsGroup.scrollRight);
  }

  return (
    <div className="w-full py-20 bg-black overflow-clip px-4">
      <h3 className="text-white font-parkson text-5xl max-w-[1010px] mx-auto">
        Projects
      </h3>
      <div className="flex flex-row mt-10 w-[1250px] mx-auto gap-10">
        <div className="flex flex-col justify-center">
          <div className="rounded-full flex flex-col justify-center">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group w-[30px] h-[30px] hover:scale-110"
              onClick={() => {
                ProjectViewerLeft();
              }}
            >
              <path
                d="M0.430991 10.8221L13.431 19.8221C13.581 19.9259 13.7566 19.9866 13.9387 19.9978C14.1208 20.009 14.3025 19.9702 14.4641 19.8855C14.6257 19.8009 14.761 19.6736 14.8555 19.5175C14.95 19.3614 14.9999 19.1825 15 19.0001V1.00005C15.0001 0.817529 14.9503 0.638454 14.8559 0.482234C14.7615 0.326014 14.6261 0.198608 14.4645 0.113824C14.3029 0.0290394 14.1211 -0.00988955 13.9389 0.00125612C13.7567 0.0124018 13.5811 0.0731969 13.431 0.177053L0.430991 9.17705C0.29855 9.26948 0.190388 9.39253 0.115702 9.53573C0.0410156 9.67893 0.00201416 9.83805 0.00201416 9.99955C0.00201416 10.1611 0.0410156 10.3202 0.115702 10.4634C0.190388 10.6066 0.29855 10.7296 0.430991 10.8221V10.8221Z"
                fill="white"
                className="group-hover:fill-gigapink"
              />
            </svg>
          </div>
        </div>
        <div
          className="scrollbar-thin scrollbar-track-gigapink scrollbar-thumb-gigablue flex flex-row gap-10 mx-auto overflow-x-scroll overflow-y-hidden relative snap-x snap-mandatory w-[1010px] pb-2 pt-10 px-10"
          id="projects"
        >
          <div className="transform transition duration-200 hover:scale-110 origin-bottom-left bg-pgb bg-cover min-h-[270px] min-w-[216px] border-2 border-white snap-start snap-always"></div>
          <div className="transform transition duration-200 hover:scale-110 origin-bottom-left bg-grandvenue bg-cover min-h-[270px] min-w-[216px] border-2 border-white snap-start snap-always"></div>
          <div className="transform transition duration-200 hover:scale-110 origin-bottom-left bg-mycabinbed bg-cover min-h-[270px] min-w-[216px] border-2 border-white snap-start snap-always"></div>
          <div className="transform transition duration-200 hover:scale-110 origin-bottom-left bg-swapmyenergy bg-cover min-h-[270px] min-w-[216px] border-2 border-white snap-start snap-always"></div>
          <div className="transform transition duration-200 hover:scale-110 origin-bottom-left bg-white min-h-[270px] min-w-[216px] border-2 border-white snap-start snap-always"></div>
          <div className="transform transition duration-200 hover:scale-110 origin-bottom-left bg-white min-h-[270px] min-w-[216px] border-2 border-white snap-start snap-always"></div>
          <div className="transform transition duration-200 hover:scale-110 origin-bottom-left bg-white min-h-[270px] min-w-[216px] border-2 border-white snap-start snap-always"></div>
          <div className="transform transition duration-200 hover:scale-110 origin-bottom-left bg-white min-h-[270px] min-w-[216px] border-2 border-white snap-start snap-always"></div>
          <div className="transform transition duration-200 hover:scale-110 origin-bottom-left bg-white min-h-[270px] min-w-[216px] border-2 border-white snap-start snap-always"></div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group w-[30px] h-[30px] rotate-180 hover:scale-110"
              onClick={() => {
                ProjectViewerRight();
              }}
            >
              <path
                d="M0.430991 10.8221L13.431 19.8221C13.581 19.9259 13.7566 19.9866 13.9387 19.9978C14.1208 20.009 14.3025 19.9702 14.4641 19.8855C14.6257 19.8009 14.761 19.6736 14.8555 19.5175C14.95 19.3614 14.9999 19.1825 15 19.0001V1.00005C15.0001 0.817529 14.9503 0.638454 14.8559 0.482234C14.7615 0.326014 14.6261 0.198608 14.4645 0.113824C14.3029 0.0290394 14.1211 -0.00988955 13.9389 0.00125612C13.7567 0.0124018 13.5811 0.0731969 13.431 0.177053L0.430991 9.17705C0.29855 9.26948 0.190388 9.39253 0.115702 9.53573C0.0410156 9.67893 0.00201416 9.83805 0.00201416 9.99955C0.00201416 10.1611 0.0410156 10.3202 0.115702 10.4634C0.190388 10.6066 0.29855 10.7296 0.430991 10.8221V10.8221Z"
                fill="white"
                className="group-hover:fill-gigapink"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
