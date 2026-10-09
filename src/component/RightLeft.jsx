import React from "react";
import arrow from "../assets/arrow.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const RightLeft = () => {
  useGSAP(() => {
    window.addEventListener("wheel", function (info) {
      if (info.deltaY > 0) {
        gsap.to(".day", {
          xPercent: -100,
          duration: 4,
          repeat: -1,
          ease: "none",
          overwrite: true,
        });

        gsap.to(".day img", {
          rotate: 0,
        });
      } else {
        gsap.to(".day", {
          xPercent: 100,
          duration: 4,
          repeat: -1,
          ease: "none",
          overwrite: true,
        });

        gsap.to(".day img", {
          rotate: 180,
        });
      }
    });
  });

  return (
    <div
    // ref={bar}
      style={{ fontFamily: "Bricolage Grotesque" }}
      className="bg-[#BD3334]  -rotate-3"
    >
      <div className="flex  xl:py-10 lg:py-8  overflow-hidden">
        <div
          style={{ transform: "translateX(-100%)" }}
          className="flex day shrink-0 px-8  items-center  gap-13"
        >
          <h1 className="xl:text-6xl lg:text-5xl font-[700]">BRAND NEW DAY</h1>
          <img className="xl:h-14 lg:h-12" src={arrow} alt="" />
        </div>

        <div
          style={{ transform: "translateX(-100%)" }}
          className="flex day px-8 shrink-0  items-center  gap-13"
        >
          <h1 className="xl:text-6xl lg:text-5xl font-[700]">BRAND NEW DAY</h1>
          <img className="xl:h-14 lg:h-12" src={arrow} alt="" />
        </div>

        <div
          style={{ transform: "translateX(-100%)" }}
          className="flex day shrink-0 px-8 items-center  gap-13"
        >
          <h1 className="xl:text-6xl lg:text-5xl font-[700]">BRAND NEW DAY</h1>
          <img className="xl:h-14 lg:h-12" src={arrow} alt="" />
        </div>

        <div
          style={{ transform: "translateX(-100%)" }}
          className="flex day shrink-0 px-8  items-center  gap-13"
        >
          <h1 className="xl:text-6xl lg:text-5xl font-[700]">BRAND NEW DAY</h1>
          <img className="xl:h-14 lg:h-12" src={arrow} alt="" />
        </div>
        <div
          style={{ transform: "translateX(-100%)" }}
          className="flex day shrink-0 px-8 items-center  gap-13"
        >
          <h1 className="xl:text-6xl lg:text-5xl font-[700]">BRAND NEW DAY</h1>
          <img className="xl:h-14 lg:h-12" src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightLeft;
