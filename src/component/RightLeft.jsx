import React from "react";
import arrow from "../assets/arrow.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const RightLeft = () => {
  useGSAP(() => {
    window.addEventListener("wheel", function (info) {
      if (info.deltaY > 0) {
        gsap.to(".day", {
          xPercent: -200,

          duration: 7,
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
          duration: 6,
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
      style={{ fontFamily: "Bricolage Grotesque" }}
      className="bg-[#BD3334]  -rotate-3"
    >
      <div className="flex py-10  overflow-hidden">
        <div
          style={{ transform: "translateX(-100%)" }}
          className="flex day shrink-0 px-8  items-center  gap-13"
        >
          <h1 className="text-6xl font-[700]">BRAND NEW DAY</h1>
          <img className="h-14" src={arrow} alt="" />
        </div>

        <div
          style={{ transform: "translateX(-100%)" }}
          className="flex day px-8 shrink-0  items-center  gap-13"
        >
          <h1 className="text-6xl font-[700]">BRAND NEW DAY</h1>
          <img className="h-14" src={arrow} alt="" />
        </div>

        <div
          style={{ transform: "translateX(-100%)" }}
          className="flex day shrink-0 px-8 items-center  gap-13"
        >
          <h1 className="text-6xl font-[700]">BRAND NEW DAY</h1>
          <img className="h-14" src={arrow} alt="" />
        </div>

        <div
          style={{ transform: "translateX(-100%)" }}
          className="flex day shrink-0 px-8  items-center  gap-13"
        >
          <h1 className="text-6xl font-[700]">BRAND NEW DAY</h1>
          <img className="h-14" src={arrow} alt="" />
        </div>
        <div
          style={{ transform: "translateX(-100%)" }}
          className="flex day shrink-0 px-8 items-center  gap-13"
        >
          <h1 className="text-6xl font-[700]">BRAND NEW DAY</h1>
          <img className="h-14" src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightLeft;
