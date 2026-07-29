import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger : ".hero",
        start : "top top",
        markers : true ,
        pin : true ,
        scrub : true ,
        end : "+=3000",
      },
    });

tl.to(".hero_img" , {
  width: "55vw",
  height : "100vh",
   x: "22.5vw",
  duration : "2",
  ease  :"none"
})








  });

  return (
    <div className="hero  overflow-hidden relative  h-[100vh] bg-[#F5F2ED] flex justify-center items-center">

      <div className="border absolute inset-0 w-[100%] h-[100%] hero_img  h-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://i.ytimg.com/vi/C8WnR3wLFyY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDhje78gp8rfjITIFrcFoYJNe7rnA"
            alt=""
          />
        </div>



      <div className=" gap-8 flex items-center inset-0 absolute justify-center">
        <div className="opacity-0">
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

        

        <div className="opacity-0">
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
