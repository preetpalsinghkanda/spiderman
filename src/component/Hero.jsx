import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import spiderHeroImg from "../assets/spider-unsplash.jpg";
import leftphoto from "../assets/leftphoto.webp";
import rightphoto from "../assets/rightphoto.webp";
import longSpider from "../assets/longSpider.png";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        // markers: true,
        pin: true,
        scrub: true,
        end: "+=3050",
        wheelMultiplayer: 2,
      },
    });

    tl.to(".hero_img", {
      width: "6vw",
      height: "100vh",

      left: "47%",
      duration: 8,
      ease: "none",

      transformOrigin: "center center",
      // ease: "power3.out",
    });

    tl.to(".overlay", {
      opacity: 1,
      duration: 2,
    });

    tl.to(".hero_img", {
      rotate: 77,
      width: "8vh",
      height: "90vh",
      x: "12",
      transformOrigin: "center center",
      duration: 6,
    });

    tl.from(".spider_text .left", {
      x: -330,
      duration: 4,
    }).from(
      ".spider_text .right",
      {
        x: 330,
        duration: 4,
      },
      "<",
    );

    tl.to(
      ".hero_img",
      {
        scale: 0,
        transformOrigin: "center center",
        duration: 5,
        backgroundColor: "#EE3335",
      },
      "<",
    );

    tl.to(
      ".overlay",
      {
        backgroundColor: "#EE3335",
        duration: 2.5,
      },
      "<",
    );

    tl.to(
      ".spider_text",
      {
        gap: "180px",
        duration: 1,
        ease: "none",
      },
      "<",
    );

    tl.to(".spider_text", {
      gap: "56px",
      duration: 1,
    });

    gsap.set(".left_top_img", {
      yPercent: -100,
    });

    gsap.set(".right_bottom_img", {
      yPercent: 100,
    });

    tl.to(".left_top_img", {
      yPercent: 0,
      duration: 8,
    });

    tl.to(
      ".right_bottom_img",
      {
        yPercent: 0,
        duration: 8,
      },
      "<",
    );

    gsap.set([".line1", ".line2", ".line3", ".line4"], {
      yPercent: 20,
      opacity: 0,
    });

    tl.to([".line1", ".line3"], {
      opacity: 1,
      duration: 3,
      yPercent: 0,
    });

    tl.to(
      [".line2", ".line4"],
      {
        opacity: 1,
        duration: 3,
        yPercent: 0,
      },
      "+=0.1",
    );

    gsap.set(".longSpider", {
      yPercent: 100,
    });

    gsap.set(".leftright", {
      yPercent: 0,
    });

    gsap.set(".leftright_overlay", {
      opacity: 0,
    });

    tl.to(".longSpider", {
      yPercent: -1,
      duration: 12,
    });

    tl.to(
      ".leftright",
      {
        delay: 6,
        yPercent: -100,
        duration: 8,
        ease: "none",
      },
      "<",
    );

    tl.to(
      ".leftright_overlay",
      {
        opacity: 1,
        duration: 4,
        ease: "none",
      },
      "<",
    );
  });

  return (
    <div className="hero  overflow-hidden relative  h-[100vh] bg-[#F5F2ED] flex justify-center items-center">
      <div className="  absolute z-300  hero_img    top-0 w-screen h-screen overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={spiderHeroImg}
          alt=""
        />

        <div className="absolute  inset-0 bg-black  overlay opacity-0"></div>
      </div>

      <div className="spider_text  gap-14 flex items-center inset-0 absolute justify-center">
        <div className="left ">
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

        <div className="right ">
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
            className="my-4 w-80  text-start  text-sm font-[500]"
          >
            WITH GREAT POWER COMES GREAT RESPONSIBILITY. STEP INTO THE WORLD OF
            THE SPIDER MAN BRAND NEW DAY.
          </p>
        </div>
      </div>

      <div className="h-full leftright w-full flex">
        <div className="absolute inset-0 bg-black leftright_overlay z-50"></div>
        <div className="h-full relative flex-1  bg-[black] left_top_img">
          <img className="h-full w-full object-cover" src={leftphoto} alt="" />

          <div className="lefttext absolute inset-0 overflow-hidden ">
            <h3
              style={{ fontFamily: "Libre Baskerville" }}
              className="text-8xl lefttext-content w-full  px-4 absolute flex justify-between flex-col top-24 text-[#EE3335] z-700"
            >
              <div className="flex line1 justify-between">
                Brand <span>New</span>
              </div>
              <div className=" w-full line2 items-end flex self-end flex-col">
                Punisher <span className="">Alliance</span>
              </div>
            </h3>
          </div>
        </div>
        <div className="h-full flex-1  bg-[white] right_bottom_img">
          <img
            style={{ objectPosition: "bottom" }}
            className="h-full  w-full object-cover"
            src={rightphoto}
            alt=""
          />

          <div className="righttext absolute inset-0 overflow-hidden">
            <h3
              style={{ fontFamily: "Libre Baskerville" }}
              className="text-8xl righttext-content w-full px-4 absolute flex justify-between flex-col top-24 text-[#EE3335] z-700"
            >
              <div className="flex line3 justify-between">
                Brains <span>Over</span>{" "}
              </div>
              <div className="w-full line4 flex-col flex justify-between">
                Brutal <span>Strength</span>
              </div>
            </h3>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-0 left-0 longSpider">
        <img className="w-full h-auto object-top" src={longSpider} alt="" />
      </div>
    </div>
  );
};

export default Hero;
