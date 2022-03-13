import * as React from "react";
import useMouse from "@react-hook/mouse-position";
import MagicHover from "magic-hover";

export const HomeServices = () => {
  const options = {
    max: 60,
    reverse: true,
    perspective: 2000,
    scale: { x: 1.1, y: 1.1, z: 1.1 },
    rotate: 0,
    translate: { x: 0, y: 0 },
  };

  var container = "";
  var inner = "";

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function () {
    return counter++ % refreshRate === 0;
  };

  var onMouseEnterHandler = function (event) {
    update(event);
  };

  var onMouseLeaveHandler = function () {
    inner.style = "";
  };

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  var update = function (event) {
    console.log(mouse);
    updateTransformStyle(mouse.y / 190 / 2, mouse.x / 190 / 2);
  };

  var updateTransformStyle = function (x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";

    inner.style.transform = style;
  };

  return (
    <div className="w-full px-4 py-20">
      <div className="max-w-[1250px] mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-10">
        <div className="group flex flex-col mx-auto lg:gap-0 md:gap-4 gap-0">
          <div className="flex flex-row">
            <img
              src="/services/webdesign.png"
              id="inner"
              className="lg:h-[190px] md:h-[150px] h-[190px]"
            />
          </div>
          <div className="w-[120px] h-[40px] group-hover:bg-gigablue group-hover:border-gigablue border-2 border-gigablue flex flex-col justify-center -translate-y-[25px] -z-20">
            <p className="font-poppins font-semibold text-center group-hover:text-white">
              Take A Look
            </p>
          </div>
        </div>
        <div className="group flex flex-col mx-auto lg:gap-0 md:gap-4 gap-0">
          <div className="flex flex-row">
            <img
              src="/services/branding.png"
              className="lg:h-[190px] md:h-[150px] h-[190px]"
            />
          </div>
          <div className="w-[120px] h-[40px] group-hover:bg-gigablue group-hover:border-gigablue border-2 border-gigablue flex flex-col justify-center -translate-y-[25px] -z-20">
            <p className="font-poppins font-semibold text-center group-hover:text-white">
              Take A Look
            </p>
          </div>
        </div>
        <div className="group flex flex-col mx-auto lg:gap-0 md:gap-4 gap-0">
          <div className="flex flex-row">
            <img
              src="/services/socialmedia.png"
              className="lg:h-[190px] md:h-[150px] h-[190px]"
            />
          </div>
          <div className="w-[120px] h-[40px] group-hover:bg-gigablue group-hover:border-gigablue border-2 border-gigablue flex flex-col justify-center -translate-y-[25px] -z-20">
            <p className="font-poppins font-semibold text-center group-hover:text-white">
              Take A Look
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
