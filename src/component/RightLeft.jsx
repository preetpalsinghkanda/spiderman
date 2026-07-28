import React from "react";
import arrow from "../assets/arrow.png";
import { gsap} from "gsap"
import { useGSAP } from "@gsap/react";

const RightLeft = () => {

useGSAP( ()=>{


    


})






  return (
    <div style={{ fontFamily: "Bricolage Grotesque" }} className="bg-[#BD3334]">
      <div className="flex py-10 overflow-hidden">

        
        <div className="flex shrink-0 px-8 items-center  gap-13">
          <h1 className="text-6xl font-[700]">BRAND NEW DAY</h1>
          <img className="h-14" src={arrow} alt="" />
        </div>

        <div className="flex shrink-0 px-8 items-center  gap-13">
          <h1 className="text-6xl font-[700]">BRAND NEW DAY</h1>
          <img className="h-14" src={arrow} alt="" />
        </div>

        <div className="flex shrink-0 px-8 items-center  gap-13">
          <h1 className="text-6xl font-[700]">BRAND NEW DAY</h1>
          <img className="h-14" src={arrow} alt="" />
        </div>

        <div className="flex shrink-0 px-8 items-center  gap-13">
          <h1 className="text-6xl font-[700]">BRAND NEW DAY</h1>
          <img className="h-14" src={arrow} alt="" />
        </div>
        <div className="flex shrink-0 px-8 items-center  gap-13">
          <h1 className="text-6xl font-[700]">BRAND NEW DAY</h1>
          <img className="h-14" src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightLeft;
