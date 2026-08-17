import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import spiderHeroImg from "../assets/spider-unsplash.jpg";
import leftphoto from "../assets/leftphoto.webp";
import rightphoto from "../assets/rightphoto.webp";
import longSpider from "../assets/longSpider.png";
import spiderVideo from "../assets/bgspider.mp4";
import peter from "../assets/peter.png";
import mj from "../assets/mj.png";
import frnd from "../assets/frnd.png";
import jane from "../assets/jane.png";
import banner from "../assets/hulk.png";
import scorpion from "../assets/scorpion.png";
import punisher from "../assets/punisher.png";
import footerSpider from "../assets/footerspider.jpg";

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
        // markers: true,
        pin: true,
        scrub: 3,
        end: "+=10000",
        // wheelMultiplier: 2,
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
      duration: 130,
    });

    tl.to(
      ".right_bottom_img",
      {
        yPercent: 0,
        duration: 130,
      },
      "<",
    );

    gsap.set([".line1", ".line2", ".line3", ".line4"], {
      yPercent: 20,
      opacity: 0,
    });

    tl.to([".line1", ".line3"], {
      opacity: 1,
      duration: 25,
      yPercent: 0,
    });

    tl.to(
      [".line2", ".line4"],
      {
        opacity: 1,
        duration: 25,
        yPercent: 0,
      },
      "+=0.2",
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
      duration: 600,
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
        duration: 150,
      },
      "<",
    );

    tl.to(
      ".leftright_overlay",
      {
        opacity: 0.7,
        duration: 40,
      },
      "<",
    );

    gsap.set(".spidervideo", {
      // bottom: 0,
      clipPath: "inset(100% 0% 0% 0%)",
    });

    gsap.set([".spidervideo_text_firstline", ".spidervideo_text_secondline"], {
      yPercent: 60,
      opacity: 0,
    });

    tl.to(".spidervideo", {
      // height: "100vh",
      duration: 300,
      clipPath: "inset(0% 0% 0% 0%)",
    });

    tl.to(
      ".longSpiderBlack",
      {
        opacity: 0.8,
        duration: 80,
      },
      "<10%",
    );

    tl.to(
      ".spidervideo_text_firstline",
      {
        yPercent: 0,
        duration: 10,
        opacity: 1,
      },
      "-=190",
    );

    tl.to(
      ".spidervideo_text_secondline",
      {
        yPercent: 0,
        duration: 10,
        opacity: 1,
      },
      "-=195",
    );

    gsap.set(".starcast", {
      yPercent: 80,
    });

    tl.to(
      ".starcast",
      {
        yPercent: 0,
        duration: 300,
      },
      "+=30",
    );

    tl.to(
      ".spidervideo",
      {
        yPercent: -50,
        duration: 100,
      },
      "<",
    );

    gsap.set(".starcast_heading span", {
      yPercent: 6,
      opacity: 0,
    });

    tl.to(
      ".starcast_heading span",
      {
        yPercent: 0,
        opacity: 1,
        duration: 30,
        stagger: 6,
      },
      "-=245",
    );

    // gsap.set(".allcast_img",{
    //   top: "70px",

    // })

    tl.to(
      ".peter_img",
      {
        yPercent: 50,
        duration: 200,
        xPercent: -12,
      },
      "-=150",
    );

    tl.to(
      ".allcast_img",
      {
        top: "70px",
        duration: 80,
      },
      "<",
    );

    gsap.set(".peter_text", {
      opacity: 0,
      yPercent: 30,
    });

    tl.to(
      ".peter_text",
      {
        opacity: 1,
        duration: 20,
        yPercent: 0,
      },
      "+=30",
    );

    gsap.set(
      [
        ".char2_box",
        ".char3_box",
        ".char4_box",
        ".char5_box",
        ".char6_box",
        ".char7_box",
      ],
      {
        // opacity : 0 ,
        yPercent: 20,
        xPercent: -12,
      },
    );

    gsap.set(".char2_img", {
      opacity: 0,
      yPercent: 30,
      xPercent: 10,
    });

    gsap.set(
      [".char3_img", ".char4_img", ".char5_img", ".char6_img", ".char7_img"],
      {
        opacity: 0,
        yPercent: 30,
        xPercent: 0,
      },
    );

    gsap.set(
      [
        ".char2_text",
        ".char3_text",
        ".char4_text",
        ".char5_text",
        ".char6_text",
        ".char7_text",
      ],
      {
        opacity: 0,
        yPercent: 30,
      },
    );

    tl.to(
      ".peterparker_img",
      {
        opacity: 0,
        yPercent: -20,
        duration: 80,
      },
      "+=50 ",
    );

    tl.to(
      ".peter_text",
      {
        opacity: 0,
        duration: 50,
        yPercent: 40,
      },
      "+=10",
    );

    tl.to(
      ".char2_box",
      {
        duration: 80,

        y: 448,
        yPercent: 0,
      },
      "<",
    );

    tl.to(
      ".char2_img",
      {
        opacity: 1,
        yPercent: 0,
        duration: 40,
      },
      "+=10",
    );

    tl.to(
      ".char2_text",
      {
        opacity: 1,
        yPercent: 0,
        duration: 30,
      },
      "+=15",
    );

    tl.to(
      ".char2_img",
      {
        opacity: 0,
        yPercent: -20,
        duration: 80,
      },
      "+=50 ",
    );

    tl.to(
      ".char2_text",
      {
        opacity: 0,
        duration: 50,
        yPercent: 40,
      },
      "+=10",
    );

    tl.to(
      ".char3_box",
      {
        duration: 80,
        y: 448,
        yPercent: 0,
      },
      "<",
    );

    tl.to(
      ".char3_img",
      {
        opacity: 1,
        yPercent: 0,
        duration: 40,
        xPercent: 0,
      },
      "+=10",
    );

    tl.to(
      ".char3_text",
      {
        opacity: 1,
        yPercent: 0,
        duration: 40,
      },
      "+=15",
    );

    tl.to(
      ".char3_img",
      {
        opacity: 0,
        yPercent: -20,
        duration: 80,
      },
      "+=50 ",
    );

    tl.to(
      ".char3_text",
      {
        opacity: 0,
        duration: 50,
        yPercent: 40,
      },
      "+=10",
    );

    tl.to(
      ".char4_box",
      {
        duration: 80,
        y: 400,
        yPercent: 0,
      },
      "<",
    );

    tl.to(
      ".char4_img",
      {
        opacity: 1,
        yPercent: 0,

        duration: 40,
        xPercent: 0,
      },
      "+=10",
    );

    tl.to(
      ".char4_text",
      {
        opacity: 1,
        yPercent: 0,
        duration: 40,
      },
      "+=15",
    );

    tl.to(
      ".char4_img",
      {
        opacity: 0,
        yPercent: -20,
        duration: 80,
      },
      "+=50",
    );

    tl.to(
      ".char4_text",
      {
        opacity: 0,
        duration: 50,
        yPercent: 40,
      },
      "+=10",
    );

    tl.to(
      ".char5_box",
      {
        duration: 80,
        y: 400,
        yPercent: 0,
      },
      "<",
    );

    tl.to(
      ".char5_img",
      {
        opacity: 1,
        yPercent: 0,
        duration: 40,
        xPercent: 0,
      },
      "+=10",
    );

    tl.to(
      ".char5_text",
      {
        opacity: 1,
        yPercent: 0,
        duration: 40,
      },
      "+=15",
    );

    tl.to(
      ".char5_img",
      {
        opacity: 0,
        yPercent: -20,
        duration: 80,
      },
      "+=50",
    );

    tl.to(
      ".char5_text",
      {
        opacity: 0,
        duration: 50,
        yPercent: 40,
      },
      "+=10",
    );

    tl.to(
      ".char6_box",
      {
        duration: 80,
        y: 400,
        yPercent: 0,
      },
      "<",
    );

    tl.to(
      ".char6_img",
      {
        opacity: 1,
        yPercent: 0,
        duration: 40,
        xPercent: 0,
      },
      "+=10",
    );

    tl.to(
      ".char6_text",
      {
        opacity: 1,
        yPercent: 0,
        duration: 40,
      },
      "+=15",
    );

    tl.to(
      ".char6_img",
      {
        opacity: 0,
        yPercent: -20,
        duration: 80,
      },
      "+=50",
    );

    tl.to(
      ".char6_text",
      {
        opacity: 0,
        duration: 50,
        yPercent: 40,
      },
      "+=10",
    );

    tl.to(
      ".char7_box",
      {
        duration: 80,
        y: 400,
        yPercent: 0,
      },
      "<",
    );

    tl.to(
      ".char7_img",
      {
        opacity: 1,
        yPercent: 0,
        duration: 40,
        xPercent: 0,
      },
      "+=10",
    );

    tl.to(
      ".char7_text",
      {
        opacity: 1,
        yPercent: 0,
        duration: 40,
      },
      "+=15",
    );

    tl.to(
      ".char7_img",
      {
        opacity: 0,
        yPercent: -20,
        duration: 80,
      },
      "+=50",
    );

    tl.to(
      ".char7_text",
      {
        opacity: 0,
        duration: 50,
        yPercent: 40,
      },
      "+=10",
    );

    gsap.set(".footerimg", {
      clipPath: "polygon(50% 0%, 50% 0% , 50% 100% , 50% 100%)",
    });

    tl.to(".footerimg", {
      clipPath: "polygon(0% 0%, 100% 0% ,100% 100% , 0% 100%)",
      duration: 50,
    });

    gsap.set(".footer_text", {
      yPercent: 140,
    });

    tl.to(".footer_text", {
      yPercent: -140,
      duration: 600,
    });
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

      {/* long spider  */}
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

      {/* video  */}
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
          <div className="text-[#EE3335]  w-full flex justify-between spidervideo_text_firstline">
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

          <div className="flex w-full spidervideo_text_secondline justify-between text-[#EE3335]">
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

      <div className="starcast bg-[#F5F2ED] text-[#EE3335] z-70 h-[230vh]  absolute overflow-visible w-full ">
        <h2
          style={{ fontFamily: "Libre Baskerville" }}
          className="text-8xl starcast_heading  fixed my-45 text-center tracking-tighter"
        >
          <span>Meet The Cast</span>
          <span className="inline-block italic">
            New faces Familiar legacy
          </span>{" "}
          <span className="inline-block">One Brand New Day</span>
        </h2>

        <div className="absolute allcast_img w-full  left-1/8 h-[screen] top-40 z-[45] ">
          <div className="char_wrap relative w-screen h-[100vh] ">
            <div className="peter_img absolute inset-0    overflow-hidden flex-col  flex justify-center items-center  w-screen ">
              <div className="peterparker_img">
                <img className="h-auto object-contain " src={peter} alt="" />
                {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F5F2ED] to-transparent z-30 "></div> */}
              </div>

              <div className=" items-center peter_text flex px-10 justify-between relative bottom-4 w-full">
                <h4
                  style={{ fontFamily: "Sekuya" }}
                  className="uppercase text-6xl"
                >
                  Peter <span className="block">Parker</span>
                </h4>
                <p className=" max-w-sm font-medium text-[15px] text-justify">
                  PETER PARKER RETURNS TO A NEW CHAPTER, CARRYING THE WEIGHT OF
                  HIS PAST WHILE FACING AN UNCERTAIN FUTURE. BEHIND THE MASK, HE
                  REMAINS A HERO SHAPED BY LOSS, RESPONSIBILITY, AND THE CHOICE
                  TO RISE AGAIN.
                </p>
              </div>
            </div>

            <div className="char2_box absolute  h-screen inset-0 overflow-hidden flex-col flex justify-center items-center w-screen ">
              <div className="char2_img ">
                <img src={mj} alt="" className="h-auto  object-contain " />
              </div>

              <div className="items-center char2_text  flex px-10 justify-between relative w-full bottom-4">
                <h4
                  style={{ fontFamily: "Sekuya" }}
                  className="uppercase text-6xl"
                >
                  Mary jane <span className="block">watson</span>
                </h4>
                <p className="max-w-sm font-medium text-[15px] text-justify">
                  MJ RETURNS TO A NEW CHAPTER, CARRYING THE MEMORIES OF THE PAST
                  WHILE STEPPING INTO AN UNCERTAIN FUTURE. STRONG, RESILIENT,
                  AND UNAFRAID, SHE STANDS BESIDE PETER AS A FAMILIAR HEART IN A
                  BRAND NEW DAY.
                </p>
              </div>
            </div>

            <div className="char3_box absolute  h-screen gap-16 inset-0 overflow-hidden flex-col flex justify-center items-center w-screen">
              <div className="char3_img">
                <img src={frnd} alt="" className="h-auto object-contain" />
              </div>
              <div className="items-center char3_text flex px-10 justify-between relative w-full bottom-4 ">
                <h2
                  style={{ fontFamily: "Sekuya" }}
                  className="uppercase text-6xl"
                >
                  Ned <span className="block">Leeds</span>
                </h2>
                <p className="max-w-sm font-medium text-[15px] text-justify">
                  NED LEEDS RETURNS TO A NEW CHAPTER, CARRYING THE LESSONS OF
                  THE PAST WHILE STEPPING INTO AN UNCERTAIN FUTURE. LOYAL,
                  BRILLIANT, AND UNWAVERING, HE STANDS BESIDE PETER AS A TRUSTED
                  FRIEND THROUGH EVERY TWIST OF A BRAND NEW DAY.
                </p>
              </div>
            </div>

            <div className="char4_box absolute h-screen  inset-0 overflow-hidden flex-col flex justify-center items-center w-screen">
              <div className="char4_img">
                <img src={jane} alt="" className="h-auto object-contain" />
              </div>
              <div className="items-center char4_text flex px-10 justify-between relative w-full bottom-4">
                <h2
                  style={{ fontFamily: "Sekuya" }}
                  className="uppercase text-6xl"
                >
                  Jean <span className="block">grey</span>
                </h2>
                <p className="max-w-sm font-medium text-[15px] text-justify">
                  JEAN GREY RETURNS TO A NEW CHAPTER, CARRYING THE STRENGTH OF
                  HER PAST WHILE STEPPING INTO AN UNCERTAIN FUTURE. FEARLESS,
                  COMPASSIONATE, AND RESILIENT, SHE BRINGS A POWERFUL NEW
                  PRESENCE TO PETER’S WORLD ON A BRAND NEW DAY.
                </p>
              </div>
            </div>

            <div className="char5_box absolute h-screen top-15  inset-0 overflow-hidden flex-col flex justify-center items-center w-screen">
              <div className="char5_img">
                <img src={banner} alt="" className="h-auto object-contain" />
              </div>
              <div className="items-center char5_text flex px-10 justify-between relative w-full bottom-4">
                <h2
                  style={{ fontFamily: "Sekuya" }}
                  className="uppercase text-6xl"
                >
                  Dr. Bruce <span className="block">banner</span>
                </h2>
                <p className="max-w-sm font-medium text-[15px] text-justify">
                  DR. BRUCE BANNER RETURNS TO A NEW CHAPTER, CARRYING THE WEIGHT
                  OF HIS PAST WHILE STEPPING INTO AN UNCERTAIN FUTURE.
                  BRILLIANT, POWERFUL, AND DRIVEN, HE BRINGS A UNIQUE FORCE TO
                  PETER’S WORLD AS A NEW DAY BEGINS.
                </p>
              </div>
            </div>

            <div className="char6_box absolute h-screen top-8 gap-10 inset-0 overflow-hidden flex-col flex justify-center items-center w-screen">
              <div className="char6_img">
                <img src={punisher} alt="" className="h-auto object-contain" />
              </div>
              <div className="items-center char6_text flex px-10 justify-between relative w-full bottom-4">
                <h2
                  style={{ fontFamily: "Sekuya" }}
                  className="uppercase text-6xl"
                >
                  frank <span className="block">castle</span>
                </h2>
                <p className="max-w-sm font-medium text-[15px] text-justify">
                  FRANK CASTLE (PUNSIHER) RETURNS TO A NEW CHAPTER, CARRYING THE
                  PAIN OF HIS PAST WHILE WALKING A PATH OF VENGEANCE.FEARLESS,
                  RELENTLESS, AND DRIVEN, HE BRINGS A DEADLY FORCE TO PETER'S
                  WORLD AS A NEW DAY BEGINS.
                </p>
              </div>
            </div>

            <div className="char7_box absolute h-screen gap-15 top-4 inset-0 overflow-hidden flex-col flex justify-center items-center w-screen">
              <div className="char7_img">
                <img src={scorpion} alt="" className="h-auto object-contain" />
              </div>
              <div className="items-center char7_text flex px-10 justify-between relative w-full bottom-4">
                <h2
                  style={{ fontFamily: "Sekuya" }}
                  className="uppercase text-6xl"
                >
                  scorpion <span className="block">- mac gargan</span>
                </h2>
                <p className="max-w-sm font-medium text-[15px] text-justify">
                  SCORPION RETURNS TO A NEW CHAPTER, CARRYING THE RAGE OF HIS
                  PAST WHILE HUNTING FOR A CHANCE AT REVENGE.RUTHLESS,
                  DANGEROUS, AND UNPREDICTABLE, HE BRINGS A DEADLY NEW THREAT TO
                  PETER’S WORLD AS A NEW DAY BEGINS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute footerimg h-full w-full  overflow-hidden z-80">
        <img src={footerSpider} className="w-full h-full object-cover" alt="" />

        <div className="absolute inset-0 bg-black/20 "></div>

        <div className="footer_text absolute flex-col inset-0 flex items-center justify-center z-10">
          <p
            style={{ fontFamily: "Sekuya, system-ui" }}
            className="text-white  uppercase text-6xl [-webkit-text-stroke:1px_black] max-w-[700px] text-center"
          >
            a brand new day begins with a fresh perspective, a quieter kind of
            courage, and the belief that every new beginning holds the power to
            change what come next
          </p>

          <div className=" ">
            <p className="my-10 text-white max-w-sm text-justify  mx-auto">
              A NEW DAY IS NOT SIMPLY A BEGINNING. IT IS A CHANCE TO SEE, FEEL,
              AND EXPERIENCE THE WORLD.
            </p>
          </div>

          <div className=" text-[#EE3335] w-full gap-6 flex flex-col uppercase px-6">
            <div className="flex justify-between ">
              <span>&copy;2026</span>
              <span>site by preet</span>
            </div>
            <p
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              className="text-[] text-center text-9xl font-[900]"
            >
              spider Brand new day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
