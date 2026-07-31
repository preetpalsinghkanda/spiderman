import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import spiderHeroImg from "../assets/spider-unsplash.jpg";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        markers: true,
        pin: true,
        scrub: true,
        end: "+=1350",
        wheelMultiplayer: 2,
      },
    });

    tl.to(".hero_img", {
      width: "6vw",
      height: "100vh",

      left: "48%",
      duration: "2",
      ease: "none",
      scrub: 2,
      transformOrigin: "center n cemter",
      ease: "power3.out",
    });

    gsap.to(".spider_text .left", {
      x: -350,
    });

    gsap.to(".spider_text .right", {
      x: 350,
    });
  });

  return (
    <div className="hero  overflow-hidden relative  h-[100vh] bg-[#F5F2ED] flex justify-center items-center">
      <div className=" absolute z-300  hero_img   top-0 w-screen h-screen overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={spiderHeroImg}
          alt=""
        />
      </div>

      <div className="spider_text gap-8 flex items-center inset-0 absolute justify-center">
        <div className="left">
          <div className=" flex  flex-col ">
            <div className="w-full  my-6 flex justify-between text-xs font-bold text-[#EE3335]">
              <span style={{ letterSpacing: "2px" }} className="">
                MEANING
              </span>
              <span>S</span>
            </div>
            <h1
              style={{ fontFamily: "Libre Baskerville" }}
              className="text-8xl text-[#EE3335]"
            >
              Spider
            </h1>
          </div>
          <p
            style={{ textAlign: "justify" }}
            className="w-80 my-4  text-sm font-[500]"
          >
            TO CELEBRATE THE LEGACY OF SPIDER MAN THROUGH HIS STORIES,
            SACRIFICES, AND UNFORGETTABLE ADVENTURES.
          </p>
        </div>

        {/* <div className="h-15     border w-[51.5vw] bg-[#040809] -rotate-90"></div> */}

        <div className="right">
          <div className=" flex  flex-col ">
            <div className="w-55  my-6 flex justify-between text-xs font-bold text-[#EE3335]">
              <span>MARVEL</span>
              <span>STUDIO</span>
            </div>
            <h1
              style={{ fontFamily: "Libre Baskerville" }}
              className="text-8xl text-[#EE3335]"
            >
              Man
            </h1>
          </div>
          <p
            style={{ textAlign: "justify" }}
            className="my-4 w-70  text-start  text-sm font-[500]"
          >
            WITH GREAT POWER COMES GREAT RESPONSIBILITY. STEP INTO THE WORLD OF
            THE SPIDER MAN BRAND NEW DAY.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
