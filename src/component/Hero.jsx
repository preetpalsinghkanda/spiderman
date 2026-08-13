import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import spiderHeroImg from "../assets/spider-unsplash.jpg";
import leftphoto from "../assets/leftphoto.webp";
import rightphoto from "../assets/rightphoto.webp";
import longSpider from "../assets/longSpider.png";
import spiderVideo from "../assets/bgspider.mp4";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.set(".longspider_text", {
      opacity: 0,
      yPercent: 100,
    });

    gsap.set(".longSpiderBlack", {
      opacity: 0,
    });

    // gsap.set(".spidervideo", {
    //   // opacity : 0 ,
    //   yPercent: 100,
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        markers: true,
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
      duration: 40,
      ease: "none",

      transformOrigin: "center center",
      // ease: "power3.out",
    });

    tl.to(".overlay", {
      opacity: 1,
      duration: 15,
    });

    tl.to(".hero_img", {
      rotate: 77,
      width: "8vh",
      height: "90vh",
      x: "12",
      transformOrigin: "center center",
      duration: 35,
    });

    tl.from(".spider_text .left", {
      x: -330,
      duration: 30,
    }).from(
      ".spider_text .right",
      {
        x: 330,
        duration: 30,
      },
      "<",
    );

    tl.to(
      ".hero_img",
      {
        scale: 0,
        transformOrigin: "center center",
        duration: 40,
        backgroundColor: "#EE3335",
      },
      "<",
    );

    tl.to(
      ".overlay",
      {
        backgroundColor: "#EE3335",
        duration: 10,
      },
      "<",
    );

    tl.to(
      ".spider_text",
      {
        gap: "180px",
        duration: 6,
        ease: "none",
      },
      "<",
    );

    tl.to(".spider_text", {
      gap: "56px",
      duration: 6,
    });

    gsap.set(".left_top_img", {
      yPercent: -100,
    });

    gsap.set(".right_bottom_img", {
      yPercent: 100,
    });

    tl.to(".left_top_img", {
      yPercent: 0,
      duration: 40,
    });

    tl.to(
      ".right_bottom_img",
      {
        yPercent: 0,
        duration: 40,
      },
      "<",
    );

    gsap.set([".line1", ".line2", ".line3", ".line4"], {
      yPercent: 20,
      opacity: 0,
    });

    tl.to([".line1", ".line3"], {
      opacity: 1,
      duration: 6,
      yPercent: 0,
    });

    tl.to(
      [".line2", ".line4"],
      {
        opacity: 1,
        duration: 6,
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
      yPercent: -190,
      duration: 100,
    });

    tl.to(
      ".longspider_text",
      {
        opacity: 1,
        yPercent: 0,
        duration: 30,
      },
      "<10%",
    );

    tl.to(
      ".leftright",
      {
        delay: 1,
        yPercent: -100,
        duration: 30,
        ease: "none",
      },
      "<",
    );

    tl.to(
      ".leftright_overlay",
      {
        opacity: 0.7,
        duration: 10,
        ease: "none",
      },
      "<",
    );

    gsap.set(".spidervideo", {
      // bottom: 0,
      clipPath: "inset(100% 0% 0% 0%)",
    });

    tl.to(".spidervideo", {
      // height: "100vh",
      duration: 50,
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "none",
    });

    tl.to(
      ".longSpiderBlack",
      {
        opacity: 1,
        duration: 20,
      },
      "<10%",
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

      <div className="w-full absolute z-10 top-0 left-0 h-screen longSpider">
        <img className="w-full h-auto object-top" src={longSpider} alt="" />

        <div className="absolute left-0 right-0 top-[1200px] -bottom-500 longSpiderBlack bg-black/70 z-50 pointer-events-none"></div>
      </div>

      <div className="longspider_text absolute inset-0 z-[30] flex items-center justify-center">
        <p
          style={{ fontFamily: "Anton" }}
          className=" text-white max-w-2xl text-center uppercase text-8xl"
        >
          Brand New Day
          <span
            style={{ fontFamily: "Bricolage Grotesque" }}
            className="text-2xl"
          >
            is
          </span>
          <span className="block">
            <span
              style={{ fontFamily: "Bricolage Grotesque" }}
              className="text-2xl mx-2 "
            >
              a
            </span>
            new chapter in
          </span>
          the story of
          <span className="block text-[#A00302]  [-webkit-text-stroke:2px_white]  ">
            Peter Parker
          </span>
        </p>
      </div>

      <div className="spidervideo  z-40 w-full h-full overflow-hidden absolute">
        <video
          className="absolute inset-0 w-full h-full object-cover  "
          autoPlay
          loop
          muted
          src={spiderVideo}
        ></video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute justify-center uppercase  flex-col spidervideo_text w-full px-8 inset-0 flex items-center  z-60">
          <div className="text-[#EE3335]  w-full flex justify-between">
            <div className="">
              <span
                style={{ fontFamily: "Sekuya" }}
                className="text-8xl font-extrabold"
              >
                Truth
              </span>
              <span className="mx-3">01</span>
            </div>
            <div>
              <span className="mx-3">03</span>
              <span
                style={{ fontFamily: "Sekuya" }}
                className="text-8xl font-extrabold"
              >
                grit
              </span>
            </div>
          </div>

          <div className="flex w-full justify-between text-[#EE3335]">
            <div>
              <span
                style={{ fontFamily: "Sekuya" }}
                className="text-8xl font-extrabold"
              >
                Humility
              </span>
              <span className="mx-3">02</span>
            </div>

            <div>
              <span className="mx-3">04</span>
              <span
                style={{ fontFamily: "Sekuya" }}
                className="text-8xl font-extrabold"
              >
                Evolve
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
